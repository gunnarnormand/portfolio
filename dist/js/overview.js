'use strict';

var OverviewModule = function () {

  var $overview = document.querySelector('#overview');
  var $overviewMain = document.querySelector('.overview-main');
  var $overview1 = document.querySelector('.overview-section-1');
  var $overview2 = document.querySelector('.overview-section-2');
  var $logo = document.querySelector('#logo');
  var $logoComputer = $logo.querySelector('path');
  var $logoCode = $logo.querySelectorAll('rect');

  var init = function init() {

    if ($overview.getAttribute('data-display') === 'hide') {
      $overview.setAttribute('data-display', 'show');
      $overview.classList.add('show');
      var overviewShowTl = new TimelineMax({ delay: 0 }).to($logoComputer, 1, { fill: '#fff', ease: Back.easeOut.config(1) }, 'overview').staggerTo($logoCode, 0.25, { fill: '#fff', ease: Back.easeOut.config(1) }, 0.025, 'overview').to($overview1, 0.25, { yPercent: -100, force3D: true, ease: Back.easeOut.config(1) }, 'overview').to($overview2, 0.25, { yPercent: -100, force3D: true, ease: Back.easeOut.config(1) }, 'overview+=0.25').to($overviewMain, 0.75, { autoAlpha: 1, ease: Back.easeOut.config(1) }, 'overview+=0.25').staggerFrom($overviewMain.children, 1, { autoAlpha: 0, yPercent: 25, force3D: true, ease: Circ.easeOut }, 0.08, 'overview+=0.25').to($overview, 0.75, { backgroundColor: '#272727', ease: Back.easeOut.config(1) }, 'overview+=0.25');
    } else {
      $overview.setAttribute('data-display', 'hide');
      $overview.classList.remove('show');
      var overviewHideTl = new TimelineMax({ delay: 0 });
      overviewHideTl.staggerTo($logoCode, 1, { fill: '#4d4d4d', ease: Back.easeOut.config(1) }, 0.08, 'overview');
      overviewHideTl.to($overview1, 0.25, { yPercent: 0, force3D: true, ease: Back.easeOut.config(1) }, 'overview');
      overviewHideTl.to($overview2, 0.25, { yPercent: 0, force3D: true, ease: Back.easeOut.config(1) }, 'overview');
      overviewHideTl.to($overviewMain, 0.25, { autoAlpha: 0, ease: Back.easeOut.config(1) }, 'overview');
      if (window.innerWidth >= 768) {
        overviewHideTl.to($logoComputer, 1, { fill: '#4d4d4d', ease: Back.easeOut.config(1) }, 'overview');
      }
    }
  };

  return {
    init: init
  };
}();