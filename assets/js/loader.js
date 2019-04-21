const LoaderModule = (function() {

  const $loader = document.querySelector('#loader');
  const $loaderGif = document.querySelector('#loader-gif');
  const $loader1 = document.querySelector('.loader-section-1');
  const $loader2 = document.querySelector('.loader-section-2');
  const $loader3 = document.querySelector('.loader-section-3');
  const $loader4 = document.querySelector('.loader-section-4');
  const $loaderRow1 = document.querySelector('.loader-row-1');
  const $loaderRow2 = document.querySelector('.loader-row-2');
  const $loaderRow3 = document.querySelector('.loader-row-3');
  const $loaderRow4 = document.querySelector('.loader-row-4');
  const $loaderRow5 = document.querySelector('.loader-row-5');
  const $loaderRow6 = document.querySelector('.loader-row-6');
  const $loaderRow7 = document.querySelector('.loader-row-7');
  const $loaderRow8 = document.querySelector('.loader-row-8');
  const $loaderRow9 = document.querySelector('.loader-row-9');
  const $loaderRow10 = document.querySelector('.loader-row-10');
  const $loaderRow11 = document.querySelector('.loader-row-11');
  const $loaderRow12 = document.querySelector('.loader-row-12');
  const $loaderRow13 = document.querySelector('.loader-row-13');
  const $loaderRow14 = document.querySelector('.loader-row-14');
  const $loaderRow15 = document.querySelector('.loader-row-15');
  const $loaderRow16 = document.querySelector('.loader-row-16');
  const $loaderRow17 = document.querySelector('.loader-row-17');

  const initLoader = function() {

    const loaderTl = new TimelineMax({
      delay: 0,
      smoothChildTiming: true
    }).to($loaderGif, 0.25, {autoAlpha:0, ease: Expo.easeOut})
    .fromTo($loaderRow1, 1, {alpha:0, yPercent:-100},{
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[Gunnar.tech] $INIT $INIT...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow2, 1, {alpha:0, yPercent:-100}, {
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[Gunnar.tech] $INIT $INIT...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow3, 1,  {alpha:0, yPercent:-100},{
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[Gunnar.tech] $INIT $INIT...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow4, 1,  {alpha:0, yPercent:-100},{
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[Gunnar.tech] $INIT $INIT...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow5, 1,  {alpha:0, yPercent:-100},{
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[07:25:30] Starting ...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow6, 1,  {alpha:0, yPercent:-100},{
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[07:25:30] Starting ...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow7, 1,  {alpha:0, yPercent:-100},{
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[Gunnar.tech] $INIT $INIT...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow8, 1,  {alpha:0, yPercent:-100},{
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[Gunnar.tech] $INIT $INIT...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow9, 1,  {alpha:0, yPercent:-100},{
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[Gunnar.tech] $INIT $INIT...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow10, 1, {alpha:0, yPercent:-100}, {
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[07:23:11] Finished after 54 ms', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow11, 1, {alpha:0, yPercent:-100}, {
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[07:23:11] Finished after 54 ms', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow12, 1, {alpha:0, yPercent:-100}, {
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[07:23:11] Finished after 54 ms', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow13, 1, {alpha:0, yPercent:-100}, {
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[07:23:11] Finished after 54 ms', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow14, 1, {alpha:0, yPercent:-100}, {
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[Gunnar.tech] $INIT $INIT...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow15, 1, {alpha:0, yPercent:-100}, {
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[Gunnar.tech] $INIT $INIT...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow16, 1, {alpha:0, yPercent:-100}, {
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[Gunnar.tech] $INIT $INIT...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader').fromTo($loaderRow17, 1, {alpha:0, yPercent:-100}, {
      yPercent: 0,
      alpha: 1,
      scrambleText:{text:'[07:25:30] Starting ...', chars:'0123456789', speed:1, revealDelay:0.5},
      delay: 0
    }, 'loader')
      .to($loader1, .25, {yPercent: -100,  force3D:true, ease: Back.easeOut.config(1)}, 'loader')
      .to($loader2, .25, {yPercent: -100, force3D:true, ease: Back.easeOut.config(1)}, 'loader+=.25')
      .to($loader3, .25, {yPercent: -100, force3D:true, ease: Back.easeOut.config(1)}, 'loader+=.5')
      .to($loader4, .25, {yPercent: -100, force3D:true, ease: Back.easeOut.config(1)}, 'loader+=.75')
      .to($loader, 1, {alpha:0, zIndex:0, backgroundColor: '#000', ease: Back.easeOut.config(1)}, 'loader+=1')
      .set($loader, {display:'none'});
  }

  return {
    initLoader: initLoader
  }
})();

window.addEventListener('load', function (){
  LoaderModule.initLoader();
});
