const CursorModule = (function() {

	const innerCursor = document.querySelector(".cursor--small");
	const canvas = document.querySelector(".cursor--canvas");
	let clientX = -100;
	let clientY = -100;
	let lastX = 0;
	let lastY = 0;
	let useAltStrokeColor = false;
	let isStuck = false;
	let showCursor = false;
	let group;
	let stuckX;
	let stuckY;
	let fillOuterCursor;

	function init() {
		initCursor();
		initCanvas();
		initCursorHovers();
	}

	const initCursor = () => {
		document.addEventListener("mousemove", e => {
			clientX = e.clientX;
			clientY = e.clientY;
		});
		const render = () => {
			TweenMax.set(innerCursor, {
				x: clientX,
				y: clientY
			});
			requestAnimationFrame(render);
		};
		requestAnimationFrame(render);
	};

	const initCanvas = () => {
		const shapeBounds = {
			width: 75,
			height: 75,
		};
		paper.setup(canvas);
		const strokeColor = '#3cfc81';
		const altStrokeColor = '#272727';
		const strokeWidth = 1;
		const segments = 8;
		const radius = 15;
		const noiseScale = 150;
		const noiseRange = 6;
		let isNoisy = false;
		const polygon = new paper.Path.RegularPolygon(
			new paper.Point(0, 0),
			segments,
			radius
		);
		polygon.strokeColor = strokeColor;
		polygon.strokeWidth = strokeWidth;
		polygon.smooth();
		group = new paper.Group([polygon]);
		group.applyMatrix = false;
		const noiseObjects = polygon.segments.map(() => new SimplexNoise());
		let bigCoordinates = [];
		const lerp = (a, b, n) => {
			return (1 - n) * a + n * b;
		};
		const map = (value, in_min, in_max, out_min, out_max) => {
			return (
				((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
			);
		};
		paper.view.onFrame = event => {
			if (useAltStrokeColor) {
				polygon.strokeColor = altStrokeColor;
			} else {
				polygon.strokeColor = strokeColor;
			}
			if (!isStuck) {
				// move circle around normally
				lastX = lerp(lastX, clientX, 0.2);
				lastY = lerp(lastY, clientY, 0.2);
				group.position = new paper.Point(lastX, lastY);
			} else if (isStuck) {
				// fixed position on a nav item
				lastX = lerp(lastX, stuckX, 0.08);
				lastY = lerp(lastY, stuckY, 0.08);
				group.position = new paper.Point(lastX, lastY);
			}
			if (isStuck && polygon.bounds.width < shapeBounds.width) {
				// scale up the shape
				polygon.scale(1.15);
			} else if (!isStuck && polygon.bounds.width > 30) {
				// remove noise
				if (isNoisy) {
					polygon.segments.forEach((segment, i) => {
						segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
					});
					isNoisy = false;
					bigCoordinates = [];
				}
				// scale down the shape
				const scaleDown = 0.92;
				polygon.scale(scaleDown);
			}
			// while stuck and big, apply simplex noise
			if (isStuck && polygon.bounds.width >= shapeBounds.width) {
				isNoisy = true;
				// first get coordinates of large circle
				if (bigCoordinates.length === 0) {
					polygon.segments.forEach((segment, i) => {
						bigCoordinates[i] = [segment.point.x, segment.point.y];
					});
				}
				// loop over all points of the polygon
				polygon.segments.forEach((segment, i) => {
					// get new noise value
					// we divide event.count by noiseScale to get a very smooth value
					const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
					const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);
					// map the noise value to our defined range
					const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
					const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);
					// apply distortion to coordinates
					const newX = bigCoordinates[i][0] + distortionX;
					const newY = bigCoordinates[i][1] + distortionY;
					// set new (noisy) coordindate of point
					segment.point.set(newX, newY);
				});
			}

			polygon.smooth();
		};
	};

	const initCursorHovers = () => {

		const handleSkipControlMouseEnter = e => {
			TweenMax.to(innerCursor, 1, {
				background: '#3cfc81',
				scale: 2,
				ease: Expo.easeOut
			});
		};

		const handleSkipControlMouseLeave = e => {
			TweenMax.to(innerCursor, 1, {
				background: 'rgba(60,252,129,.25)',
				scale: 1,
				ease: Expo.easeOut
			});
		};

		const handleCanvasCursorMouseEnter = e => {
			const navItem = e.currentTarget;
			const navItemBox = navItem.getBoundingClientRect();
			stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
			stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
			isStuck = true;
			TweenMax.to(innerCursor, 1, {
				background: '#3cfc81',
				scale: 0.25,
				ease: Expo.easeOut
			});
		};

		const handleCanvasCursorMouseLeave = () => {
			isStuck = false;
			TweenMax.to(innerCursor, 1, {
				background: 'rgba(60,252,129,.25)',
				scale: 1,
				ease: Expo.easeOut
			});
		};

		const handleSocialCursorMouseEnter = e => {
			const navItem = e.currentTarget;
			const navItemBox = navItem.getBoundingClientRect();
			stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
			stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
			isStuck = true;
			useAltStrokeColor = true;
			TweenMax.to(innerCursor, 1, {
				background: '#3cfc81',
				scale: 0,
				ease: Expo.easeOut
			});
			TweenMax.to(innerCursor, 1, {
				background: '#3cfc81',
				scale: 0,
				ease: Expo.easeOut
			});
		};

		const handleSocialCursorMouseLeave = () => {
			isStuck = false;
			useAltStrokeColor = false;
			TweenMax.to(innerCursor, 1, {
				background: 'rgba(60,252,129,.25)',
				scale: 1,
				ease: Expo.easeOut
			});
		};

		const skipControls = document.querySelectorAll('.skip-control');
		skipControls.forEach(link => {
			link.addEventListener('mouseenter', handleSkipControlMouseEnter);
			link.addEventListener('mouseleave', handleSkipControlMouseLeave);
		});

		const $links = document.querySelectorAll('.link');
		$links.forEach(link => {
			link.addEventListener('mouseenter', handleCanvasCursorMouseEnter);
			link.addEventListener('mouseleave', handleCanvasCursorMouseLeave);
		});

		const $socialLinks = document.querySelectorAll('.social-link');
		$socialLinks.forEach(link => {
			link.addEventListener('mouseenter', handleSocialCursorMouseEnter);
			link.addEventListener('mouseleave', handleSocialCursorMouseLeave);
		});
	};

	return {
		init: init
	};
})();

window.addEventListener('load', function() {
	if (window.innerWidth >= 768) {
		CursorModule.init();
	}
});
