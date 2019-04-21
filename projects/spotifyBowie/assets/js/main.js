console.log("main.js");

var HoverModule = (function() {

	function init() {
		

		$(".hoggle-img").hover(function() {
			$('.hoggle').toggleClass('lab-img-hover');
			$(this).toggleClass('border-hover');
			TweenMax.from(".hoggle", .5, {autoAlpha:0, yPercent:50, force3D:true, ease: Circ.easeOut});
			
		});

		$(".ludo-img").hover(function() {
			$('.ludo').toggleClass('lab-img-hover');
			$(this).toggleClass('border-hover');
			TweenMax.from(".ludo", .5, {autoAlpha:0, yPercent:50, force3D:true, ease: Circ.easeOut});
			
		});

		$(".worm-img").hover(function() {
			$('.worm').toggleClass('lab-img-hover');
			$(this).toggleClass('border-hover');
			TweenMax.from(".worm", .5, {autoAlpha:0, yPercent:50, force3D:true, ease: Circ.easeOut});
			
		});

		$(".didymus-img").hover(function() {
			$('.didymus').toggleClass('lab-img-hover');
			$(this).toggleClass('border-hover');
			TweenMax.from(".didymus", .5, {autoAlpha:0, yPercent:50, force3D:true, ease: Circ.easeOut});
			
		});

		$(".sarah-img").hover(function() {
			$('.sarah').toggleClass('lab-img-hover');
			$(this).toggleClass('border-hover');
			TweenMax.from(".sarah", .5, {autoAlpha:0, yPercent:50, force3D:true, ease: Circ.easeOut});
			
		});

	}

	return {
		init: init
	}
})();

$(document).ready(function(){

	// var parallaxScene = document.getElementById('scene');
 //  	var parallax = new Parallax(parallaxScene);

	HoverModule.init();

	var $navImgs = $('.bottom-nav').children();
	var $costumes = $('.costume');
	var $songs = $('.song');

	var nowPlaying = $('.now-playing').children();
	 

	function changeText(newtext) {
	  $(".start-scrolling").text(newtext)
	}

	MorphSVGPlugin.convertToPath("#start");

	MorphSVGPlugin.convertToPath("#bolt1");
	MorphSVGPlugin.convertToPath("#bolt2");
	MorphSVGPlugin.convertToPath("#bolt3");
	//findShapeIndex("#bolt2", "#bolt3");

	var controller = new ScrollMagic.Controller();

	var panel1Timeline = new TimelineMax()
		.from(".panel-content-one h2", 1, {autoAlpha: 0, x: 250, force3D:true, ease: Power0.easeNone})
		.from(".panel-content-one p.left", 1.5, {autoAlpha: 0, x: 250, force3D:true, ease: Power0.easeNone}, "-=1")
		.to(".nav-1-img", .25, {className:"+=nav-img-active"}, "-=.5")
		.to(".nav-1-img", .75, {scale:1.3, force3D:true, ease: Power0.easeNone}, "-=.5")
		.from(".panel-content-one h6", .75, {autoAlpha:0, yPercent:-100, force3D:true, ease: Power0.easeNone}, "-=.25")
		.from(".panel-content-one h1", .75, {autoAlpha:0, yPercent:-100, force3D:true, ease: Power0.easeNone}, "-=.25")
		.from(".panel-content-one p.right", .75, {autoAlpha:0, yPercent:-100, force3D:true, ease: Power0.easeNone}, "-=.25")
		.from(".album-1", 1, {autoAlpha:0, yPercent:-100, xPercent:-100, rotation: 360, scale:.25, force3D:true, ease: Power0.easeNone}, "-=.25")
		.from(".album-description", .75, {autoAlpha:0, ease: Power0.easeNone}, "-=.25")
		.from(".album-2", 1, {autoAlpha:0, yPercent:-100, xPercent:-100, rotation: 360, scale:.25, force3D:true, ease: Power0.easeNone}, "-=.25")
		.from(".album-3", 1, {autoAlpha:0, yPercent:-100, xPercent:-100, rotation: 360, scale:.25, force3D:true, ease: Power0.easeNone}, "-=.25");

	var panel2Timeline = new TimelineMax()
		.to(".nav-1-img", .25, {className:"-=nav-img-active"}, 'p2s')
		.to(".nav-2-img", .25, {className:"+=nav-img-active"}, 'p2s')
		.to(".nav-1-img", .75, {scale:1, force3D:true, ease: Power0.easeNone}, 'p2s')
		.to(".nav-2-img", .75, {scale:1.3, force3D:true, ease: Power0.easeNone}, 'p2s')
		.from(".ziggy", .5, {autoAlpha:0, scale:.25, xPercent:-100, force3D:true, ease: Power0.easeNone})
		.from(".panel-content-2 p.left", .75, {autoAlpha:0, ease: Power0.easeNone})
		.from("#lightning-big", 1, {yPercent:-100, force3D:true, ease: Power0.easeNone})
		.from("#bolt1", 1, {morphSVG:{shape:"#bolt2", shapeIndex:6}, fill:"2E2624", scale:.5, force3D:true, ease: Power0.easeNone})
		.from("#bolt1", 1, {morphSVG:{shape:"#bolt3", shapeIndex:6}, fill:"#FF1E01", ease: Power0.easeNone})
		.to('#bolt2', .75, {opacity: 1, ease: Power0.easeNone}, "p2")
		.to('#bolt3', .75, {opacity: 1, ease: Power0.easeNone}, "p2")
		.from(".panel-content-2 h2", .25, {autoAlpha:0, ease: Power0.easeNone}, "p2+=.25")
		.from(".panel-content-2 h5", .25, {autoAlpha:0, ease: Power0.easeNone}, "p2+=.25")
		.from(".panel-content-2 p.right", .25, {autoAlpha:0, ease: Power0.easeNone}, "p2+=.25")
		.from(".panel-content-2 h3", .5, {autoAlpha:0, yPercent:-100, force3D:true, ease: Power0.easeNone}, "p2+=.25")
		.from(".panel-content-2 h1", .5, {autoAlpha:0, yPercent:-100, force3D:true, ease: Power0.easeNone}, "p2+=.25")
		.staggerFrom($costumes, 1.5, { autoAlpha:0, xPercent: -100, force3D:true, ease: Elastic.easeOut.config(1, 1)}, 0.2, "p2+=.5");


	var panel3Timeline = new TimelineMax()
		.to(".nav-2-img", .25, {className:"-=nav-img-active"}, 'p3s')
		.to(".nav-3-img", .25, {className:"+=nav-img-active"}, 'p3s')
		.to(".nav-2-img", .75, {scale:1, force3D:true, ease: Power0.easeNone}, 'p3s')
		.to(".nav-3-img", .75, {scale:1.3, force3D:true, ease: Power0.easeNone}, 'p3s')
		.from(".panel-content-3 h1", 1, {autoAlpha:0, yPercent:-100, force3D:true, ease: Power0.easeNone}, 'p3s+=1')
		.from(".panel-content-3 p.left", 1, {autoAlpha:0, yPercent:-100, force3D:true, ease: Power0.easeNone}, 'p3s+=1.5')
		.staggerFrom($songs, 1, { autoAlpha:0, yPercent: -100, force3D:true, ease: Elastic.easeOut.config(1, 1)}, 0.2, "p3s+=2.5")
		.staggerFrom(nowPlaying, 1.5, { autoAlpha:0, scale:0, yPercent:-100, force3D:true, ease: Power0.easeNone}, 0.2, "p3s+=3.5");

	
	var panel4Timeline = new TimelineMax()
		.to(".nav-3-img", .25, {className:"-=nav-img-active"}, 'p4s')
		.to(".nav-4-img", .25, {className:"+=nav-img-active"}, 'p4s')
		.to(".nav-3-img", .75, {scale:1, force3D:true, ease: Power0.easeNone}, 'p4s')
		.to(".nav-4-img", .75, {scale:1.3, force3D:true, ease: Power0.easeNone}, 'p4s')
		.from(".labyrinth-img", 1, {autoAlpha:0, scale:0, force3D:true, ease: Power0.easeNone}, 'p4s+=1')
		.from(".labyrinth-text", 1, {autoAlpha:0, scale:0, force3D:true, ease: Power0.easeNone}, 'p4s+=1')

		.from(".hoggle-img", 3, {autoAlpha:0, yPercent:-100, xPercent:-100, rotation: 360, rotationY:360, scale:0, force3D:true, ease: Power0.easeNone}, 'p4s+=1')
		.from(".ludo-img", 3, {autoAlpha:0, yPercent:-100, xPercent:-100, rotation: 360, rotationY:360, scale:0, force3D:true, ease: Power0.easeNone}, 'p4s+=1.5')
		.from(".worm-img", 3, {autoAlpha:0, yPercent:-100, xPercent:-100, rotation: 360, rotationY:360, scale:0, force3D:true, ease: Power0.easeNone}, 'p4s+=2')
		.from(".didymus-img", 3, {autoAlpha:0, yPercent:-100, xPercent:-100, rotation: 360, rotationY:360, scale:0, force3D:true, ease: Power0.easeNone}, 'p4s+=2.5')
		.from(".sarah-img", 3, {autoAlpha:0, yPercent:-100, xPercent:-100, rotation: 360, rotationY:360, scale:0, force3D:true, ease: Power0.easeNone}, 'p4s+=3')
		.from(".panel-content-4 h1", 1, {autoAlpha:0, scale:0, force3D:true, ease: Power0.easeNone}, 'p4s+=5')
		.from(".panel-content-4 h2", 1, {autoAlpha:0, scale:0, force3D:true, ease: Power0.easeNone}, 'p4s+=5')
		.from(".panel-content-4 h6", 1, {autoAlpha:0, scale:0, force3D:true, ease: Power0.easeNone}, 'p4s+=5')
		.to(".nav-4-img", .25, {className:"-=nav-img-active"}, '+=1.75')
		.to(".nav-4-img", .75, {scale:1, force3D:true, ease: Power0.easeNone}, '+=1');

					

	var panel5Timeline = new TimelineMax()
		.from("footer .logo2", 1, {rotation: 360, ease: Power0.easeNone});

	var masterTimeline = new TimelineMax()
		
		// call scroll change innerHTML
		.call(changeText, ["keep scrolling"])
	 	
	 	// main logo tween
	 	.to("#start", 4, {morphSVG:{shape:"#end", shapeIndex:16}, ease: Elastic.easeOut.config(1, 0.3)}, "frame1")
	 	.to("#start", 4, {fill: '#fff', ease: Circ.easeOut}, "frame1")
	 	.to("#start", .5, {opacity: 0, ease: Circ.easeOut}, "frame1+=2.8")

	 	
		// first panels tweens
		.fromTo("#panel--one", 10, {x: 2000, force3D:true}, {x: -3000, force3D:true, ease: Power0.easeNone}, "frame1")
		.fromTo("#panel--one-second", 5, {x: -3000, autoAlpha:0, force3D:true}, {x: 3000, autoAlpha:1, force3D:true, ease: Power0.easeNone}, "frame1+=0.9")
		.fromTo("#panel--one-third", 10, {x: 2000, force3D:true}, {x: -3000, force3D:true, ease: Power0.easeNone}, "frame1")
		.staggerFrom($navImgs, 5, { autoAlpha:0, yPercent: -100, force3D:true, ease: Elastic.easeOut.config(2, 0.3)}, 0.2, "frame1")
		

		// add nested panelTimeline
		.add(panel1Timeline, "frame1+=2")

		// second panel tween
		.fromTo("#panel--two", 10, {x: window.innerWidth, force3D:true}, {x: -3000, force3D:true, ease: Power0.easeNone}, "frame2")
		.to("#start1", 8, {morphSVG:{shape:"#end1", shapeIndex:16}, ease: Circ.easeOut}, "frame2-=5.5")
		
		// add nested panelTimeline
		.add(panel2Timeline, "frame2")


		// third panel tween
		.fromTo("#panel--three", 10, {x:  window.innerWidth, force3D:true}, {x: -3000, force3D:true, ease: Power0.easeNone}, "frame3")
		
		// add nested panelTimeline
		.add(panel3Timeline, "frame3")

		
		.fromTo("#panel--four", 10, {x: window.innerWidth, force3D:true}, {x: -3000, force3D:true, ease: Power0.easeNone}, "frame4")

		// add nested panelTimeline'
		.add(panel4Timeline, "frame4")


		.fromTo("#panel--five", 5, {y: window.innerHeight, force3D:true}, {y: '100vh', force3D:true, ease: Power0.easeNone}, "-=2.5")

		// add nested panelTimeline
		.add(panel5Timeline)

		// call scroll change innerHTML
		.call(changeText, ["go back"]);


	// create scene to pin and link animation
	new ScrollMagic.Scene({
			triggerElement: "#main-wrap",
			triggerHook: "onLeave",
			duration: "1000%"
		})
		.setPin("#main-wrap")
		.setTween(masterTimeline)
		// .addIndicators()
		.addTo(controller);
});



