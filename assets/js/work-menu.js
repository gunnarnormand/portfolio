const WorkMenu = (function() {

	function init() {

		// Map number x from range [a, b] to [c, d]
		const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

		// Linear interpolation
		const lerp = (a, b, n) => (1 - n) * a + n * b;

		const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

		// Gets the mouse position
		const getMousePos = (e) => {
			let posx = 0;
			let posy = 0;
			if (!e) e = window.event;
			if (e.pageX || e.pageY) {
				posx = e.pageX;
				posy = e.pageY;
			} else if (e.clientX || e.clientY) {
				posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
				posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
			}

			return {
				x: posx,
				y: posy
			};
		};

		// Menu class
		class Menu {
			constructor(el) {
				this.DOM = {el: el};
				this.DOM.menuItems = this.DOM.el.querySelectorAll('.menu__item');
				this.animatableProperties = {
				    // translationX
				    tx: {previous: 0, current: 0, amt: 0.08},
				    // translationY
				    ty: {previous: 0, current: 0, amt: 0.08},
				    // Rotation angle
				    rotation: {previous: 0, current: 0, amt: 0.08},
				    // CSS filter (brightness) value
				    brightness: {previous: 1, current: 1, amt: 0.08}
				};
				this.menuItems = [];
				[...this.DOM.menuItems].forEach((item, pos) => {
					this.menuItems.push(new MenuItem(item, pos, this.animatableProperties));
				});
			}
		}


		// MENU ITEM CLASS
		class MenuItem {
			constructor(el, inMenuPosition, animatableProperties) {
				this.DOM = {el: el};
				this.inMenuPosition = inMenuPosition;
				this.animatableProperties = animatableProperties;
				this.DOM.textInner = this.DOM.el.querySelector('.menu__item-textinner');
				this.layout();
				this.initEvents();
			}

			layout() {
				this.DOM.reveal = document.createElement('div');
			  this.DOM.reveal.className = 'hover-reveal';
				this.DOM.revealInner = document.createElement('div');
			  this.DOM.revealInner.className = 'hover-reveal__inner';
			  this.DOM.revealImage = document.createElement('div');
			  this.DOM.revealImage.className = 'hover-reveal__img';
			  this.DOM.revealImage.style.backgroundImage = `url(${images[this.inMenuPosition][1]})`;
			  this.DOM.revealInner.appendChild(this.DOM.revealImage);
			  this.DOM.reveal.appendChild(this.DOM.revealInner);
			  this.DOM.el.appendChild(this.DOM.reveal);
			}

			calcBounds() {
				this.bounds = {
					el: this.DOM.el.getBoundingClientRect(),
					reveal: this.DOM.reveal.getBoundingClientRect()
				};
			}

			initEvents() {
				this.mouseenterFn = (ev) => {
					this.showImage();
					this.firstRAFCycle = true;
					this.loopRender();
				};
				this.mouseleaveFn = () => {
					this.stopRendering();
					this.hideImage();
				};
				this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
				this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
			}

			showImage() {
				TweenMax.killTweensOf(this.DOM.revealInner);
				TweenMax.killTweensOf(this.DOM.revealImage);
				this.tl = new TimelineMax({
					onStart: () => {
						this.DOM.reveal.style.opacity = 1;
						TweenMax.set(this.DOM.el, {zIndex: (images.length + 99)});
					}
				})
				.to(this.DOM.revealInner, 1, {
					startAt: {x: direction.x < 0 ? '-100%' : '100%'},
					x: '0%',
					ease: 'Expo.easeOut'
				})
				.to(this.DOM.revealImage, 1, {
					startAt: {x: direction.x < 0 ? '100%': '-100%'},
					x: '0%',
					ease: 'Expo.easeOut'
				}, 0);

			}

			hideImage() {
				TweenMax.killTweensOf(this.DOM.revealInner);
				TweenMax.killTweensOf(this.DOM.revealImage);

				this.tl = new TimelineMax({
					onStart: () => {
						TweenMax.set(this.DOM.el, {zIndex: 1});
					},
					onComplete: () => {
						TweenMax.set(this.DOM.reveal, {opacity: 0});
					}
				})
				.to(this.DOM.revealInner, 0.2, {
					x: direction.x < 0 ? '100%' : '-100%',
					ease: 'Expo.easeOut'
				})
				.to(this.DOM.revealImage, 0.2, {
					x: direction.x < 0 ? '-100%' : '100%',
					ease: 'Expo.easeOut'
				}, 0);
			}

			loopRender() {
				if ( !this.requestId ) {
					this.requestId = requestAnimationFrame(() => this.render());
				}
			}

			stopRendering() {
				if ( this.requestId ) {
					window.cancelAnimationFrame(this.requestId);
					this.requestId = undefined;
				}
			}

			render() {
				this.requestId = undefined;
		    // calculate position/sizes the first time
		    if ( this.firstRAFCycle ) {
			    this.calcBounds();
		    }

		    // calculate the mouse distance (current vs previous cycle)
		    const mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 100);
		    // direction where the mouse is moving
		    direction = {x: mousePosCache.x-mousepos.x, y: mousePosCache.y-mousepos.y};
		    // updated cache values
		    mousePosCache = {x: mousepos.x, y: mousepos.y};

		    // new translation values
		    // the center of the image element is positioned where the mouse is
		    this.animatableProperties.tx.current = Math.abs(mousepos.x - this.bounds.el.left) - this.bounds.reveal.width/2;
		    this.animatableProperties.ty.current = Math.abs(mousepos.y - this.bounds.el.top) - this.bounds.reveal.height/2;
		    // new rotation value
		    this.animatableProperties.rotation.current = this.firstRAFCycle ? 0 : map(mouseDistanceX,0,100,0,direction.x < 0 ? 60 : -60);
		    // new filter value
		    this.animatableProperties.brightness.current = this.firstRAFCycle ? 1 : map(mouseDistanceX,0,100,1,4);

		    // set up the interpolated values
		    // for the first cycle, both the interpolated values need to be the same so there's no "lerped" animation between the previous and current state
		    this.animatableProperties.tx.previous = this.firstRAFCycle ? this.animatableProperties.tx.current : lerp(this.animatableProperties.tx.previous, this.animatableProperties.tx.current, this.animatableProperties.tx.amt);
		    this.animatableProperties.ty.previous = this.firstRAFCycle ? this.animatableProperties.ty.current : lerp(this.animatableProperties.ty.previous, this.animatableProperties.ty.current, this.animatableProperties.ty.amt);
		    this.animatableProperties.rotation.previous = this.firstRAFCycle ? this.animatableProperties.rotation.current : lerp(this.animatableProperties.rotation.previous, this.animatableProperties.rotation.current, this.animatableProperties.rotation.amt);
		    this.animatableProperties.brightness.previous = this.firstRAFCycle ? this.animatableProperties.brightness.current : lerp(this.animatableProperties.brightness.previous, this.animatableProperties.brightness.current, this.animatableProperties.brightness.amt);

		    // set styles
		    TweenMax.set(this.DOM.reveal, {
			    x: this.animatableProperties.tx.previous,
			    y: this.animatableProperties.ty.previous,
			    rotation: this.animatableProperties.rotation.previous,
			    filter: `brightness(${this.animatableProperties.brightness.previous})`
		    });

		    // loop
		    this.firstRAFCycle = false;
		    this.loopRender();
			}

		}


		const menuEl = document.querySelector('.work-menu');
		const imagesEl = document.querySelectorAll('.menu__item');
		let imagesArr = [];
		imagesEl.forEach(image => {
			imagesArr.push(image.dataset.img);
		});
		const images = Object.entries(imagesArr);
		let mousepos = {
			x: 0,
			y: 0
		};
		let mousePosCache = mousepos;
		let direction = {
			x: mousePosCache.x - mousepos.x,
			y: mousePosCache.y - mousepos.y
		};
		window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

		new Menu(menuEl);
	}
	return {
		init: init
	};
})();
