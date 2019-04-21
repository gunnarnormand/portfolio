const Jumanji = (function() {

  const $wrap = document.querySelector('.wrap');
  const $innerWrap = document.querySelector('.inner-wrap');
  const $line1 = document.querySelector('#line1');
  const $line2 = document.querySelector('#line2');
  const $line3 = document.querySelector('#line3');
  const $line4 = document.querySelector('#line4');
  const $line5 = document.querySelector('#line5');
  const $line6 = document.querySelector('#line6');
  const $line7 = document.querySelector('#line7');
  const $homepageHome = document.querySelector('#homepage-home');
  const $homepageWork = document.querySelector('#homepage-work');
  const $homepageAbout = document.querySelector('#homepage-about');
  const $homepageContact = document.querySelector('#homepage-contact');
  const $workpageHome = document.querySelector('#workpage-home');
  const $workpageWork = document.querySelector('#workpage-work');
  const $workpageAbout = document.querySelector('#workpage-about');
  const $workpageContact = document.querySelector('#workpage-contact');
  const $aboutpageHome = document.querySelector('#aboutpage-home');
  const $aboutpageWork = document.querySelector('#aboutpage-work');
  const $aboutpageAbout = document.querySelector('#aboutpage-about');
  const $aboutpageContact = document.querySelector('#aboutpage-contact');
  const $contactpageHome = document.querySelector('#contactpage-home');
  const $contactpageWork = document.querySelector('#contactpage-work');
  const $contactpageAbout = document.querySelector('#contactpage-about');
  const $contactpageContact = document.querySelector('#contactpage-contact');
  const $homeLinks = document.querySelectorAll('.home');
  const $workLinks = document.querySelectorAll('.work');
  const $aboutLinks = document.querySelectorAll('.about');
  const $contactLinks = document.querySelectorAll('.contact');
  const $workWrap = document.querySelector('.work-wrap');
  const $workLine1 = document.querySelector('#workLine1');
  const $workLine2 = document.querySelector('#workLine2');
  const $workLine3 = document.querySelector('#workLine3');
  const $workLine4 = document.querySelector('#workLine4');
  const $workLine5 = document.querySelector('#workLine5');
  const $workLine6 = document.querySelector('#workLine6');
  const $workLine7 = document.querySelector('#workLine7');
  const $workLine8 = document.querySelector('#workLine8');
  const $workLine9 = document.querySelector('#workLine9');
  const $workLine10 = document.querySelector('#workLine10');
  const $workLine11 = document.querySelector('#workLine11');
  const $workLine12 = document.querySelector('#workLine12');
  const $workLine13 = document.querySelector('#workLine13');
  const $workLine14 = document.querySelector('#workLine14');
  const $workLine15 = document.querySelector('#workLine15');
  const $workLine16 = document.querySelector('#workLine16');
  const $workLine2ndLast = document.querySelector('#workLine2ndLast');
  const $workLineLast = document.querySelector('#workLineLast');
  const $workLineSecretKey = document.querySelector('#workLineSecretKey');
  const $aboutWrap = document.querySelector('.about-wrap');
  const $aboutLine1 = document.querySelector('#aboutLine1');
  const $aboutLine2 = document.querySelector('#aboutLine2');
  const $aboutLine3 = document.querySelector('#aboutLine3');
  const $aboutLine4 = document.querySelector('#aboutLine4');
  const $aboutLine5 = document.querySelector('#aboutLine5');
  const $aboutLine6 = document.querySelector('#aboutLine6');
  const $aboutLine7 = document.querySelector('#aboutLine7');
  const $aboutLine8 = document.querySelector('#aboutLine8');
  const $aboutLine9 = document.querySelector('#aboutLine9');
  const $aboutLine10 = document.querySelector('#aboutLine10');
  const $aboutLine11 = document.querySelector('#aboutLine11');
  const $aboutLine12 = document.querySelector('#aboutLine12');
  const $aboutLine13 = document.querySelector('#aboutLine13');
  const $aboutLine14 = document.querySelector('#aboutLine14');
  const $aboutLine15 = document.querySelector('#aboutLine15');
  const $aboutLine16 = document.querySelector('#aboutLine16');
  const $aboutLine2ndLast = document.querySelector('#aboutLine2ndLast');
  const $aboutLineLast = document.querySelector('#aboutLineLast');
  const $aboutLineSecretKey = document.querySelector('#aboutLineSecretKey');
  const $contactWrap = document.querySelector('.contact-wrap');
  const $contactLine1 = document.querySelector('#contactLine1');
  const $contactLine2 = document.querySelector('#contactLine2');
  const $contactLine3 = document.querySelector('#contactLine3');
  const $contactLine4 = document.querySelector('#contactLine4');
  const $contactLine5 = document.querySelector('#contactLine5');
  const $contactLine6 = document.querySelector('#contactLine6');
  const $contactLine7 = document.querySelector('#contactLine7');
  const $contactLine8 = document.querySelector('#contactLine8');
  const $contactLine9 = document.querySelector('#contactLine9');
  const $contactLine10 = document.querySelector('#contactLine10');
  const $contactLine2ndLast = document.querySelector('#contactLine2ndLast');
  const $contactLineLast = document.querySelector('#contactLineLast');
  const $contactLineSecretKey = document.querySelector('#contactLineSecretKey');
  const audio = document.querySelector('#opening');
  const audioSuccess = document.querySelector('#success');

  function resetHome() {
    TweenMax.killTweensOf($line1);
    TweenMax.killTweensOf($line2);
    TweenMax.killTweensOf($line3);
    TweenMax.killTweensOf($line4);
    TweenMax.killTweensOf($line5);
    TweenMax.killTweensOf($line6);
    TweenMax.killTweensOf($line7);
    TweenLite.set([$line1], {opacity:0});
    TweenLite.set([$line2], {opacity:0});
    TweenLite.set([$line3], {opacity:0});
    TweenLite.set([$line4], {opacity:0});
    TweenLite.set([$line5], {opacity:0});
    TweenLite.set([$line6], {opacity:0});
    TweenLite.set([$line7], {opacity:0});
    TweenLite.set([$innerWrap], {display:'none'});
  }

  function resetWork() {
    TweenMax.killTweensOf($workLine1);
    TweenMax.killTweensOf($workLine2);
    TweenMax.killTweensOf($workLine3);
    TweenMax.killTweensOf($workLine4);
    TweenMax.killTweensOf($workLine5);
    TweenMax.killTweensOf($workLine6);
    TweenMax.killTweensOf($workLine7);
    TweenMax.killTweensOf($workLine8);
    TweenMax.killTweensOf($workLine9);
    TweenMax.killTweensOf($workLine10);
    TweenMax.killTweensOf($workLine11);
    TweenMax.killTweensOf($workLine12);
    TweenMax.killTweensOf($workLine13);
    TweenMax.killTweensOf($workLine14);
    TweenMax.killTweensOf($workLine15);
    TweenMax.killTweensOf($workLine16);
    TweenLite.set([$workLine1], {opacity:0});
    TweenLite.set([$workLine2], {opacity:0});
    TweenLite.set([$workLine3], {opacity:0});
    TweenLite.set([$workLine4], {opacity:0});
    TweenLite.set([$workLine5], {opacity:0});
    TweenLite.set([$workLine6], {opacity:0});
    TweenLite.set([$workLine7], {opacity:0});
    TweenLite.set([$workLine8], {opacity:0});
    TweenLite.set([$workLine9], {opacity:0});
    TweenLite.set([$workLine10], {opacity:0});
    TweenLite.set([$workLine11], {opacity:0});
    TweenLite.set([$workLine12], {opacity:0});
    TweenLite.set([$workLine13], {opacity:0});
    TweenLite.set([$workLine14], {opacity:0});
    TweenLite.set([$workLine15], {opacity:0});
    TweenLite.set([$workLine16], {opacity:0});
    TweenLite.set([$workLine2ndLast], {opacity:0});
    TweenLite.set([$workLineLast], {opacity:0});
    TweenLite.set([$workLineSecretKey], {opacity:0, display:'none'});
    TweenLite.set([$workWrap], {display:'none'});
  }

  function resetAbout() {
    TweenMax.killTweensOf($aboutLine1);
    TweenMax.killTweensOf($aboutLine2);
    TweenMax.killTweensOf($aboutLine3);
    TweenMax.killTweensOf($aboutLine4);
    TweenMax.killTweensOf($aboutLine5);
    TweenMax.killTweensOf($aboutLine6);
    TweenMax.killTweensOf($aboutLine7);
    TweenMax.killTweensOf($aboutLine8);
    TweenMax.killTweensOf($aboutLine9);
    TweenMax.killTweensOf($aboutLine10);
    TweenMax.killTweensOf($aboutLine11);
    TweenMax.killTweensOf($aboutLine12);
    TweenMax.killTweensOf($aboutLine13);
    TweenMax.killTweensOf($aboutLine14);
    TweenMax.killTweensOf($aboutLine15);
    TweenMax.killTweensOf($aboutLine16);
    TweenLite.set([$aboutLine1], {opacity:0});
    TweenLite.set([$aboutLine2], {opacity:0});
    TweenLite.set([$aboutLine3], {opacity:0});
    TweenLite.set([$aboutLine4], {opacity:0});
    TweenLite.set([$aboutLine5], {opacity:0});
    TweenLite.set([$aboutLine6], {opacity:0});
    TweenLite.set([$aboutLine7], {opacity:0});
    TweenLite.set([$aboutLine8], {opacity:0});
    TweenLite.set([$aboutLine9], {opacity:0});
    TweenLite.set([$aboutLine10], {opacity:0});
    TweenLite.set([$aboutLine11], {opacity:0});
    TweenLite.set([$aboutLine12], {opacity:0});
    TweenLite.set([$aboutLine13], {opacity:0});
    TweenLite.set([$aboutLine14], {opacity:0});
    TweenLite.set([$aboutLine15], {opacity:0});
    TweenLite.set([$aboutLine16], {opacity:0});
    TweenLite.set([$aboutLine2ndLast], {opacity:0});
    TweenLite.set([$aboutLineLast], {opacity:0});
    TweenLite.set([$aboutLineSecretKey], {opacity:0, display:'none'});
    TweenLite.set([$aboutWrap], {display:'none'});
  }

  function resetContact() {
    TweenMax.killTweensOf($contactLine1);
    TweenMax.killTweensOf($contactLine2);
    TweenMax.killTweensOf($contactLine3);
    TweenMax.killTweensOf($contactLine4);
    TweenMax.killTweensOf($contactLine5);
    TweenMax.killTweensOf($contactLine6);
    TweenMax.killTweensOf($contactLine7);
    TweenMax.killTweensOf($contactLine8);
    TweenMax.killTweensOf($contactLine9);
    TweenMax.killTweensOf($contactLine10);
    TweenLite.set([$contactLine1], {opacity:0});
    TweenLite.set([$contactLine2], {opacity:0});
    TweenLite.set([$contactLine3], {opacity:0});
    TweenLite.set([$contactLine4], {opacity:0});
    TweenLite.set([$contactLine5], {opacity:0});
    TweenLite.set([$contactLine6], {opacity:0});
    TweenLite.set([$contactLine7], {opacity:0});
    TweenLite.set([$contactLine8], {opacity:0});
    TweenLite.set([$contactLine9], {opacity:0});
    TweenLite.set([$contactLine10], {opacity:0});
    TweenLite.set([$contactLine2ndLast], {opacity:0});
    TweenLite.set([$contactLineLast], {opacity:0});
    TweenLite.set([$contactLineSecretKey], {opacity:0, display:'none'});
    TweenLite.set([$contactWrap], {display:'none'});
  }

  const init = function() {

    handleKey();
    handleClick();
    resetHome();
    resetWork();
    resetAbout();
    resetContact();

    TweenLite.set([$innerWrap], {display:'block'});

    const addLine1 = function() {
      TweenLite.fromTo($line1, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'gunnar normand portfolio', chars:'0123456789', speed:1, revealDelay:0.5},
        delay: 1,
        onComplete: addLine2
      });
    }

    const addLine2 = function() {
      TweenLite.fromTo($line2, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'INTERACTIVE DESIGNER &amp; DEVELOPER', chars:'upperCase', speed:1, revealDelay:0.5},
        delay: 0,
        onComplete: addLine3
      });
    }

    const addLine3 = function() {

      const line3Tl =  new TimelineMax({onComplete: addLine4});
      let mySplitText = new SplitText($line3, {type:"words,chars"}),
      chars = mySplitText.chars;
      line3Tl.fromTo($line3, 1, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      line3Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addLine4 = function() {

      const line4Tl =  new TimelineMax({onComplete: addLine5});
      let mySplitText = new SplitText($line4, {type:"words,chars"}),
      chars = mySplitText.chars;
      line4Tl.fromTo($line4, 1, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      line4Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addLine5 = function() {

      const line5Tl =  new TimelineMax({onComplete: addLine6});
      let mySplitText = new SplitText($line5, {type:"words,chars"}),
      chars = mySplitText.chars;
      line5Tl.fromTo($line5, 1, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      line5Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addLine6 = function() {

      const line6Tl =  new TimelineMax({onComplete: addLine7});
      let mySplitText = new SplitText($line6, {type:"words,chars"}),
      chars = mySplitText.chars;
      line6Tl.fromTo($line6, 1, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      line6Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addLine7 = function() {

      TweenLite.fromTo($line7, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        delay: 0
      });

      TweenLite.to($homepageHome, 0.5, {
        scrambleText:{text:'home', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($homepageWork, 0.5, {
        scrambleText:{text:'work', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($homepageAbout, 0.5, {
        scrambleText:{text:'about', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($homepageContact, 0.5, {
        scrambleText:{text:'contact', chars:'01', speed:2, revealDelay:0}
      });
    }

    addLine1();
  }

  const handleClick = function() {

    clickCommandHome();
    clickCommandWork();
    clickCommandAbout();
    clickCommandContact();

    function clickCommandHome() {
      $homeLinks.forEach(link => link.addEventListener('click', runHome));
    }

    function clickCommandWork() {
      $workLinks.forEach(link => link.addEventListener('click', runWork));
    }

    function clickCommandAbout() {
      $aboutLinks.forEach(link => link.addEventListener('click', runAbout));
    }

    function clickCommandContact() {
      $contactLinks.forEach(link => link.addEventListener('click', runContact));
    }
  }

  const handleKey = function() {

    keyCommandHome();
    keyCommandWork();
    keyCommandAbout();
    keyCommandContact();
    keyCommandUnicorn();
    keyCommandGooey();
    keyCommandTunes();

    const $keys = document.querySelectorAll('.key');
    $keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);

    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add('key-pressed');
    }

    function playSuccess() {
      audioSuccess.currentTime = 0;
      audioSuccess.play();
    }

    function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      this.classList.remove('key-pressed');
    }

    function keyCommandHome() {

      let pressed = [];
      let keyCommand = 'home';

      window.addEventListener('keyup', (e) => {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if(pressed.join('').includes(keyCommand)) {
          runHome();
          playSuccess();
        }
      });
    }

    function keyCommandWork() {

      let pressed = [];
      let keyCommand = 'work';

      window.addEventListener('keyup', (e) => {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if(pressed.join('').includes(keyCommand)) {
          runWork();
          playSuccess();
        }
      });
    }

    function keyCommandAbout() {

      let pressed = [];
      let keyCommand = 'about';

      window.addEventListener('keyup', (e) => {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if(pressed.join('').includes(keyCommand)) {
          runAbout();
          playSuccess();
        }
      });
    }

    function keyCommandContact() {

      let pressed = [];
      let keyCommand = 'contact';

      window.addEventListener('keyup', (e) => {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if(pressed.join('').includes(keyCommand)) {
          runContact();
          playSuccess();
        }
      });
    }

    function keyCommandUnicorn() {

      let pressed = [];
      let keyCommand = 'unicorn';

      window.addEventListener('keyup', (e) => {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if(pressed.join('').includes(keyCommand)) {
          runUnicorn();
          playSuccess();
        }
      });
    }

    function keyCommandGooey() {

      let pressed = [];
      let keyCommand = 'gooey';

      window.addEventListener('keyup', (e) => {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if(pressed.join('').includes(keyCommand)) {
          runGooey();
          playSuccess();
        }
      });
    }

    function keyCommandTunes() {

      let pressed = [];
      let keyCommand = 'tunes';

      window.addEventListener('keyup', (e) => {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if(pressed.join('').includes(keyCommand)) {
          runTunes();
          playSuccess();
        }
      });
    }
  }

  function runHome() {
    TweenLite.to(window, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
    TweenLite.to($wrap, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
    init();
  }

  function runWork() {
    TweenLite.to(window, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
    TweenLite.to($wrap, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
    resetHome();
    resetAbout();
    resetContact();
    resetWork();
    TweenLite.set([$workWrap], {display:'block'});

    const addWorkLine1 = function() {

      TweenLite.fromTo($workLine1, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'work', chars:'0123456789', speed:1, revealDelay:0.5},
        delay: 1,
        onComplete: addWorkLine2
      });
    }

    const addWorkLine2 = function() {

      TweenLite.fromTo($workLine2, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'Other sites i&#39;ve worked on include:', chars:'upperCase', speed:1, revealDelay:0.5},
        delay: 0,
        onComplete: addWorkLine3
      });
    }

    const addWorkLine3 = function() {
      const workLine3Tl =  new TimelineMax({onComplete: addWorkLine4});
      let mySplitText = new SplitText($workLine3, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine3Tl.fromTo($workLine3, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine3Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine4 = function() {
      const workLine4Tl =  new TimelineMax({onComplete: addWorkLine5});
      let mySplitText = new SplitText($workLine4, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine4Tl.fromTo($workLine4, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine4Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine5 = function() {
      const workLine5Tl =  new TimelineMax({onComplete: addWorkLine6});
      let mySplitText = new SplitText($workLine5, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine5Tl.fromTo($workLine5, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine5Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine6 = function() {
      const workLine6Tl =  new TimelineMax({onComplete: addWorkLine7});
      let mySplitText = new SplitText($workLine6, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine6Tl.fromTo($workLine6, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine6Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine7 = function() {
      const workLine7Tl =  new TimelineMax({onComplete: addWorkLine8});
      let mySplitText = new SplitText($workLine7, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine7Tl.fromTo($workLine7, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine7Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine8 = function() {
      const workLine8Tl =  new TimelineMax({onComplete: addWorkLine9});
      let mySplitText = new SplitText($workLine8, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine8Tl.fromTo($workLine8, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine8Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine9 = function() {
      const workLine9Tl =  new TimelineMax({onComplete: addWorkLine10});
      let mySplitText = new SplitText($workLine9, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine9Tl.fromTo($workLine9, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine9Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine10 = function() {
      const workLine10Tl =  new TimelineMax({onComplete: addWorkLine11});
      let mySplitText = new SplitText($workLine10, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine10Tl.fromTo($workLine10, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine10Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine11 = function() {
      const workLine11Tl =  new TimelineMax({onComplete: addWorkLine12});
      let mySplitText = new SplitText($workLine11, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine11Tl.fromTo($workLine11, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine11Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine12 = function() {
      const workLine12Tl =  new TimelineMax({onComplete: addWorkLine13});
      let mySplitText = new SplitText($workLine12, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine12Tl.fromTo($workLine12, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine12Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine13 = function() {
      const workLine13Tl =  new TimelineMax({onComplete: addWorkLine14});
      let mySplitText = new SplitText($workLine13, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine13Tl.fromTo($workLine13, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine13Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine14 = function() {
      const workLine14Tl =  new TimelineMax({onComplete: addWorkLine15});
      let mySplitText = new SplitText($workLine14, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine14Tl.fromTo($workLine14, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine14Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine15 = function() {
      const workLine15Tl =  new TimelineMax({onComplete: addWorkLine16});
      let mySplitText = new SplitText($workLine15, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine15Tl.fromTo($workLine15, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine15Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine16 = function() {
      const workLine16Tl =  new TimelineMax({onComplete: addWorkLine2ndLast});
      let mySplitText = new SplitText($workLine16, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine16Tl.fromTo($workLine16, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine16Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLine2ndLast = function() {
      const workLine2ndLastTl =  new TimelineMax({onComplete: addWorkLineLast});
      let mySplitText = new SplitText($workLine2ndLast, {type:"words,chars"}),
      chars = mySplitText.chars;
      workLine2ndLastTl.fromTo($workLine2ndLast, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      workLine2ndLastTl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addWorkLineLast = function() {
      TweenLite.fromTo($workLineLast, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        delay: 0,
        onComplete: addWorkLineSecretKey
      });

      TweenLite.to($workpageHome, 0.5, {
        scrambleText:{text:'home', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($workpageWork, 0.5, {
        scrambleText:{text:'work', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($workpageAbout, 0.5, {
        scrambleText:{text:'about', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($workpageContact, 0.5, {
        scrambleText:{text:'contact', chars:'01', speed:2, revealDelay:0}
      });
    }

    const addWorkLineSecretKey = function() {
      TweenLite.fromTo($workLineSecretKey, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        display: 'block',
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'unicorn', chars:'01', speed:2, revealDelay:0},
        delay: 0

      });
    }

    addWorkLine1();
  }

  function runAbout() {
    TweenLite.to(window, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
    TweenLite.to($wrap, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
    resetHome();
    resetWork();
    resetContact();
    resetAbout();
    TweenLite.set([$aboutWrap], {display:'block'});

    const addAboutLine1 = function() {

      TweenLite.fromTo($aboutLine1, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'about', chars:'0123456789', speed:1, revealDelay:0.5},
        delay: 1,
        onComplete: addAboutLine2
      });
    }

    const addAboutLine2 = function() {

      TweenLite.fromTo($aboutLine2, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'Name', chars:'upperCase', speed:1, revealDelay:0.5},
        delay: 0,
        onComplete: addAboutLine3
      });
    }

    const addAboutLine3 = function() {

      const aboutLine3Tl =  new TimelineMax({onComplete: addAboutLine4});
      let mySplitText = new SplitText($aboutLine3, {type:"words,chars"}),
      chars = mySplitText.chars;
      aboutLine3Tl.fromTo($aboutLine3, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      aboutLine3Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addAboutLine4 = function() {
      const aboutLine4Tl =  new TimelineMax({onComplete: addAboutLine5});
      let mySplitText = new SplitText($aboutLine4, {type:"words,chars"}),
      chars = mySplitText.chars;
      aboutLine4Tl.fromTo($aboutLine4, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      aboutLine4Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addAboutLine5 = function() {

      TweenLite.fromTo($aboutLine5, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'Location', chars:'upperCase', speed:1, revealDelay:0.5},
        delay: 0,
        onComplete: addAboutLine6
      });
    }

    const addAboutLine6 = function() {
      const aboutLine6Tl =  new TimelineMax({onComplete: addAboutLine7});
      let mySplitText = new SplitText($aboutLine6, {type:"words,chars"}),
      chars = mySplitText.chars;
      aboutLine6Tl.fromTo($aboutLine6, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      aboutLine6Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addAboutLine7 = function() {
      const aboutLine7Tl =  new TimelineMax({onComplete: addAboutLine8});
      let mySplitText = new SplitText($aboutLine7, {type:"words,chars"}),
      chars = mySplitText.chars;
      aboutLine7Tl.fromTo($aboutLine7, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      aboutLine7Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addAboutLine8 = function() {

      TweenLite.fromTo($aboutLine8, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'about me', chars:'upperCase', speed:1, revealDelay:0.5},
        delay: 0,
        onComplete: addAboutLine9
      });
    }

    const addAboutLine9 = function() {

      const aboutLine9Tl =  new TimelineMax({onComplete: addAboutLine10});
      let mySplitText = new SplitText($aboutLine9, {type:"words,chars"}),
      chars = mySplitText.chars;
      aboutLine9Tl.fromTo($aboutLine9, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      aboutLine9Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addAboutLine10 = function() {
      const aboutLine10Tl =  new TimelineMax({onComplete: addAboutLine11});
      let mySplitText = new SplitText($aboutLine10, {type:"words,chars"}),
      chars = mySplitText.chars;
      aboutLine10Tl.fromTo($aboutLine10, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      aboutLine10Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.04, "+=0.1");
    }

    const addAboutLine11 = function() {

      TweenLite.fromTo($aboutLine11, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'creative development', chars:'upperCase', speed:1, revealDelay:0.5},
        delay: 0,
        onComplete: addAboutLine12
      });
    }

    const addAboutLine12 = function() {

      const aboutLine12Tl =  new TimelineMax({onComplete: addAboutLine13});
      let mySplitText = new SplitText($aboutLine12, {type:"words,chars"}),
      chars = mySplitText.chars;
      aboutLine12Tl.fromTo($aboutLine12, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      aboutLine12Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addAboutLine13 = function() {

      const aboutLine13Tl =  new TimelineMax({onComplete: addAboutLine14});
      let mySplitText = new SplitText($aboutLine13, {type:"words,chars"}),
      chars = mySplitText.chars;
      aboutLine13Tl.fromTo($aboutLine13, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      aboutLine13Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addAboutLine14 = function() {

      TweenLite.fromTo($aboutLine14, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'interactive design', chars:'upperCase', speed:1, revealDelay:0.5},
        delay: 0,
        onComplete: addAboutLine15
      });
    }

    const addAboutLine15 = function() {
      const aboutLine15Tl =  new TimelineMax({onComplete: addAboutLine16});
      let mySplitText = new SplitText($aboutLine15, {type:"words,chars"}),
      chars = mySplitText.chars;
      aboutLine15Tl.fromTo($aboutLine15, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      aboutLine15Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addAboutLine16 = function() {
      const aboutLine16Tl =  new TimelineMax({onComplete: addAboutLine2ndLast});
      let mySplitText = new SplitText($aboutLine16, {type:"words,chars"}),
      chars = mySplitText.chars;
      aboutLine16Tl.fromTo($aboutLine16, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      aboutLine16Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addAboutLine2ndLast = function() {
      const aboutLine2ndLastTl =  new TimelineMax({onComplete: addAboutLineLast});
      let mySplitText = new SplitText($aboutLine2ndLast, {type:"words,chars"}),
      chars = mySplitText.chars;
      aboutLine2ndLastTl.fromTo($aboutLine2ndLast, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      aboutLine2ndLastTl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addAboutLineLast = function() {
      TweenLite.fromTo($aboutLineLast, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        delay: 0,
        onComplete: addAboutLineSecretKey
      });

      TweenLite.to($aboutpageHome, 0.5, {
        scrambleText:{text:'home', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($aboutpageWork, 0.5, {
        scrambleText:{text:'work', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($aboutpageAbout, 0.5, {
        scrambleText:{text:'about', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($aboutpageContact, 0.5, {
        scrambleText:{text:'contact', chars:'01', speed:2, revealDelay:0}
      });
    }

    const addAboutLineSecretKey = function() {
      TweenLite.fromTo($aboutLineSecretKey, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        display: 'block',
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'gooey', chars:'01', speed:2, revealDelay:0},
        delay: 0

      });
    }

    addAboutLine1();
  }

  function runContact() {
    TweenLite.to(window, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
    TweenLite.to($wrap, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
    resetHome();
    resetWork();
    resetAbout();
    resetContact();
    TweenLite.set([$contactWrap], {display:'block'});

    const addContactLine1 = function() {

      TweenLite.fromTo($contactLine1, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'contact', chars:'0123456789', speed:1, revealDelay:0.5},
        delay: 1,
        onComplete: addContactLine2
      });
    }

    const addContactLine2 = function() {

      TweenLite.fromTo($contactLine2, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'email', chars:'upperCase', speed:1, revealDelay:0.5},
        delay: 0,
        onComplete: addContactLine3
      });
    }

    const addContactLine3 = function() {
      const contactLine3Tl =  new TimelineMax({onComplete: addContactLine4});
      let mySplitText = new SplitText($contactLine3, {type:"words,chars"}),
      chars = mySplitText.chars;
      contactLine3Tl.fromTo($contactLine3, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      contactLine3Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addContactLine4 = function() {
      const contactLine4Tl =  new TimelineMax({onComplete: addContactLine5});
      let mySplitText = new SplitText($contactLine4, {type:"words,chars"}),
      chars = mySplitText.chars;
      contactLine4Tl.fromTo($contactLine4, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      contactLine4Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addContactLine5 = function() {

      TweenLite.fromTo($contactLine5, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'send me a message', chars:'upperCase', speed:1, revealDelay:0.5},
        delay: 0,
        onComplete: addContactLine6
      });
    }

    const addContactLine6 = function() {
      const contactLine6Tl =  new TimelineMax({onComplete: addContactLine7});
      let mySplitText = new SplitText($contactLine6, {type:"words,chars"}),
      chars = mySplitText.chars;
      contactLine6Tl.fromTo($contactLine6, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      contactLine6Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addContactLine7 = function() {
      const contactLine7Tl =  new TimelineMax({onComplete: addContactLine8});
      let mySplitText = new SplitText($contactLine7, {type:"words,chars"}),
      chars = mySplitText.chars;
      contactLine7Tl.fromTo($contactLine7, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      contactLine7Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addContactLine8 = function() {

      TweenLite.fromTo($contactLine8, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'social links', chars:'upperCase', speed:1, revealDelay:0.5},
        delay: 0,
        onComplete: addContactLine9
      });
    }

    const addContactLine9 = function() {
      const contactLine9Tl =  new TimelineMax({onComplete: addContactLine10});
      let mySplitText = new SplitText($contactLine9, {type:"words,chars"}),
      chars = mySplitText.chars;
      contactLine9Tl.fromTo($contactLine9, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      contactLine9Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addContactLine10 = function() {
      const contactLine10Tl =  new TimelineMax({onComplete: addContactLine2ndLast});
      let mySplitText = new SplitText($contactLine10, {type:"words,chars"}),
      chars = mySplitText.chars;
      contactLine10Tl.fromTo($contactLine10, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      contactLine10Tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addContactLine2ndLast = function() {
      const contactLine2ndLastTl =  new TimelineMax({onComplete: addContactLineLast});
      let mySplitText = new SplitText($contactLine2ndLast, {type:"words,chars"}),
      chars = mySplitText.chars;
      contactLine2ndLastTl.fromTo($contactLine2ndLast, 0.5, {yPercent: -50},{opacity: 1, yPercent: 0, ease: Back.easeOut.config(2)});
      contactLine2ndLastTl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    }

    const addContactLineLast = function() {
      TweenLite.fromTo($contactLineLast, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        yPercent: 0,
        alpha: 1,
        delay: 0,
        onComplete: addContactLineSecretKey
      });

      TweenLite.to($contactpageHome, 0.5, {
        scrambleText:{text:'home', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($contactpageWork, 0.5, {
        scrambleText:{text:'work', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($contactpageAbout, 0.5, {
        scrambleText:{text:'about', chars:'01', speed:2, revealDelay:0}
      });
      TweenLite.to($contactpageContact, 0.5, {
        scrambleText:{text:'contact', chars:'01', speed:2, revealDelay:0}
      });
    }

    const addContactLineSecretKey = function() {
      TweenLite.fromTo($contactLineSecretKey, 0.5, {
        yPercent: -100,
        alpha: 0
      },{
        display: 'block',
        yPercent: 0,
        alpha: 1,
        scrambleText:{text:'tunes', chars:'01', speed:2, revealDelay:0},
        delay: 0

      });
    }

    addContactLine1();
  }

  function runUnicorn() {
    cornify_add();
  }

  function runGooey() {
    if ($wrap.classList.contains('gooey')) {
      $wrap.classList.remove('gooey');
    } else {
      $wrap.classList.add('gooey');
    }
  }

  function runTunes() {
    $wrap.classList.toggle('tunes');

    function playTunes() {
      return audio.play();
    }

    function pauseTunes() {
      return audio.pause();
    }

    if (audio.paused) {
      playTunes();
    } else {
      pauseTunes();
    }
  }

  return {
    init: init
  }
})();


window.onload = function() {
  console.log('🤠 howdy there!');
  Jumanji.init();
};
