const LinksModule = (function() {

	const init = function() {
		basicLinks();
		if (window.innerWidth >= 768) {
			socialLinks();
		}
	};

	function basicLinks() {
		const $links = document.querySelectorAll('.link');

		function handleLinkEnter(e) {
			e.preventDefault();
			let $text = this.innerText;
			let currentLink = this;
			const linkEnterTl = new TimelineMax();
			if (currentLink.classList.contains('mouseenter')) {
				return;
			} else {
				currentLink.classList.add('mouseenter');
				linkEnterTl
					.from(currentLink, 0.3, {
						color: '#4bfffc',
						scrambleText: {
							text: $text,
							chars: '01',
							speed: 1,
							revealDelay: 0
						},
						ease: Expo.easeOut
					});
			}
			setTimeout(() => {
				currentLink.classList.remove('mouseenter');
			}, 300);
		}

		function handleLinkLeave(e) {
			e.preventDefault();
			let currentLink = this;
			const linkLeaveTl = new TimelineMax();
			linkLeaveTl.fromTo(currentLink, 1, {
				color: '#ec007c'
			}, {
				color: '#3cfc81',
				ease: Expo.easeOut
			});
		}
		$links.forEach(link => {
			link.addEventListener('mouseenter', handleLinkEnter);
			link.addEventListener('mouseleave', handleLinkLeave);
		});
	}

	function socialLinks() {
		const $socialLinks = document.querySelectorAll('.social-link');

		function handleSocialLinkEnter(e) {
			e.preventDefault();

			let svg = this.firstElementChild;
			let text = this.lastElementChild;

			let sLinkEnterTl = new TimelineMax();
			sLinkEnterTl
				.to(svg, 0.25, {yPercent:-100, autoAlpha:0, force3D:true, ease: Back.easeOut.config(1.7)} )
				.fromTo(text, 0.25, {autoAlpha:0, yPercent:100, force3D:true,},{autoAlpha:1, yPercent:0, force3D:true, ease: Back.easeOut.config(1.7)} )
				;
		}

		function handleSocialLinkLeave(e) {
			e.preventDefault();

			let svg = this.firstElementChild;
			let text = this.lastElementChild;

			let sLinkLeaveTl = new TimelineMax();
			sLinkLeaveTl
				.to(svg, 0.5, {yPercent:0, autoAlpha:1, force3D:true, ease: Back.easeOut.config(1.7)}, 'leave')
				.to(text, 0.25, {yPercent:100, autoAlpha:0, force3D:true, ease: Back.easeOut.config(1.7)}, 'leave')
				;
		}

		$socialLinks.forEach(slink => {
			slink.addEventListener('mouseenter', handleSocialLinkEnter);
			slink.addEventListener('mouseleave', handleSocialLinkLeave);
		});
	}

	return {
		init: init
	};

})();

window.addEventListener('load', function() {
	LinksModule.init();
});
