const NavModule = (function() {

  const $nav = document.querySelector('.top-bar');
  const topOfNav = $nav.offsetTop;
  const $topLink = document.querySelector('#top-link');
  const $overview = document.querySelector('#overview');
  const $logo = document.querySelector('#logo');
  const $logoGradient = $logo.querySelector('circle');
  const $logoComputer = $logo.querySelector('path');
  const $logoCode = $logo.querySelectorAll('rect');

  function init() {

    $topLink.addEventListener('click', function(e) {
      e.preventDefault();
      TweenLite.to(window, 0.5, {scrollTo:0, ease: Circ.easeIn});
    });

    function fixNav() {
      if (window.scrollY > topOfNav) {
        document.body.classList.add('fixed-nav');
        $nav.classList.add('z-depth-3');

      } else {
        document.body.classList.remove('fixed-nav');
        $nav.classList.remove('z-depth-3');
        TweenLite.to($topLink, 0.5, {
          scrambleText:{text:'1. gunnar@gunnar.tech ~/Documents/portfolio/home', chars:'01', speed:1, revealDelay:0}
        });
      }
    }
    window.addEventListener('scroll', fixNav);
  }

  function initWorkNav() {

    function fixNav() {
      if (window.scrollY > topOfNav) {
        document.body.classList.add('fixed-nav');
        $nav.classList.add('z-depth-3');
      } else {
        document.body.classList.remove('fixed-nav');
        $nav.classList.remove('z-depth-3');
        TweenLite.to($topLink, 0.5, {
          scrambleText:{text:'1. gunnar@gunnar.tech ~/Documents/portfolio/work', chars:'01', speed:1, revealDelay:0}
        });
      }
    }
    window.addEventListener('scroll', fixNav);
  }

  function initLogo() {

    CustomWiggle.create("wigglex", {wiggles:10, type:"random"});
    CustomWiggle.create("wiggley", {wiggles:10, type:"random"});
    CustomEase.create("slowMoBack", "M0,0,C0,0,0.023,0.173,0.045,0.276,0.05,0.301,0.058,0.319,0.07,0.34,0.077,0.355,0.085,0.37,0.1,0.375,0.352,0.46,0.357,0.943,0.646,1.035,0.662,1.04,0.675,1.046,0.686,1.057,0.699,1.071,0.707,1.087,0.716,1.106,0.726,1.13,0.731,1.148,0.736,1.174,0.752,1.269,1,1,1,1")

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
        TweenLite.to($logo, 0.25, {scale:1.2, ease: Circ.easeInOut});
        $logoCode.forEach(block => {
          if ($overview.classList.contains('show')) {
            TweenMax.set(block, {x:0, y:0, fill:'#fff'});
          } else {
            TweenMax.set(block, {x:0, y:0, fill:'#4f4f4f'});
          }
        });
        TweenMax.to($logoGradient, 5, {rotation:-360, transformOrigin:'center', force3D:true, ease:Power0.easeNone, repeat:-1});
        TweenMax.fromTo('#stop1', 4, {stopColor:'#efe158'},{stopColor:'#4bfffc', ease: Circ.easeOut,repeat:-1, yoyo:true});
        TweenMax.fromTo('#stop2', 4, {stopColor:'#ae81ff'},{stopColor:'#ec007c', ease: Circ.easeOut,repeat:-1, yoyo:true});

      });
      $logo.addEventListener('mouseleave', function() {
        TweenLite.to($logo, 0.25, {scale:1, ease: 'slowMoBack'});
        $logoCode.forEach(block => {
          TweenMax.to(block, 1, {delay:Math.random() * 1.1, x: 1, fill:'#3cfc81', ease: 'wigglex', repeat: -1});
          TweenMax.to(block, 1, {delay:Math.random() * 1.1, y: -1, fill:'#fd971f', ease: 'wiggley', repeat: -1});
          TweenMax.to('#stop1', 2, {stopColor:'#3cfc81', ease: 'slowMoBack'});
          TweenMax.to('#stop2', 2, {stopColor:'#fd971f', ease: 'slowMoBack'});
          TweenMax.to($logoGradient, 2, {rotation:0, ease:Power0.easeNone});
        });
      });
    }
  }

  return {
    init: init,
    initWorkNav: initWorkNav,
    initLogo: initLogo,
  }
})();

window.addEventListener('load', function (){

  if (document.body.classList.contains('home-page')) {
    NavModule.init();
    NavModule.initLogo();
  } else {
    NavModule.initWorkNav();
  }

});
