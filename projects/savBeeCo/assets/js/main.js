const loaderModule = (function() {
	const $loader = document.querySelector('#loader');
	const init = function() {
		const loaderTl = new TimelineMax({
			onStart: mainContent.page1Enter,
			delay: 2,
			smoothChildTiming: true
		}).to($loader, 2, {yPercent: 100, alpha:1, force3D:true, ease: Expo.easeInOut}, "loader")
		  .from('#nav-logo', 4, {alpha: 0, yPercent: 200, force3D:true, ease: Expo.easeOut}, "loader")
		  .to('#loader img', 1, {alpha: 0, yPercent: 100, rotation: 360, force3D:true, ease: Expo.easeIn}, "loader")
		  .from('.onepage-pagination', 5, {alpha: 0, xPercent: -100, force3D:true, ease: Expo.easeOut}, "loader");
	}
	return {
		init: init
	}
})();

const mainContent = (function() {
	let currentPageNumber = 0;
	const circle1 = document.querySelector('#path-1');
	const circle2 = document.querySelector('#path-2');
	const circle3 = document.querySelector('#path-3');
	const circle4 = document.querySelector('#path-4');
	const scrollerTl = new TimelineMax({repeat:-1});
		scrollerTl
			.from(circle1, .5, {drawSVG:0,ease: Circ.easeOut}, .5)
			.from(circle2, .6, {drawSVG:0,ease: Circ.easeOut})
			.from(circle3, .7, {drawSVG:0,ease: Circ.easeOut})
			.from(circle4, .8, {drawSVG:0,ease: Circ.easeOut})
			.to(circle1, .3,  { drawSVG:0, stroke:"#f0b227", ease: Circ.easeOut} )
			.to(circle2, .3,  { drawSVG:0, stroke:"#f0b227", ease: Circ.easeOut} )
			.to(circle3, .3,  { drawSVG:0, stroke:"#f0b227", ease: Circ.easeOut} )
			.to(circle4, .3,  { drawSVG:0, stroke:"#f0b227", ease: Circ.easeOut} );
	const page1Enter = function() {
		const page1EnterTl = new TimelineMax({
			delay: 0.5,
			smoothChildTiming: true
		});
		if (window.innerWidth > 768 && window.innerWidth < 1440) {
			page1EnterTl.fromTo('.bee1', 3, {alpha: 1, yPercent: 100, xPercent: 0, scale: 0, rotation: 0, force3D:true}, {alpha: 1, yPercent: -40, scale: 1, rotation: 0, force3D:true, ease: Expo.easeInOut}, "p1e");
		} else {
			page1EnterTl.fromTo('.bee1', 3, {alpha: 1, yPercent: 100, xPercent: 0, scale: 0, rotation: 0, force3D:true}, {alpha: 1, yPercent: -25, scale: 1, rotation: 0, force3D:true, ease: Expo.easeInOut}, "p1e");
		}
		page1EnterTl.fromTo('#page1 .bg', 3.5, {alpha: 0, yPercent: 100, xPercent: 0, force3D:true},{alpha: 1, yPercent: 0, xPercent: 0, force3D:true, ease: Expo.easeInOut}, "p1e");
		page1EnterTl.fromTo('#stb', 3, {alpha: 0, yPercent: 100, force3D:true},{alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeInOut}, "p1e");
		page1EnterTl.fromTo('#scroll-indicator', 3, {alpha: 0},{alpha: 1, ease: Expo.easeInOut}, "p1e");
		// .to('.bee1', 2, {rotation:5, ease:"funWiggle"}, "p1e")
		page1EnterTl.to('.bee2', 1, {alpha: 0}, "p1e");
		page1EnterTl.to('.bee3', 1, {alpha: 0}, "p1e");
	}

	const page1Leave = function() {
		//console.log("run page1Leave animations");
		const page1LeaveTl = new TimelineMax({
			delay: 0,
			smoothChildTiming: true
		}).to('#scroll-indicator', 1, {alpha: 0, ease: Circ.easeOut}, "p1l")
		  .to('#page1 .bg', 1, {alpha: 0, yPercent: -100, force3D: true, ease: Circ.easeOut}, "p1l")
		  .to('#stb', 1, {alpha: 0, yPercent: -100, force3D: true, ease: Circ.easeOut}, "p1l");
	}

	const page2Enter = function() {
		// iphoneX hack for page2 text
		if (window.innerHeight === 812) {
			const $p2ptext = document.querySelectorAll('.page2ptext');
			for (var i = 0; i < $p2ptext.length; i++) {
				$p2ptext[i].style.fontSize = '97%';
			}
		};
		//console.log("run page2Enter animations");
		const page2EnterTl = new TimelineMax({
			delay: 1,
			paused: false,
			repeat: 0,
			repeatDelay: 0,
			yoyo: false,
			smoothChildTiming: true
		});
		if(window.innerWidth <= 768) {
			page2EnterTl.to('.bee1', 2, {alpha:1, yPercent: 0, xPercent: 0, scale: 0.8, rotation: 0, force3D: true, ease: Expo.easeOut}, "p2e");
		} else if (window.innerWidth <= 1120) {
			page2EnterTl.to('.bee1', 2, {alpha:1, yPercent: -125, xPercent: 0, scale: 0.6, rotation: 0, force3D: true, ease: Expo.easeOut}, "p2e");
		} else {
			page2EnterTl.to('.bee1', 2, {alpha:1, yPercent: -100, xPercent: 0, scale: 0.6, rotation: 0, force3D: true, ease: Expo.easeOut}, "p2e");
		}
		  page2EnterTl.to('.bee2', 1, {yPercent: -100, xPercent: 200, scale: 0.6, alpha: 0, rotation: 120, force3D: true, ease: Expo.easeIn}, "p2e")
		  page2EnterTl.to('.bee3', 1, {yPercent: -100, xPercent: -200, scale: 0.6, alpha: 0, rotation: -110, force3D: true, ease: Expo.easeIn}, "p2e")
		  page2EnterTl.fromTo('#page2 .yellow', 2, {xPercent: 100, force3D:true}, {alpha:1, xPercent: 0, force3D:true, ease: Expo.easeOut}, "p2e");
		  page2EnterTl.fromTo('#page2 .white', 1, {xPercent: -100, force3D:true}, {xPercent: 0, force3D:true, ease: Expo.easeOut}, "p2e+=.5");
		  page2EnterTl.fromTo('#page2 h6', 1, {alpha: 0, xPercent: 100, force3D:true}, {alpha: 1, xPercent: 0, force3D:true, ease: Expo.easeOut}, "p2e+=1");
		  if(window.innerWidth <= 768) {
		  	page2EnterTl.fromTo('#page2 .bg', 2, {alpha: 0, xPercent: -100, force3D:true}, {alpha: 1, xPercent: 0, force3D:true, ease: Expo.easeOut}, "p2e+=.25");
		  } else {
		  	page2EnterTl.fromTo('#page2 .bg', 2, {alpha: 0, xPercent: -100, force3D:true}, {alpha: 1, xPercent: 0, force3D:true, ease: Expo.easeOut}, "p2e+=1.25");
		  }
		  page2EnterTl.fromTo('#tc', 2, {alpha: 0, xPercent: -100, force3D:true}, {alpha: 1, xPercent: 0, force3D:true, ease: Expo.easeOut}, "p2e+=1.5");
		  page2EnterTl.fromTo('#page2 p', 2, {alpha: 0, xPercent: -100, force3D:true}, {alpha: 1, xPercent: 0, force3D:true, ease: Expo.easeOut}, "p2e+=1.5");
	}

	const page2Leave = function() {
		//console.log("run page2Leave animations");
		const page2LeaveTl = new TimelineMax({
			delay: 0,
			paused: false,
			repeat: 0,
			repeatDelay: 0,
			yoyo: false,
			smoothChildTiming: true,
		})
		  .to('#page2 .yellow', 1, {alpha: 0, xPercent: 100, force3D:true, ease: Circ.easeOut}, "p2l")
		  .to('#page2 .white', 1, {xPercent: -100, force3D:true, ease: Circ.easeOut}, "p2l")
		  .to('#page2 h6', 1, {alpha: 0, xPercent: 100, force3D:true, ease: Circ.easeOut}, "p2l")
		  .to('#page2 .bg', 1, {alpha: 0, xPercent: -100, force3D:true, ease: Circ.easeOut}, "p2l")
		  .to('#tc', 1, {alpha: 0, xPercent: -100, force3D:true, ease: Circ.easeOut}, "p2l")
		  .to('#page2 p', 1, {alpha: 0, xPercent: -100, force3D:true, ease: Circ.easeOut}, "p2l");
	}

	const page3Enter = function() {
		//console.log("run page3Enter animations");
		const $growBtn = document.querySelector('#grow-btn');
		const $growBtnSvg = document.querySelector('.grow-btn-1');
		const $growBtnSvgArrow = document.querySelector('.grow-btn-2');
		const $containBlock1 = document.querySelector('.contain-block-1');
		const $goBackGrowBtn = document.querySelector('#back-btn-grow');
		const $backBtnPath1 = document.querySelector('.back-btn-1');
		const $backBtnPath1_ = document.querySelector('.back-btn-1_');
		const $containBlock2 = document.querySelector('.contain-block-2');
		const $growBtns = document.querySelectorAll('.grow-btns');
		const $containBlock3 = document.querySelector('.contain-block-3');
		const $goBackHerbsBtn = document.querySelector('#back-btn-herbs');
		const $backBtnPath2 = document.querySelector('.back-btn-2');
		const $backBtnPath2_ = document.querySelector('.back-btn-2_');

		TweenMax.to($containBlock1, 0.25, {x:0, display:"flex", alpha: 1});
		TweenMax.set([$containBlock2, $containBlock3], {display:"none"});

		$growBtn.addEventListener('mouseenter', (e) => {
			TweenMax.to($growBtnSvg, 1, {drawSVG:0, stroke:"transparent", strokeWidth: '1.55px', ease: Circ.easeOut});
			TweenMax.to($growBtnSvgArrow, 1, {x: -5, force3D:true, ease: Circ.easeOut});
		});
		$growBtn.addEventListener('mouseleave', (e) => {
			TweenMax.to($growBtnSvg, 1, {drawSVG:'100%', stroke:"#512d1d", strokeWidth: '1.55px', ease: Circ.easeOut});
			TweenMax.to($growBtnSvgArrow, 1, {x: 0, force3D:true, ease: Circ.easeOut});
		});
		$growBtn.addEventListener('click', (e) => { // 1 to 2
			TweenMax.to($containBlock1, 0.25, {x:-100, display: "none", alpha: 0});
			TweenMax.fromTo($containBlock2, 0.25, {x: 100, force3D:true, alpha: 0}, {x: 0, force3D:true, alpha: 1, display: "flex", delay: 0.25, ease: Expo.easeInOut});
		});
		$goBackGrowBtn.addEventListener('click', (e) => {
			TweenMax.to($containBlock2, 0.25, {x: 100, display: "none", alpha: 0});
			TweenMax.fromTo($containBlock1, 0.25, {x: -100, force3D:true, alpha: 0}, {x: 0, force3D:true, alpha: 1, display: "flex", delay: 0.25, ease: Expo.easeInOut});
		});
		$goBackGrowBtn.addEventListener('mouseenter', (e) => {
			TweenMax.to($backBtnPath1, 0.25, {x: -10, force3D:true, ease: Back.easeOut.config(2)});
			TweenMax.to($backBtnPath1_, 0.25, {x: -10, force3D:true, ease: Circ.easeInOut, delay: .05});
		});
		$goBackGrowBtn.addEventListener('mouseleave', (e) => {
			TweenMax.to($backBtnPath1, 1, {stroke:'#512d1d', x: 0, drawSVG:'100%', force3D:true, ease: Circ.easeOut});
			TweenMax.to($backBtnPath1_, 1, {stroke:'#512d1d', x: 0, drawSVG:'100%', force3D:true, ease: Circ.easeOut});
		});
		$growBtns.forEach(button => button.addEventListener('click', (e) => {
			TweenMax.to($containBlock2, 0.25, {x:-100, force3D:true, display: "none", alpha: 0});
			TweenMax.fromTo($containBlock3, 0.25, {x: 100, force3D:true, alpha: 0}, {x: 0, force3D:true, alpha: 1, display: "flex", delay: 0.25, ease: Expo.easeInOut});
		}));
		$growBtns.forEach(button => button.addEventListener('mouseenter', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.garden-cls-2');
			let block = btnhovered.querySelector('.garden-cls-3');
			let arrow = btnhovered.querySelector('.garden-cls-4');
			// console.log(line, block, arrow);
			TweenMax.fromTo(line, 1, {drawSVG:'40%'},{drawSVG:'0%', stroke:"#f0b227", strokeWidth: '2.21px', ease: Circ.easeOut});
			TweenMax.to(block, .5, {x: -5, force3D:true, fill:'#f0b227', ease: Circ.easeOut});
			TweenMax.to(arrow, 1, {x: -5, force3D:true, ease: Circ.easeOut});
		}));
		$growBtns.forEach(button => button.addEventListener('mouseleave', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.garden-cls-2');
			let block = btnhovered.querySelector('.garden-cls-3');
			let arrow = btnhovered.querySelector('.garden-cls-4');
			// console.log(line, block, arrow);
			TweenMax.to(line, 1, {drawSVG:'100%', stroke:"#512d1d", strokeWidth: '2.21px', ease: Circ.easeOut});
			TweenMax.to(block, .25, {x: 0, force3D:true, fill:'#512d1d', ease: Circ.easeOut});
			TweenMax.to(arrow, .5, {x: 0, force3D:true, ease: Circ.easeOut});
		}));
		$goBackHerbsBtn.addEventListener('click', (e) => {
			TweenMax.to($containBlock3, 0.25, {x:100, force3D:true, display: "none", alpha: 0});
			TweenMax.fromTo($containBlock2, 0.25, {x: -100, force3D:true, alpha: 0}, {x: 0, force3D:true, alpha: 1, display: "flex", delay: 0.25, ease: Expo.easeInOut});
		});
		$goBackHerbsBtn.addEventListener('mouseenter', (e) => {
			TweenMax.to($backBtnPath2, 0.25, {x: -10, force3D:true, ease: Back.easeOut.config(2)});
			TweenMax.to($backBtnPath2_, 0.25, {x: -10, force3D:true, ease: Circ.easeInOut, delay: .05});
		});
		$goBackHerbsBtn.addEventListener('mouseleave', (e) => {
			TweenMax.to($backBtnPath2, 1, {stroke:'#512d1d', x: 0, drawSVG:'100%', force3D:true, ease: Circ.easeOut});
			TweenMax.to($backBtnPath2_, 1, {stroke:'#512d1d', x: 0, drawSVG:'100%', force3D:true, ease: Circ.easeOut});
		});
		const page3EnterTl = new TimelineMax({
			delay: 0,
			paused: false,
			smoothChildTiming: true
		});
		if (window.innerWidth < 768) {
			page3EnterTl.to('.bee1', 2, {yPercent: -70, scale: .4, xPercent: 0, rotation: 10, force3D: true, ease: Expo.easeInOut}, "p3e");
		} else {
			page3EnterTl.to('.bee1', 2, {yPercent: -80, scale: .4, xPercent: 0, rotation: 10, force3D: true, ease: Expo.easeInOut}, "p3e");
		}
		if (currentPageNumber == 1 || currentPageNumber == 2) {
			if (window.innerWidth <= 768) {
				page3EnterTl.fromTo('.bee2', 2, {
																				alpha: 0,
																				yPercent: 125,
																				xPercent: -90,
																				scale: 0,
																				rotation: -90,
																				force3D: true
																			}, {
																				alpha: 1,
																				yPercent: -85,
																				xPercent: -32,
																				scale: .4,
																				rotation: -30,
																				force3D: true,
																				ease: Expo.easeInOut}, "p3e");
			} else {
				page3EnterTl.fromTo('.bee2', 2, {
																				alpha: 0,
																				yPercent: 125,
																				xPercent: -90,
																				scale: 0,
																				rotation: -90,
																				force3D: true
																			}, {
																				alpha: 1,
																				yPercent: -115,
																				xPercent: -15,
																				scale: .4,
																				rotation: -20,
																				force3D: true,
																				ease: Expo.easeInOut}, "p3e");
			}
		} else if (currentPageNumber == 4) {
			if (window.innerWidth <= 768) {
				page3EnterTl.fromTo('.bee2', 2, {
																				alpha: 0,
																				yPercent: 125,
																				xPercent: -90,
																				scale: 0,
																				rotation: -90,
																				force3D: true
																			}, {
																				alpha: 1,
																				yPercent: -75,
																				xPercent: -32,
																				scale: .4,
																				rotation: -30,
																				force3D: true,
																				ease: Expo.easeInOut}, "p3e");
			} else {
				page3EnterTl.to('.bee2', 2, {alpha: 1, yPercent: -115, xPercent: -15, scale: .4, rotation: -20, force3D: true, ease: Expo.easeInOut}, "p3e");
			}
			page3EnterTl.to('.bee3', 2, {alpha: 1, yPercent: -225, xPercent: -400, scale: 0, rotation: -120, force3D: true, ease: Expo.easeInOut}, "p3e");
		}
		page3EnterTl.fromTo('#page3 .yellow', 2, {alpha: 1, yPercent: 100, force3D: true}, {alpha: 1, yPercent: 0, ease: Expo.easeInOut}, "p3e");
		page3EnterTl.fromTo('#page3 h6', 2, {alpha: 0, yPercent: -100, force3D: true}, {alpha: 1, yPercent: 0, ease: Expo.easeInOut}, "p3e+=.5");
		page3EnterTl.fromTo('#page3 .white', 2, {yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeInOut}, "p3e+=.5");
		page3EnterTl.fromTo('#page3 .bg', 2, {alpha: 0, yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeInOut}, "p3e+=.75");
		page3EnterTl.fromTo('#page3 .contain', 2, {alpha: 0, yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeInOut}, "p3e+=1");
	}
	const page3Leave = function() {
		//console.log("run page3Leave animations");
		const page3LeaveTl = new TimelineMax({
			delay: 0,
			paused: false,
			repeat: 0,
			repeatDelay: 0,
			yoyo: false,
			smoothChildTiming: true,
			// onComplete:
		}).to('#page3 .yellow', 1, {alpha: 0, yPercent: 100, force3D:true, ease: Circ.easeOut}, "p3l")
		  .to('#page3 h6', 1, {alpha: 0, yPercent: -100, force3D:true, ease: Circ.easeOut}, "p3l")
		  .to('#page3 .white', 1, {alpha: 0, yPercent: -100, force3D:true, ease: Circ.easeOut}, "p3l")
		  .to('#page3 .bg', 1, {alpha: 0, yPercent: -100, force3D:true, ease: Circ.easeOut}, "p3l")
		  .to('#page3 .contain', 1, {alpha: 0, yPercent: -100, force3D:true, ease: Circ.easeOut}, "p3l");
	}
	const page4Enter = function() {
		//console.log("run page4Enter animations");
		const $donateBtn = document.querySelector('#donate-btn');
		const $donateBtnSvg = document.querySelector('.donate-btn-1');
		const $donateBtnSvgArrow = document.querySelector('.donate-btn-2');
		const $donateBlock1 = document.querySelector('.donate-block-1');
		const $donateBlock2 = document.querySelector('.donate-block-2');
		const $donateButtons = document.querySelectorAll('.donate-btn');
		TweenMax.set([$donateBlock1], {display:'flex'});
		TweenMax.set([$donateBlock2], {display:'none'});
		$donateBtn.addEventListener('mouseenter', (e) => {
			TweenMax.to($donateBtnSvg, 1, {drawSVG:0, stroke:"transparent", strokeWidth: '2.21px', ease: Circ.easeOut});
			TweenMax.to($donateBtnSvgArrow, 1, {x: -5, force3D:true, ease: Circ.easeOut});
		});
		$donateBtn.addEventListener('mouseleave', (e) => {
			TweenMax.to($donateBtnSvg, 1, {drawSVG:'100%', stroke:"#512d1d", strokeWidth: '2.21px', ease: Circ.easeOut});
			TweenMax.to($donateBtnSvgArrow, 1, {x: 0, force3D:true, ease: Circ.easeOut});
		});
		$donateBtn.addEventListener('click', (e) => {
			TweenMax.set([$donateBlock1], {display:'none'});
			TweenMax.set([$donateBlock2], {display:'flex'});
			TweenMax.fromTo($donateBlock2, 0.5, {alpha: 0, x: 100, force3D:true}, {alpha: 1, force3D:true, x: 0, ease: Expo.easeInOut});
		});
		$donateButtons.forEach(button => button.addEventListener('mouseenter', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.donate-cls-1');
			let block = btnhovered.querySelector('.donate-cls-2');
			let price = btnhovered.querySelector('p');
			//console.log(line, block, price);
			TweenMax.to(line, 1, {drawSVG:'0%', stroke:"#f0b227", strokeWidth: '2px', ease: Circ.easeOut});
			TweenMax.to(block, .5, {x: 5, fill:'#f0b227', ease: Circ.easeOut});
			TweenMax.to(price, 1, {x: 5, force3D:true, ease: Circ.easeOut});
		}));
		$donateButtons.forEach(button => button.addEventListener('mouseleave', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.donate-cls-1');
			let block = btnhovered.querySelector('.donate-cls-2');
			let price = btnhovered.querySelector('p');
			//console.log(line, block, price);
			TweenMax.fromTo(line, .5, {drawSVG:'0%'},{drawSVG:'100%', stroke:"#512d1d", strokeWidth: '2px', ease: Circ.easeOut});
			TweenMax.to(block, .5, {x: 0, fill:'#512d1d', ease: Circ.easeOut});
			TweenMax.to(price, .5, {x: 0, force3D:true, ease: Circ.easeOut});
		}));
		const page4EnterTl = new TimelineMax({
			delay: 1,
			paused: false,
			repeat: 0,
			repeatDelay: 0,
			yoyo: false,
			smoothChildTiming: true,
		});
		if (window.innerWidth <= 768) {
			page4EnterTl.to('.bee1', 2, {alpha: 1, yPercent: -60, scale: .3, xPercent: -30, rotation: 10, force3D: true, ease: Expo.easeInOut}, "p4e");
			page4EnterTl.to('.bee2', 2, {alpha: 1, yPercent: -5, xPercent: -30, scale: .3, rotation: -30, force3D: true, ease: Expo.easeInOut}, "p4e");
			page4EnterTl.fromTo('.bee3', 2, {alpha: 0, yPercent: 0, xPercent: 0, scale: .1, rotation: -90, force3D: true, ease: Expo.easeInOut}, {alpha: 1, yPercent: -175, xPercent: -30, scale: .3, rotation: 10, force3D: true}, "p4e");
		} else {
			page4EnterTl.to('.bee1', 2, {alpha: 1, yPercent: -95, scale: .3, xPercent: 0, rotation: 10, force3D: true, ease: Expo.easeInOut}, "p4e");
			page4EnterTl.to('.bee2', 2, {alpha: 1, yPercent: -123, xPercent: -13, scale: .3, rotation: -30, force3D: true, ease: Expo.easeInOut}, "p4e+=.5");
			page4EnterTl.fromTo('.bee3', 2, {alpha: 0, yPercent: 0, xPercent: 0, scale: .1, rotation: -90, force3D: true, ease: Expo.easeInOut}, {alpha: 1, yPercent: -140, xPercent: 10, scale: .3, rotation: 10, force3D: true}, "p4e");
		}
		page4EnterTl.fromTo('#page4 .yellow', 2, {alpha: 1, xPercent: -100, force3D: true}, {alpha: 1, xPercent: 0, ease: Expo.easeOut}, "p4e");
		page4EnterTl.fromTo('#page4 h6', 2, {alpha: 0, yPercent: -100, force3D: true}, {alpha: 1, yPercent: 0, ease: Expo.easeOut}, "p4e+=.25");
		page4EnterTl.fromTo('#page4 .white', 2, {yPercent: 100, zIndex: -1, force3D:true}, {alpha: 1, yPercent: 0, zIndex: 0, force3D:true, ease: Expo.easeOut}, "p4e+=.75");
		page4EnterTl.fromTo('#page4 .bg', 2, {alpha: 0, yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeOut}, "p4e+=1");
		page4EnterTl.fromTo('#page4 .contain', 2, {alpha: 0, yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeOut}, "p4e+=1.25");
	}
	const page4Leave = function() {
	//console.log("run page4Leave animations");
		const page4LeaveTl = new TimelineMax({
			delay: 0,
			smoothChildTiming: true
		});
		page4LeaveTl.to('#page4 .yellow', 1, {alpha: 0, xPercent: -100, force3D: true, ease: Expo.easeOut}, "p4l");
		page4LeaveTl.to('#page4 h6', 1, {alpha: 0, yPercent: -50, force3D: true, ease: Expo.easeOut}, "p4l");
		page4LeaveTl.to('#page4 .white', 1, {yPercent: -50, force3D:true, zIndex: -1, ease: Expo.easeOut}, "p4l");
		page4LeaveTl.to('#page4 .bg', 1, {alpha: 0, yPercent: -50, force3D:true, ease: Expo.easeOut}, "p4l");
		page4LeaveTl.to('#page4 .contain', 1, {alpha: 0, yPercent: -50, force3D:true, ease: Expo.easeOut}, "p4l");
	}

	const page5Enter = function() {
		//console.log("run page5Enter animations");
		const $emailInput = document.querySelector('input[type="email"]');
		const $goInput = document.querySelector('input[type="submit"]');
		const $goBtnPath = document.querySelector('#go-btn-path');
		const $form = document.querySelector('#email');
		$form.addEventListener('submit', (e) => {
			e.preventDefault();
		});
		$emailInput.addEventListener('focus', (e) => {
			TweenMax.to($goBtnPath, 0.75, {fill:"#fff", x:-5, force3D:true, ease: Circ.easeOut});
			TweenMax.to($goInput, 0.75, {color:"#512d1d", ease: Circ.easeOut});
			TweenMax.to($emailInput, 0.75, {x:-5, ease: Circ.easeOut});
		});
		$emailInput.addEventListener('blur', (e) => {
			TweenMax.to($goBtnPath, 0.75, {fill:"#512d1d", x:0, force3D:true, ease: Circ.easeOut});
			TweenMax.to($goInput, 0.75, {color:"#fff", ease: Circ.easeOut});
			TweenMax.to($emailInput, 0.75, {x:0, ease: Circ.easeOut});
		});

		const page5EnterTl = new TimelineMax({
			delay: 1,
			paused: false,
			repeat: 0,
			repeatDelay: 0,
			yoyo: false,
			smoothChildTiming: true
		});
		page5EnterTl.to('.bee1', 2, {alpha: 0, yPercent: 100, scale: 0, xPercent: -100, rotation: 100, force3D: true, ease: Expo.easeInOut}, "p5e");
		page5EnterTl.to('.bee2', 2, {alpha: 0, yPercent: 200, xPercent: 100, scale: 0, rotation: -30, force3D: true, ease: Expo.easeInOut}, "p5e");
		page5EnterTl.to('.bee3', 2, {alpha: 0, yPercent: 0, xPercent: 0, scale: 0, rotation: -90, force3D: true, ease: Expo.easeInOut}, "p5e");
		page5EnterTl.fromTo('#page5 .yellow', 2, {alpha: 1, yPercent: 0, force3D: true}, {alpha: 1, yPercent: 0, ease: Expo.easeOut}, "p5e");
		page5EnterTl.fromTo('#page5 h6', 2, {alpha: 0, yPercent: 100, force3D: true}, {alpha: 1, yPercent: 0, ease: Expo.easeOut}, "p5e+=.25");
		page5EnterTl.fromTo('#page5 .white', 2, {yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeOut}, "p5e+=.75");
		page5EnterTl.fromTo('#page5 .bg', 2, {alpha: 0, yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeOut}, "p5e+=1");
		page5EnterTl.fromTo('#page5 .contain', 2, {alpha: 0, yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeOut}, "p5e+=1.25");
	}
	const page5Leave = function() {
		//console.log("run page5Leave animations");

		const page5LeaveTl = new TimelineMax({
			delay: 0,
			paused: false,
			repeat: 0,
			repeatDelay: 0,
			yoyo: false,
			smoothChildTiming: true,
		});
		page5LeaveTl.to('#page5 .yellow', 1, {alpha: 0, yPercent: 100, force3D: true, ease: Expo.easeOut}, "p5l");
		page5LeaveTl.to('#page5 h6', 1, {alpha: 0, yPercent: 100, force3D: true, ease: Expo.easeOut}, "p5l");
		page5LeaveTl.to('#page5 .white', 1, {yPercent: 100, force3D:true, ease: Expo.easeOut}, "p5l");
		page5LeaveTl.to('#page5 .bg', 1, {alpha: 0, yPercent: 100, force3D:true, ease: Expo.easeOut}, "p5l");
		page5LeaveTl.to('#page5 .contain', 1, {alpha: 0, yPercent: 100, force3D:true, ease: Expo.easeOut}, "p5l");
	}
	const init = function() {
		document.body.addEventListener("touchmove", function(e) {
			e.preventDefault();
		});
		onePageScroll(".main", {
			sectionContainer: "section",
		   	easing: "cubic-bezier(.50,0,.50,1)",
		   	animationTime: 1000,
		   	pagination: true,
		   	updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
		   	beforeMove: function(index) {
				//console.log("before currentpage", currentPageNumber);
				//console.log("before", index);
				if (currentPageNumber == 0) page1Leave();
				if (currentPageNumber == 1) page1Leave();
				if (currentPageNumber == 2) page2Leave();
				if (currentPageNumber == 3) page3Leave();
				if (currentPageNumber == 4) page4Leave();
				if (currentPageNumber == 5) page5Leave();
				if (index == 1) page1Enter();
				if (index == 2) page2Enter();
				if (index == 3) page3Enter();
				if (index == 4) page4Enter();
				if (index == 5) page5Enter();
		   	},
		   	afterMove: function(index) {
		   		currentPageNumber = index;
		   	},
		   	loop: false, // have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
		   	keyboard: true,
		   	responsiveFallback: false
		});
	}
	return {
		init: init,
		page1Enter: page1Enter
	}
})();

const shoppingCart = (function() {
	const $herbBtns = document.querySelectorAll('.herb-btns');
	const $aside = document.querySelector('aside');
	const $hive = document.querySelector('#shop-btn');
	const $cart = document.querySelector('#cart');
	const init = function() {
		$herbBtns.forEach(button => button.addEventListener('click', (e) => {
			addToCart();
			TweenMax.fromTo($hive, 1, {alpha: 0, yPercent: -100, force3D:true, ease: Bounce.easeOut}, {alpha: 1, yPercent: 0, force3D:true, ease: Bounce.easeOut});
		}));
		$herbBtns.forEach(button => button.addEventListener('mouseenter', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.herbs-cls-1');
			let block = btnhovered.querySelector('.herbs-cls-2');
			let $_ = btnhovered.querySelector('p');
			TweenMax.to(line, 1, {drawSVG:'0%', stroke:'#f0b227', strokeWidth: '2px', ease: Circ.easeOut});
			TweenMax.to(block, .5, {fill:'#f0b227', x: 5, force3D:true, ease: Circ.easeOut});
			TweenMax.to($_, 1, {color: '#512d1d', x: 5, force3D:true, ease: Circ.easeOut});
		}));
		$herbBtns.forEach(button => button.addEventListener('mouseleave', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.herbs-cls-1');
			let block = btnhovered.querySelector('.herbs-cls-2');
			let $_ = btnhovered.querySelector('p');
			TweenMax.to(line, 1, {drawSVG:'100%', stroke:'#512d1d', strokeWidth: '2px', ease: Circ.easeOut});
			TweenMax.to(block, .5, {fill:'#512d1d', x: 0, force3D:true, ease: Circ.easeOut});
			TweenMax.to($_, 1, {color: '#fcfcf5', x: 0, force3D:true, ease: Circ.easeOut});
		}));
		$hive.addEventListener('click', (e) => {


			//
			//
			// if ($aside.classList.contains('aside--active')) {
			// 	TweenMax.to($aside, 1, {xPercent:0, autoAlpha:0, force3D:true, ease: Circ.easeOut})
			// } else {
			// 	TweenMax.to($aside, 1, {xPercent:-100, autoAlpha:1, force3D:true, ease: Circ.easeOut})
			// }

		});
		let i = 0;
		CustomWiggle.create('wiggle1x', {wiggles: 5, type:'random'});
		CustomWiggle.create('wiggle1y', {wiggles: 7, type:'random'});
		CustomWiggle.create('wiggle2x', {wiggles: 8, type:'random'});
		CustomWiggle.create('wiggle2y', {wiggles: 9, type:'random'});
		CustomWiggle.create('wiggle3x', {wiggles: 5, type:'random'});
		CustomWiggle.create('wiggle3y', {wiggles: 4, type:'random'});
		CustomWiggle.create('wiggle4x', {wiggles: 10, type:'random'});
		CustomWiggle.create('wiggle4y', {wiggles: 6, type:'random'});
		CustomWiggle.create('wiggle5x', {wiggles: 14, type:'random'});
		CustomWiggle.create('wiggle5y', {wiggles: 7, type:'random'});
		function addToCart(e) {
			i++;
			$cart.innerHTML = `
				<span>cart(${i})</span>
			`;
			if (i === 1) {
				TweenMax.to('#tinybee1', .5, {alpha: 1});
				TweenMax.to('#tinybee1', 1, {x: 50, ease: 'wiggle1x', repeat: -1});
				TweenMax.to('#tinybee1', 1, {y: -50, ease: 'wiggle1y', repeat: -1});
			} if (i === 2) {
				TweenMax.to('#tinybee2', .5, {alpha: 1});
				TweenMax.to('#tinybee2', 1.5, {x: 50, ease: 'wiggle2x', repeat: -1});
				TweenMax.to('#tinybee2', 1.5, {y: -50, ease: 'wiggle2y', repeat: -1});
			} if (i === 3) {
				TweenMax.to('#tinybee3', .5, {alpha: 1});
				TweenMax.to('#tinybee3', 1, {x: 50, ease: 'wiggle3x', repeat: -1});
				TweenMax.to('#tinybee3', 1, {y: -50, ease: 'wiggle3y', repeat: -1});
			} if (i === 4) {
				TweenMax.to('#tinybee4', .5, {alpha: 1});
				TweenMax.to('#tinybee4', .8, {x: 50, ease: 'wiggle4x', repeat: -1});
				TweenMax.to('#tinybee4', .8, {y: -50, ease: 'wiggle4y', repeat: -1});
			}
			if (i === 5) {
				TweenMax.to('#tinybee5', .5, {alpha: 1});
				TweenMax.to('#tinybee5', .7, {x: 50, ease: 'wiggle5x', repeat: -1});
				TweenMax.to('#tinybee5', .7, {y: -50, ease: 'wiggle5y', repeat: -1});
			}
		}
	}
	return {
		init: init
	}
})();







const togglePanels = (function() {

	const $growHoriz = document.querySelectorAll('.grow-horiz');
	const $growHorizType = document.querySelectorAll('.grow-horiz-type');
	const init = function() {
		$growHoriz.forEach(panelH => panelH.addEventListener('mouseenter', function() {
			// console.log('yellow pane open');
			if(window.innerWidth <= 678) {
				const flyTo20 = TweenLite.to($growHoriz, .3, { width:'50%',
					ease: Power1.easeInOut
				});
			}
			const typeOut = TweenLite.to($growHorizType, .3, { color:'#512d1d',
				ease: Power1.easeInOut
			});
		}));
		$growHoriz.forEach(panelH6 => panelH6.addEventListener('mouseleave', function() {
			console.log('yellow pane open');
			if(window.innerWidth <= 678) {
				const flyFrom50 = TweenLite.to($growHoriz, .3, { width:'20%',
					ease: Power1.easeInOut
				});
			}
			const typeIn = TweenLite.to($growHorizType, .3, { color: '#fcfcf5',
				ease: Power1.easeInOut
			});
		}));
	}
	return {
		init: init
	}
})();

window.onload = function() {

  // console.log('loader.init()');
  loaderModule.init();

  // console.log('main.init()');
  mainContent.init();

  // console.log('cart.init()');
  shoppingCart.init();

  // if(window.innerWidth <= 768) {
  // 	togglePanels.init();
  // 	console.log('togglePanels.init()');
  // }
};
