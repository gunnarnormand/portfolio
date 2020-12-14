const NavModule = (function() {

  const $overview = document.querySelector('#overview');
  const $logo = document.querySelector('#logo');
  const $logoCode = $logo.querySelectorAll('[data-name="rect"]');
	const $logoSvgText = $logo.querySelector('text');

  function initLogo() {

    CustomWiggle.create("wigglex", {wiggles:10, type:"random"});
    CustomWiggle.create("wiggley", {wiggles:10, type:"random"});

		const logoTextTl = new TimelineMax({repeat: -1});
		logoTextTl.fromTo($logoSvgText, 10, {rotation:0, force3D:true},{rotation:360, transformOrigin:'center', force3D:true, ease:Linear.easeNone});

    if ($overview.classList.contains('show')) {
      TweenMax.set(block, {x:0, y:0, fill:'#4f4f4f'});
    } else {
      $logoCode.forEach(block => {
        TweenMax.to(block, 1, {delay:Math.random() * 1.1, x: 1, fill:'#3cfc81', ease: 'wigglex', repeat: -1});
        TweenMax.to(block, 1, {delay:Math.random() * 1.1, y: -1, fill:'#fd971f', ease: 'wiggley', repeat: -1});
      });
    }

    $logo.addEventListener('click', function(e) {
      e.preventDefault();
      OverviewModule.init();
    });
    if (window.innerWidth >= 768) {
      $logo.addEventListener('mouseenter', function() {
				logoTextTl.pause();
        $logoCode.forEach(block => {
          if ($overview.classList.contains('show')) {
            TweenMax.set(block, {x:0, y:0, fill:'#fff'});
          } else {
            TweenMax.set(block, {x:0, y:0, fill:'#4f4f4f'});
          }
        });

      });
      $logo.addEventListener('mouseleave', function() {
				logoTextTl.play();
        $logoCode.forEach(block => {
          TweenMax.to(block, 1, {delay:Math.random() * 1.1, x: 1, fill:'#3cfc81', ease: 'wigglex', repeat: -1});
          TweenMax.to(block, 1, {delay:Math.random() * 1.1, y: -1, fill:'#fd971f', ease: 'wiggley', repeat: -1});
        });
      });
    }
  }

  return {
    initLogo: initLogo
  };
})();

window.addEventListener('load', function () {
	NavModule.initLogo();
});
