const ConsoleModule = (function() {

  const $wrap = document.querySelector('.wrap');
  const $innerWrap = document.querySelector('.inner-wrap');
  const $line1 = document.querySelector('#line1');
  const $line2 = document.querySelector('#line2');
  const $line3 = document.querySelector('#line3');
  const $line4 = document.querySelector('#line4');
  const $line5 = document.querySelector('#line5');
  const $line6 = document.querySelector('#line6');
	const $topLink = document.querySelector('#top-link');
	const $skipControl = document.querySelector('#skip-control');

  function resetHome() {
    TweenMax.killTweensOf($line1);
    TweenMax.killTweensOf($line2);
    TweenMax.killTweensOf($line3);
    TweenMax.killTweensOf($line4);
    TweenMax.killTweensOf($line5);
    TweenMax.killTweensOf($line6);
    TweenLite.set([$line1], {opacity:0});
    TweenLite.set([$line2], {opacity:0});
    TweenLite.set([$line3], {opacity:0});
    TweenLite.set([$line4], {opacity:0});
    TweenLite.set([$line5], {opacity:0});
    TweenLite.set([$line6], {opacity:0});
    TweenLite.set([$innerWrap], {display:'none'});
  }

	function clickCommandHome(e) {
		e.preventDefault();
		initConsole();
		TweenLite.to(window, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
		TweenLite.to($wrap, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
		TweenLite.to($topLink, 0.5, {
			scrambleText:{text:'gunnar@gunnar.tech ~/Documents/portfolio/home', chars:'01', speed:1, revealDelay:0}
		});
	}

	function mouseenterCommandHome() {
		TweenLite.to($topLink, 0.5, {
			scrambleText:{text:'gunnar@gunnar.tech ~/Documents/portfolio/home', chars:'01', speed:1, revealDelay:0}
		});
	}

  const initConsole = function() {

		resetHome();

		const masterHomeTl = new TimelineMax();
		let mySplitText3 = new SplitText($line3, {type:"words,chars"}),
		chars3 = mySplitText3.chars;
		let mySplitText4 = new SplitText($line4, {type:"words,chars"}),
		chars4 = mySplitText4.chars;
		let mySplitText5 = new SplitText($line5, {type:"words,chars"}),
		chars5 = mySplitText5.chars;
		let mySplitText6 = new SplitText($line6, {type:"words,chars"}),
		chars6 = mySplitText6.chars;

		masterHomeTl
			.set([$innerWrap], {display:'block'})
			.fromTo($line1, 0.5, {
				yPercent: -100,
				alpha: 0
			},{
				yPercent: 0,
				alpha: 1,
				scrambleText:{text:'gunnar normand portfolio', chars:'0123456789', speed:1, revealDelay:0.5},
				delay: 2
			})
			.fromTo($line2, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'INTERACTIVE DESIGNER &amp; DEVELOPER', chars:'upperCase', speed:1, revealDelay:0.5},
        delay: 0
      })
			.fromTo($line3, 1, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)})
      .staggerFrom(chars3, 0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1")
      .fromTo($line4, 1, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)})
      .staggerFrom(chars4, 0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1")
      .fromTo($line5, 1, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)})
      .staggerFrom(chars5,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1")
      .fromTo($line6, 1, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)})
      .staggerFrom(chars6, 0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1")
			.to($skipControl, 1, {opacity: 0, display:'none', ease: Expo.easeOut})
			;

		function skipHomeAnimations() {
			masterHomeTl.progress(0.95);
		}

		$skipControl.addEventListener('click', skipHomeAnimations);

  };

	$topLink.addEventListener('click', clickCommandHome);
	$topLink.addEventListener('mouseenter', mouseenterCommandHome);


  return {
    initConsole: initConsole
  };
})();


window.onload = function() {
  ConsoleModule.initConsole();
};
