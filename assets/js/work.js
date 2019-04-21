const FadeInTargetModule = (function() {
  function init() {
    var $fadeInTarget = document.querySelectorAll(".fade-in-target");
    for (var i = 0; i < $fadeInTarget.length; i++) {
      new Waypoint({
        element: $fadeInTarget[i],
        handler: function(direction) {
          if (direction == "down") {
            TweenMax.set(this.element, {perspective:400});
            TweenMax.to(this.element, 1, {opacity: 1, ease: Circ.easeInOut})
            TweenMax.from(this.element, 1, {yPercent: 15, rotationZ:30, rotationY:-180,  scale: 0.9, force3D:true, ease: Back.easeOut.config(1.7)})
          } else if (direction == "up") {
            TweenMax.to(this.element, 0.5, {opacity: 0, ease: Circ.easeInOut})
          }
        },
        offset: "80%"
      })
    }
  }
  return {
    init: init
  }
})();


const WorkModule = (function() {

  function init() {

    const $tilters = document.querySelectorAll('.tilter');
    const $closeBtn = document.querySelector('#close-btn');
    const $workOverlay = document.querySelector('#workOverlay');
    const $workInfoHeading = document.querySelector('.work-info-heading');
    const $workInfoDescription = document.querySelector('.work-info-description');
    const $workInfoTeam = document.querySelector('.work-info-team');
    const $workInfoLink = document.querySelector('.work-info-link');
    const $workInfoText = document.querySelector('.work-info-text').children;

    function insertWorkInfo(tilter) {
      if (tilter === 'tilter--1') {
        $workInfoHeading.innerHTML = `Spotify Bowie Project`;
        $workInfoDescription.innerHTML = `Interactive experience sponsored by Spotify to honor recently deceased musicians. The experience allows current fans of the artist to relive their favorite parts of that artist's career and allow new fans to discover their music for the first time. The timeline scrolls sideways through the different areas of the artist's career and a video of a live performance plays in the background. At the end of the experience, users have the option to add a curated playlist with the artist's best-known music to their own Spotify accounts.`;
        $workInfoTeam.innerHTML = `Stephanie Sapp | <a href="https://stephaniesapp.myportfolio.com/projects" target="_blank" class="var">designer</a>`;
        $workInfoLink.setAttribute('href', './projects/spotifyBowie/index.html');
      } if (tilter === 'tilter--2') {
        $workInfoHeading.innerHTML = `Savannah Bee Company`;
        $workInfoDescription.innerHTML = `With bee extinction becoming highly probable, we’ve created a microsite extension for Savannah Bee Company to promote natural habitats for pollinators.<h3>awards</h3><p>The Center Ring - Silver</p>`;
        $workInfoTeam.innerHTML = `Melissa Belflower | <a href="https://www.melissabelflower.com/" target="_blank" class="var">designer</a>`;
        $workInfoLink.setAttribute('href', './projects/savBeeCo/index.html');
      } if (tilter === 'tilter--3') {
        $workInfoHeading.innerHTML = `Normand PLLC`;
        $workInfoDescription.innerHTML = `Full suite branding, design, copy, and development for Normand Law PLLC.`;
        $workInfoTeam.innerHTML = `Mills Adams | <a href="https://millsadams.com/" target="_blank" class="var">logo design</a>`;
        $workInfoLink.setAttribute('href', './projects/normandpllc/index.html');
      } if (tilter === 'tilter--4') {
        $workInfoHeading.innerHTML = `Travelfol.io Web App`;
        $workInfoDescription.innerHTML = `Keep track of the places you've traveled in your very own travel-portfolio. Review the best or worst restaurants, bars, hotels, and attractions you visited in each location.`;
        $workInfoTeam.innerHTML = `Gunnar Normand | <a href="https://gunnar.tech/" target="_blank" class="var">designer/developer</a>`;
        $workInfoLink.setAttribute('href', './projects/travelfolio/index.html');
      } if (tilter === 'tilter--5') {
        $workInfoHeading.innerHTML = `ToDo Web App`;
        $workInfoDescription.innerHTML = `Simple To-do web app: complete, delete, hide, and track the things you need to do. Built in HTML5 CSS3 & JavaScript.`;
        $workInfoTeam.innerHTML = `Gunnar Normand | <a href="https://gunnar.tech/" target="_blank" class="var">designer/developer</a>`;
        $workInfoLink.setAttribute('href', './projects/toDoApp/index.html');
      } if (tilter === 'tilter--6') {
        $workInfoHeading.innerHTML = `elysseromeo.com`;
        $workInfoDescription.innerHTML = `Custom portfolio built in Wordpress.`;
        $workInfoTeam.innerHTML = `Gunnar Normand | <a href="https://gunnar.tech/" target="_blank" class="var">designer/developer</a>`;
        $workInfoLink.setAttribute('href', 'https://elysseromeo.com/');
      }
    }

    function openWorkItem(e) {
      e.preventDefault();
      let cl = this.classList;
      let cn = cl.length;
      if (cn === 3) {
        insertWorkInfo(cl[2]);
      } else {
        return;
      }
      let workEnterTl = new TimelineMax();
      workEnterTl
        .to('.row-1', 0.5, {opacity: 0.25, ease: Circ.easeOut}, 'fade')
        .to('.row-2', 0.5, {opacity: 0.25, ease: Circ.easeOut}, 'fade')
        .to($workOverlay, 0.5, {y:'0%', zIndex:3, display:'block', ease: Circ.easeInOut}, 'fade+=0.5')
        .staggerFromTo('.x-line', 0.25, {drawSVG:0},{drawSVG:"100%", ease: Circ.easeOut}, 0.08, 'enter')
        .staggerFrom($workInfoText, 0.5, {yPercent:100, autoAlpha:0, force3D:true, ease: Circ.easeOut}, .08, 'enter');
    }
    function closeWorkItem(e) {
      e.preventDefault();
      let workLeaveTl = new TimelineMax();
      workLeaveTl
        .staggerTo('.x-line', 0.25, {drawSVG:0, ease: Circ.easeOut}, 0.08)
        .to($workOverlay, 0.5, {y:'100%', zIndex:0, display:'none', ease: Circ.easeInOut}, 'fade')
        .to('.row-2', 0.5, {opacity: 1, ease: Circ.easeOut}, 'fade')
        .to('.row-1', 0.5, {opacity: 1, ease: Circ.easeOut}, 'fade');
    }
    $tilters.forEach(tilter => tilter.addEventListener('click', openWorkItem));
    $closeBtn.addEventListener('click', closeWorkItem);
    $closeBtn.addEventListener('mouseenter', (e) => {
      e.preventDefault();
      let xhoverETl = new TimelineMax();
        xhoverETl
          .staggerFrom('.x-line', 1, {stroke:'#ec007c', ease:new SlowMo(0.2, 0.2)}, 0.08, 'enter')
          .staggerTo('.x-line-1', 0.25, {drawSVG:0, ease: Circ.easeOut}, 0.08, 'enter');
    });
    $closeBtn.addEventListener('mouseleave', (e) => {
      e.preventDefault();
      let xhoverLTl = new TimelineMax();
        xhoverLTl
          .staggerFromTo('.x-line', 1, {stroke:'#4bfffc'},{stroke:'#3cfc81', ease:new SlowMo(0.2, 0.2)}, 0.08, 'leave')
          .staggerTo('.x-line-1', 0.25, {drawSVG:"100%", ease: Circ.easeOut}, 0.08, 'leave');
    });
  }

  return {
    init: init
  }
})();

window.addEventListener('load', function (){
  FadeInTargetModule.init();
  WorkModule.init();
});
