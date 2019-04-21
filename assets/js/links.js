const LinksModule = (function() {

  const init = function() {
    const $links = document.querySelectorAll('.link');
    function handleLinkEnter(e) {
      e.preventDefault();
      let $text = this.innerText;
      let currentLink = this;
      const linkEnterTl = new TimelineMax();
      if (currentLink.classList.contains('mouseenter')) {
        return;
      } else {
        currentLink.classList.add('mouseenter');
        linkEnterTl
          .from(currentLink, 0.3, {
            color:'#4bfffc',
            scrambleText:{text:$text, chars:'01', speed:1, revealDelay:0},
            ease: Circ.easeOut
          });
      }
      setTimeout(() => {
        currentLink.classList.remove('mouseenter');
      }, 300);
    }
    function handleLinkLeave(e) {
      e.preventDefault();
      let currentLink = this;
      const linkLeaveTl = new TimelineMax();
      linkLeaveTl.fromTo(currentLink, 1, {
        color:'#ec007c'
      },{
        color:'#3cfc81', ease: Circ.easeOut
      });
    }
    $links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkEnter);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
  }
  return {
    init: init
  }
})();
window.addEventListener('load', function (){
  LinksModule.init();
});
