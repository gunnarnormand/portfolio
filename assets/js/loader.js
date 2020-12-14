const LoaderModule = (function() {

  const $loader = document.querySelector('#loader');
  const $loaderGif = document.querySelector('#loader-gif');
	const $loaderTextRows = document.querySelectorAll('.loader-text');

  const initLoader = function() {

    const loaderTl = new TimelineMax({
      delay: 0,
      smoothChildTiming: true
    })
			.to($loaderGif, 0.25, {autoAlpha:0, ease: Expo.easeOut}, 'loader')
			.staggerFromTo($loaderTextRows, 1, {alpha:0, yPercent:-100, force3D:true}, {
			  yPercent: 0,
			  alpha: 1,
				force3D:true,
			  scrambleText:{text:'[Gunnar.tech] $INIT $INIT...', chars:'0123456789', speed:1, revealDelay:0.5},
			  delay: 0
			}, .05, 'loader')
			.staggerTo($loaderTextRows, 1, { alpha: 0 }, .05, 'loader+=0.5')
      .to($loader, 1.5, {yPercent:100, zIndex:0, force3D:true, ease: Expo.easeOut}, 'loader+=1.25')
      .set($loader, {display:'none'});

  };

  return {
    initLoader: initLoader
  };
})();

window.addEventListener('load', function (){
  LoaderModule.initLoader();
});
