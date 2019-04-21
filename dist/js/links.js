'use strict';

var LinksModule = function () {

  var init = function init() {
    var $links = document.querySelectorAll('.link');
    function handleLinkEnter(e) {
      e.preventDefault();
      var $text = this.innerText;
      var currentLink = this;
      var linkEnterTl = new TimelineMax();
      if (currentLink.classList.contains('mouseenter')) {
        return;
      } else {
        currentLink.classList.add('mouseenter');
        linkEnterTl.from(currentLink, 0.3, {
          color: '#4bfffc',
          scrambleText: { text: $text, chars: '01', speed: 1, revealDelay: 0 },
          ease: Circ.easeOut
        });
      }
      setTimeout(function () {
        currentLink.classList.remove('mouseenter');
      }, 300);
    }
    function handleLinkLeave(e) {
      e.preventDefault();
      var currentLink = this;
      var linkLeaveTl = new TimelineMax();
      linkLeaveTl.fromTo(currentLink, 1, {
        color: '#ec007c'
      }, {
        color: '#3cfc81', ease: Circ.easeOut
      });
    }
    $links.forEach(function (link) {
      link.addEventListener('mouseenter', handleLinkEnter);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
  };
  return {
    init: init
  };
}();
window.addEventListener('load', function () {
  LinksModule.init();
});