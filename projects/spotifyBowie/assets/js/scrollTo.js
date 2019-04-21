console.log("scrollTo.js");

MorphSVGPlugin.convertToPath("#third");
MorphSVGPlugin.convertToPath("#start");

MorphSVGPlugin.convertToPath("#scroll-icon-top");
MorphSVGPlugin.convertToPath("#scroll-icon-middle");
MorphSVGPlugin.convertToPath("#scroll-icon-bottom");

// findShapeIndex("#start", "#end");
// findShapeIndex("#scroll-icon-top", "#scroll-icon-middle");

$(document).ready(function(){

	if (window.innerWidth < 415) {
		console.log('view on desktop browser plz');
		$('.loader-overlay h2').addClass('show');
	} else {
		setTimeout(function(){
	  		$('.loader-overlay').addClass('loaded');	
		}, 4000);
	}

	// setTimeout(function(){
 //  		$('.loader-overlay').addClass('loaded');	
	// }, 4000);

	var loadingTimeline = new TimelineMax();
	loadingTimeline
		.to("#first", .2, {morphSVG:"#second", shapeIndex:16, ease: Circ.easeOut},  "+=1")
	   	.to("#first", .2, {morphSVG:"#third", shapeIndex:-20, ease: Circ.easeOut}, "+=1")
	   	.to("#first", .2, {morphSVG:"#first", shapeIndex:-2, ease: Circ.easeOut}, "+=1");

	var scrollingIndicatorTimeline = new TimelineMax({repeat: -1});
	scrollingIndicatorTimeline
		.from("#scroll-icon-top", .25, {autoAlpha:0, yPercent:-100, force3D:true, ease: Circ.easeOut},  "+=1")

		.to("#scroll-icon-top", .5, {morphSVG:"#scroll-icon-bottom", ease: Circ.easeOut},  "+=1")

	   	.to("#scroll-icon-top", .5, {morphSVG:"#scroll-icon-top", ease: Circ.easeOut}, "+=1")

	   	.to("#scroll-icon-top", .25, {autoAlpha:0, yPercent:100, force3D:true, ease: Circ.easeOut},  "+=1");			   				   	


	$('.logo-2').on('click', function() {
		TweenMax.to("#start-2", 1, {morphSVG:{shape:"#end-2", shapeIndex:28}, ease: Elastic.easeOut.config(1, 0.3)});
		TweenMax.to("#start-2", 1, {fill: '#fff', ease: Circ.easeOut});
	});


	$(".nav-1-img").on('click', function() {
		TweenMax.to(window, 1, {scrollTo:{y: document.body.scrollHeight * 0.087}});
	});
	$(".nav-2-img").on('click', function() {
		TweenMax.to(window, 1, {scrollTo:{y: document.body.scrollHeight * 0.275}});
	});
	$(".nav-3-img").on('click', function() {
		TweenMax.to(window, 1, {scrollTo:{y: document.body.scrollHeight * 0.485}});
	});
	$(".nav-4-img").on('click', function() {
		TweenMax.to(window, 1, {scrollTo:{y: document.body.scrollHeight * 0.692}});
	});
	
	
	$('#backtop').on('click', function() {
		console.log('backtop btn clicked!');
		TweenMax.to(window, 1, {scrollTo:{y:"#top"}});
	});
	
});


