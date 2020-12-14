const OverviewModule = (function() {

  const $overview = document.querySelector('#overview');
  const $overviewMain = document.querySelector('.overview-main');
  const $overviewWipe = document.querySelector('.overview-wipe');
  const $logo = document.querySelector('#logo');
  const $logoComputer = $logo.querySelector('.logo-path');
	const $logoCode = [].slice.call($logo.querySelectorAll('[data-name="rect"]')).reverse();
	const $textPath = $logo.querySelector('textPath');
	const $sideScroller1 = document.querySelector('.sidescroller-1');
	const $sideScroller2 = document.querySelector('.sidescroller-2');
	const $sideScroller3 = document.querySelector('.sidescroller-3');
	const $footer = document.querySelector('footer');

  const init = function() {

    if ($overview.getAttribute('data-display') === 'hide') {
      $overview.setAttribute('data-display', 'show');
			$footer.classList.add('overview-active');
			bodyScrollLock.disableBodyScroll($overview);
      const overviewShowTl = new TimelineMax({delay: 0, onComplete:WorkMenu.init})
				.staggerTo($logoCode, 0.15, {fill:'#f8f8f2', ease: Expo.easeOut}, 0.015, 'overview')
				.to($overviewWipe, 2, {yPercent: -100, force3D:true, ease: Expo.easeOut}, 'overview')
        .to($logoComputer, 1, {fill:'#f8f8f2', ease: Expo.easeOut}, 'overview')
				.to($textPath, 1, {fill:'#f8f8f2', ease: Expo.easeOut}, 'overview')
				.to($sideScroller1, 1, {color:'#f8f8f2', ease: Expo.easeOut}, 'overview')
				.to($sideScroller2, 1, {color:'#f8f8f2', ease: Expo.easeOut}, 'overview')
				.to($sideScroller3, 1, {color:'#f8f8f2', ease: Expo.easeOut}, 'overview')
				.set($overview, {autoAlpha:1, display:'block'}, 'overview')
        ;
    } else {
      $overview.setAttribute('data-display', 'hide');
			$footer.classList.remove('overview-active');
			bodyScrollLock.enableBodyScroll($overview);
      const overviewHideTl = new TimelineMax({delay: 0});
        overviewHideTl.staggerTo($logoCode, 0.15, {fill:'#4d4d4d', ease: Expo.easeOut}, 0.015, 'overview');
        overviewHideTl.to($overviewWipe, 2, {yPercent:0, force3D:true, ease: Expo.easeOut}, 'overview');
        if (window.innerWidth >= 768) {
          overviewHideTl.to($logoComputer, 1, {fill:'#4d4d4d', ease: Expo.easeOut}, 'overview');
					overviewHideTl.to($textPath, 1, {fill:'#4d4d4d', ease: Expo.easeOut}, 'overview');
					overviewHideTl.to($sideScroller1, 1, {color:'#4d4d4d', ease: Expo.easeOut}, 'overview');
					overviewHideTl.to($sideScroller2, 1, {color:'#4d4d4d', ease: Expo.easeOut}, 'overview');
					overviewHideTl.to($sideScroller3, 1, {color:'#4d4d4d', ease: Expo.easeOut}, 'overview');
        }
				overviewHideTl.to($overview, 1, {autoAlpha: 0, display:'none', ease: Expo.easeOut}, 'overview+=1.25');
    }
  };

  return {
    init: init
  };
})();
