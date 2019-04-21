'use strict';

var Jumanji = function () {

  var $wrap = document.querySelector('.wrap');
  var $innerWrap = document.querySelector('.inner-wrap');
  var $line1 = document.querySelector('#line1');
  var $line2 = document.querySelector('#line2');
  var $line3 = document.querySelector('#line3');
  var $line4 = document.querySelector('#line4');
  var $line5 = document.querySelector('#line5');
  var $line6 = document.querySelector('#line6');
  var $line7 = document.querySelector('#line7');
  var $homepageHome = document.querySelector('#homepage-home');
  var $homepageWork = document.querySelector('#homepage-work');
  var $homepageAbout = document.querySelector('#homepage-about');
  var $homepageContact = document.querySelector('#homepage-contact');
  var $workpageHome = document.querySelector('#workpage-home');
  var $workpageWork = document.querySelector('#workpage-work');
  var $workpageAbout = document.querySelector('#workpage-about');
  var $workpageContact = document.querySelector('#workpage-contact');
  var $aboutpageHome = document.querySelector('#aboutpage-home');
  var $aboutpageWork = document.querySelector('#aboutpage-work');
  var $aboutpageAbout = document.querySelector('#aboutpage-about');
  var $aboutpageContact = document.querySelector('#aboutpage-contact');
  var $contactpageHome = document.querySelector('#contactpage-home');
  var $contactpageWork = document.querySelector('#contactpage-work');
  var $contactpageAbout = document.querySelector('#contactpage-about');
  var $contactpageContact = document.querySelector('#contactpage-contact');
  var $homeLinks = document.querySelectorAll('.home');
  var $workLinks = document.querySelectorAll('.work');
  var $aboutLinks = document.querySelectorAll('.about');
  var $contactLinks = document.querySelectorAll('.contact');
  var $workWrap = document.querySelector('.work-wrap');
  var $workLine1 = document.querySelector('#workLine1');
  var $workLine2 = document.querySelector('#workLine2');
  var $workLine3 = document.querySelector('#workLine3');
  var $workLine4 = document.querySelector('#workLine4');
  var $workLine5 = document.querySelector('#workLine5');
  var $workLine6 = document.querySelector('#workLine6');
  var $workLine7 = document.querySelector('#workLine7');
  var $workLine8 = document.querySelector('#workLine8');
  var $workLine9 = document.querySelector('#workLine9');
  var $workLine10 = document.querySelector('#workLine10');
  var $workLine11 = document.querySelector('#workLine11');
  var $workLine12 = document.querySelector('#workLine12');
  var $workLine13 = document.querySelector('#workLine13');
  var $workLine14 = document.querySelector('#workLine14');
  var $workLine15 = document.querySelector('#workLine15');
  var $workLine16 = document.querySelector('#workLine16');
  var $workLine2ndLast = document.querySelector('#workLine2ndLast');
  var $workLineLast = document.querySelector('#workLineLast');
  var $workLineSecretKey = document.querySelector('#workLineSecretKey');
  var $aboutWrap = document.querySelector('.about-wrap');
  var $aboutLine1 = document.querySelector('#aboutLine1');
  var $aboutLine2 = document.querySelector('#aboutLine2');
  var $aboutLine3 = document.querySelector('#aboutLine3');
  var $aboutLine4 = document.querySelector('#aboutLine4');
  var $aboutLine5 = document.querySelector('#aboutLine5');
  var $aboutLine6 = document.querySelector('#aboutLine6');
  var $aboutLine7 = document.querySelector('#aboutLine7');
  var $aboutLine8 = document.querySelector('#aboutLine8');
  var $aboutLine9 = document.querySelector('#aboutLine9');
  var $aboutLine10 = document.querySelector('#aboutLine10');
  var $aboutLine11 = document.querySelector('#aboutLine11');
  var $aboutLine12 = document.querySelector('#aboutLine12');
  var $aboutLine13 = document.querySelector('#aboutLine13');
  var $aboutLine14 = document.querySelector('#aboutLine14');
  var $aboutLine15 = document.querySelector('#aboutLine15');
  var $aboutLine16 = document.querySelector('#aboutLine16');
  var $aboutLine2ndLast = document.querySelector('#aboutLine2ndLast');
  var $aboutLineLast = document.querySelector('#aboutLineLast');
  var $aboutLineSecretKey = document.querySelector('#aboutLineSecretKey');
  var $contactWrap = document.querySelector('.contact-wrap');
  var $contactLine1 = document.querySelector('#contactLine1');
  var $contactLine2 = document.querySelector('#contactLine2');
  var $contactLine3 = document.querySelector('#contactLine3');
  var $contactLine4 = document.querySelector('#contactLine4');
  var $contactLine5 = document.querySelector('#contactLine5');
  var $contactLine6 = document.querySelector('#contactLine6');
  var $contactLine7 = document.querySelector('#contactLine7');
  var $contactLine8 = document.querySelector('#contactLine8');
  var $contactLine9 = document.querySelector('#contactLine9');
  var $contactLine10 = document.querySelector('#contactLine10');
  var $contactLine2ndLast = document.querySelector('#contactLine2ndLast');
  var $contactLineLast = document.querySelector('#contactLineLast');
  var $contactLineSecretKey = document.querySelector('#contactLineSecretKey');
  var audio = document.querySelector('#opening');
  var audioSuccess = document.querySelector('#success');

  function resetHome() {
    TweenMax.killTweensOf($line1);
    TweenMax.killTweensOf($line2);
    TweenMax.killTweensOf($line3);
    TweenMax.killTweensOf($line4);
    TweenMax.killTweensOf($line5);
    TweenMax.killTweensOf($line6);
    TweenMax.killTweensOf($line7);
    TweenLite.set([$line1], { opacity: 0 });
    TweenLite.set([$line2], { opacity: 0 });
    TweenLite.set([$line3], { opacity: 0 });
    TweenLite.set([$line4], { opacity: 0 });
    TweenLite.set([$line5], { opacity: 0 });
    TweenLite.set([$line6], { opacity: 0 });
    TweenLite.set([$line7], { opacity: 0 });
    TweenLite.set([$innerWrap], { display: 'none' });
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
    TweenLite.set([$workLine1], { opacity: 0 });
    TweenLite.set([$workLine2], { opacity: 0 });
    TweenLite.set([$workLine3], { opacity: 0 });
    TweenLite.set([$workLine4], { opacity: 0 });
    TweenLite.set([$workLine5], { opacity: 0 });
    TweenLite.set([$workLine6], { opacity: 0 });
    TweenLite.set([$workLine7], { opacity: 0 });
    TweenLite.set([$workLine8], { opacity: 0 });
    TweenLite.set([$workLine9], { opacity: 0 });
    TweenLite.set([$workLine10], { opacity: 0 });
    TweenLite.set([$workLine11], { opacity: 0 });
    TweenLite.set([$workLine12], { opacity: 0 });
    TweenLite.set([$workLine13], { opacity: 0 });
    TweenLite.set([$workLine14], { opacity: 0 });
    TweenLite.set([$workLine15], { opacity: 0 });
    TweenLite.set([$workLine16], { opacity: 0 });
    TweenLite.set([$workLine2ndLast], { opacity: 0 });
    TweenLite.set([$workLineLast], { opacity: 0 });
    TweenLite.set([$workLineSecretKey], { opacity: 0, display: 'none' });
    TweenLite.set([$workWrap], { display: 'none' });
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
    TweenLite.set([$aboutLine1], { opacity: 0 });
    TweenLite.set([$aboutLine2], { opacity: 0 });
    TweenLite.set([$aboutLine3], { opacity: 0 });
    TweenLite.set([$aboutLine4], { opacity: 0 });
    TweenLite.set([$aboutLine5], { opacity: 0 });
    TweenLite.set([$aboutLine6], { opacity: 0 });
    TweenLite.set([$aboutLine7], { opacity: 0 });
    TweenLite.set([$aboutLine8], { opacity: 0 });
    TweenLite.set([$aboutLine9], { opacity: 0 });
    TweenLite.set([$aboutLine10], { opacity: 0 });
    TweenLite.set([$aboutLine11], { opacity: 0 });
    TweenLite.set([$aboutLine12], { opacity: 0 });
    TweenLite.set([$aboutLine13], { opacity: 0 });
    TweenLite.set([$aboutLine14], { opacity: 0 });
    TweenLite.set([$aboutLine15], { opacity: 0 });
    TweenLite.set([$aboutLine16], { opacity: 0 });
    TweenLite.set([$aboutLine2ndLast], { opacity: 0 });
    TweenLite.set([$aboutLineLast], { opacity: 0 });
    TweenLite.set([$aboutLineSecretKey], { opacity: 0, display: 'none' });
    TweenLite.set([$aboutWrap], { display: 'none' });
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
    TweenLite.set([$contactLine1], { opacity: 0 });
    TweenLite.set([$contactLine2], { opacity: 0 });
    TweenLite.set([$contactLine3], { opacity: 0 });
    TweenLite.set([$contactLine4], { opacity: 0 });
    TweenLite.set([$contactLine5], { opacity: 0 });
    TweenLite.set([$contactLine6], { opacity: 0 });
    TweenLite.set([$contactLine7], { opacity: 0 });
    TweenLite.set([$contactLine8], { opacity: 0 });
    TweenLite.set([$contactLine9], { opacity: 0 });
    TweenLite.set([$contactLine10], { opacity: 0 });
    TweenLite.set([$contactLine2ndLast], { opacity: 0 });
    TweenLite.set([$contactLineLast], { opacity: 0 });
    TweenLite.set([$contactLineSecretKey], { opacity: 0, display: 'none' });
    TweenLite.set([$contactWrap], { display: 'none' });
  }

  var init = function init() {

    handleKey();
    handleClick();
    resetHome();
    resetWork();
    resetAbout();
    resetContact();

    TweenLite.set([$innerWrap], { display: 'block' });

    var addLine1 = function addLine1() {
      TweenLite.fromTo($line1, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'gunnar normand portfolio', chars: '0123456789', speed: 1, revealDelay: 0.5 },
        delay: 1,
        onComplete: addLine2
      });
    };

    var addLine2 = function addLine2() {
      TweenLite.fromTo($line2, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'INTERACTIVE DESIGNER &amp; DEVELOPER', chars: 'upperCase', speed: 1, revealDelay: 0.5 },
        delay: 0,
        onComplete: addLine3
      });
    };

    var addLine3 = function addLine3() {

      var line3Tl = new TimelineMax({ onComplete: addLine4 });
      var mySplitText = new SplitText($line3, { type: "words,chars" }),
          chars = mySplitText.chars;
      line3Tl.fromTo($line3, 1, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      line3Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addLine4 = function addLine4() {

      var line4Tl = new TimelineMax({ onComplete: addLine5 });
      var mySplitText = new SplitText($line4, { type: "words,chars" }),
          chars = mySplitText.chars;
      line4Tl.fromTo($line4, 1, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      line4Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addLine5 = function addLine5() {

      var line5Tl = new TimelineMax({ onComplete: addLine6 });
      var mySplitText = new SplitText($line5, { type: "words,chars" }),
          chars = mySplitText.chars;
      line5Tl.fromTo($line5, 1, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      line5Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addLine6 = function addLine6() {

      var line6Tl = new TimelineMax({ onComplete: addLine7 });
      var mySplitText = new SplitText($line6, { type: "words,chars" }),
          chars = mySplitText.chars;
      line6Tl.fromTo($line6, 1, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      line6Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addLine7 = function addLine7() {

      TweenLite.fromTo($line7, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        delay: 0
      });

      TweenLite.to($homepageHome, 0.5, {
        scrambleText: { text: 'home', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($homepageWork, 0.5, {
        scrambleText: { text: 'work', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($homepageAbout, 0.5, {
        scrambleText: { text: 'about', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($homepageContact, 0.5, {
        scrambleText: { text: 'contact', chars: '01', speed: 2, revealDelay: 0 }
      });
    };

    addLine1();
  };

  var handleClick = function handleClick() {

    clickCommandHome();
    clickCommandWork();
    clickCommandAbout();
    clickCommandContact();

    function clickCommandHome() {
      $homeLinks.forEach(function (link) {
        return link.addEventListener('click', runHome);
      });
    }

    function clickCommandWork() {
      $workLinks.forEach(function (link) {
        return link.addEventListener('click', runWork);
      });
    }

    function clickCommandAbout() {
      $aboutLinks.forEach(function (link) {
        return link.addEventListener('click', runAbout);
      });
    }

    function clickCommandContact() {
      $contactLinks.forEach(function (link) {
        return link.addEventListener('click', runContact);
      });
    }
  };

  var handleKey = function handleKey() {

    keyCommandHome();
    keyCommandWork();
    keyCommandAbout();
    keyCommandContact();
    keyCommandUnicorn();
    keyCommandGooey();
    keyCommandTunes();

    var $keys = document.querySelectorAll('.key');
    $keys.forEach(function (key) {
      return key.addEventListener('transitionend', removeTransition);
    });
    window.addEventListener('keydown', playSound);

    function playSound(e) {
      var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
      var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
      if (!audio) return;
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

      var pressed = [];
      var keyCommand = 'home';

      window.addEventListener('keyup', function (e) {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if (pressed.join('').includes(keyCommand)) {
          runHome();
          playSuccess();
        }
      });
    }

    function keyCommandWork() {

      var pressed = [];
      var keyCommand = 'work';

      window.addEventListener('keyup', function (e) {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if (pressed.join('').includes(keyCommand)) {
          runWork();
          playSuccess();
        }
      });
    }

    function keyCommandAbout() {

      var pressed = [];
      var keyCommand = 'about';

      window.addEventListener('keyup', function (e) {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if (pressed.join('').includes(keyCommand)) {
          runAbout();
          playSuccess();
        }
      });
    }

    function keyCommandContact() {

      var pressed = [];
      var keyCommand = 'contact';

      window.addEventListener('keyup', function (e) {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if (pressed.join('').includes(keyCommand)) {
          runContact();
          playSuccess();
        }
      });
    }

    function keyCommandUnicorn() {

      var pressed = [];
      var keyCommand = 'unicorn';

      window.addEventListener('keyup', function (e) {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if (pressed.join('').includes(keyCommand)) {
          runUnicorn();
          playSuccess();
        }
      });
    }

    function keyCommandGooey() {

      var pressed = [];
      var keyCommand = 'gooey';

      window.addEventListener('keyup', function (e) {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if (pressed.join('').includes(keyCommand)) {
          runGooey();
          playSuccess();
        }
      });
    }

    function keyCommandTunes() {

      var pressed = [];
      var keyCommand = 'tunes';

      window.addEventListener('keyup', function (e) {

        pressed.push(e.key);
        pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
        if (pressed.join('').includes(keyCommand)) {
          runTunes();
          playSuccess();
        }
      });
    }
  };

  function runHome() {
    TweenLite.to(window, 1, { scrollTo: { y: 0, x: 0 }, ease: Expo.easeOut });
    TweenLite.to($wrap, 1, { scrollTo: { y: 0, x: 0 }, ease: Expo.easeOut });
    init();
  }

  function runWork() {
    TweenLite.to(window, 1, { scrollTo: { y: 0, x: 0 }, ease: Expo.easeOut });
    TweenLite.to($wrap, 1, { scrollTo: { y: 0, x: 0 }, ease: Expo.easeOut });
    resetHome();
    resetAbout();
    resetContact();
    resetWork();
    TweenLite.set([$workWrap], { display: 'block' });

    var addWorkLine1 = function addWorkLine1() {

      TweenLite.fromTo($workLine1, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'work', chars: '0123456789', speed: 1, revealDelay: 0.5 },
        delay: 1,
        onComplete: addWorkLine2
      });
    };

    var addWorkLine2 = function addWorkLine2() {

      TweenLite.fromTo($workLine2, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'Other sites i&#39;ve worked on include:', chars: 'upperCase', speed: 1, revealDelay: 0.5 },
        delay: 0,
        onComplete: addWorkLine3
      });
    };

    var addWorkLine3 = function addWorkLine3() {
      var workLine3Tl = new TimelineMax({ onComplete: addWorkLine4 });
      var mySplitText = new SplitText($workLine3, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine3Tl.fromTo($workLine3, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine3Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine4 = function addWorkLine4() {
      var workLine4Tl = new TimelineMax({ onComplete: addWorkLine5 });
      var mySplitText = new SplitText($workLine4, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine4Tl.fromTo($workLine4, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine4Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine5 = function addWorkLine5() {
      var workLine5Tl = new TimelineMax({ onComplete: addWorkLine6 });
      var mySplitText = new SplitText($workLine5, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine5Tl.fromTo($workLine5, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine5Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine6 = function addWorkLine6() {
      var workLine6Tl = new TimelineMax({ onComplete: addWorkLine7 });
      var mySplitText = new SplitText($workLine6, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine6Tl.fromTo($workLine6, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine6Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine7 = function addWorkLine7() {
      var workLine7Tl = new TimelineMax({ onComplete: addWorkLine8 });
      var mySplitText = new SplitText($workLine7, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine7Tl.fromTo($workLine7, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine7Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine8 = function addWorkLine8() {
      var workLine8Tl = new TimelineMax({ onComplete: addWorkLine9 });
      var mySplitText = new SplitText($workLine8, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine8Tl.fromTo($workLine8, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine8Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine9 = function addWorkLine9() {
      var workLine9Tl = new TimelineMax({ onComplete: addWorkLine10 });
      var mySplitText = new SplitText($workLine9, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine9Tl.fromTo($workLine9, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine9Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine10 = function addWorkLine10() {
      var workLine10Tl = new TimelineMax({ onComplete: addWorkLine11 });
      var mySplitText = new SplitText($workLine10, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine10Tl.fromTo($workLine10, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine10Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine11 = function addWorkLine11() {
      var workLine11Tl = new TimelineMax({ onComplete: addWorkLine12 });
      var mySplitText = new SplitText($workLine11, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine11Tl.fromTo($workLine11, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine11Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine12 = function addWorkLine12() {
      var workLine12Tl = new TimelineMax({ onComplete: addWorkLine13 });
      var mySplitText = new SplitText($workLine12, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine12Tl.fromTo($workLine12, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine12Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine13 = function addWorkLine13() {
      var workLine13Tl = new TimelineMax({ onComplete: addWorkLine14 });
      var mySplitText = new SplitText($workLine13, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine13Tl.fromTo($workLine13, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine13Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine14 = function addWorkLine14() {
      var workLine14Tl = new TimelineMax({ onComplete: addWorkLine15 });
      var mySplitText = new SplitText($workLine14, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine14Tl.fromTo($workLine14, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine14Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine15 = function addWorkLine15() {
      var workLine15Tl = new TimelineMax({ onComplete: addWorkLine16 });
      var mySplitText = new SplitText($workLine15, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine15Tl.fromTo($workLine15, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine15Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine16 = function addWorkLine16() {
      var workLine16Tl = new TimelineMax({ onComplete: addWorkLine2ndLast });
      var mySplitText = new SplitText($workLine16, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine16Tl.fromTo($workLine16, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine16Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLine2ndLast = function addWorkLine2ndLast() {
      var workLine2ndLastTl = new TimelineMax({ onComplete: addWorkLineLast });
      var mySplitText = new SplitText($workLine2ndLast, { type: "words,chars" }),
          chars = mySplitText.chars;
      workLine2ndLastTl.fromTo($workLine2ndLast, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      workLine2ndLastTl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addWorkLineLast = function addWorkLineLast() {
      TweenLite.fromTo($workLineLast, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        delay: 0,
        onComplete: addWorkLineSecretKey
      });

      TweenLite.to($workpageHome, 0.5, {
        scrambleText: { text: 'home', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($workpageWork, 0.5, {
        scrambleText: { text: 'work', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($workpageAbout, 0.5, {
        scrambleText: { text: 'about', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($workpageContact, 0.5, {
        scrambleText: { text: 'contact', chars: '01', speed: 2, revealDelay: 0 }
      });
    };

    var addWorkLineSecretKey = function addWorkLineSecretKey() {
      TweenLite.fromTo($workLineSecretKey, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        display: 'block',
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'unicorn', chars: '01', speed: 2, revealDelay: 0 },
        delay: 0

      });
    };

    addWorkLine1();
  }

  function runAbout() {
    TweenLite.to(window, 1, { scrollTo: { y: 0, x: 0 }, ease: Expo.easeOut });
    TweenLite.to($wrap, 1, { scrollTo: { y: 0, x: 0 }, ease: Expo.easeOut });
    resetHome();
    resetWork();
    resetContact();
    resetAbout();
    TweenLite.set([$aboutWrap], { display: 'block' });

    var addAboutLine1 = function addAboutLine1() {

      TweenLite.fromTo($aboutLine1, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'about', chars: '0123456789', speed: 1, revealDelay: 0.5 },
        delay: 1,
        onComplete: addAboutLine2
      });
    };

    var addAboutLine2 = function addAboutLine2() {

      TweenLite.fromTo($aboutLine2, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'Name', chars: 'upperCase', speed: 1, revealDelay: 0.5 },
        delay: 0,
        onComplete: addAboutLine3
      });
    };

    var addAboutLine3 = function addAboutLine3() {

      var aboutLine3Tl = new TimelineMax({ onComplete: addAboutLine4 });
      var mySplitText = new SplitText($aboutLine3, { type: "words,chars" }),
          chars = mySplitText.chars;
      aboutLine3Tl.fromTo($aboutLine3, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      aboutLine3Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addAboutLine4 = function addAboutLine4() {
      var aboutLine4Tl = new TimelineMax({ onComplete: addAboutLine5 });
      var mySplitText = new SplitText($aboutLine4, { type: "words,chars" }),
          chars = mySplitText.chars;
      aboutLine4Tl.fromTo($aboutLine4, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      aboutLine4Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addAboutLine5 = function addAboutLine5() {

      TweenLite.fromTo($aboutLine5, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'Location', chars: 'upperCase', speed: 1, revealDelay: 0.5 },
        delay: 0,
        onComplete: addAboutLine6
      });
    };

    var addAboutLine6 = function addAboutLine6() {
      var aboutLine6Tl = new TimelineMax({ onComplete: addAboutLine7 });
      var mySplitText = new SplitText($aboutLine6, { type: "words,chars" }),
          chars = mySplitText.chars;
      aboutLine6Tl.fromTo($aboutLine6, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      aboutLine6Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addAboutLine7 = function addAboutLine7() {
      var aboutLine7Tl = new TimelineMax({ onComplete: addAboutLine8 });
      var mySplitText = new SplitText($aboutLine7, { type: "words,chars" }),
          chars = mySplitText.chars;
      aboutLine7Tl.fromTo($aboutLine7, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      aboutLine7Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addAboutLine8 = function addAboutLine8() {

      TweenLite.fromTo($aboutLine8, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'about me', chars: 'upperCase', speed: 1, revealDelay: 0.5 },
        delay: 0,
        onComplete: addAboutLine9
      });
    };

    var addAboutLine9 = function addAboutLine9() {

      var aboutLine9Tl = new TimelineMax({ onComplete: addAboutLine10 });
      var mySplitText = new SplitText($aboutLine9, { type: "words,chars" }),
          chars = mySplitText.chars;
      aboutLine9Tl.fromTo($aboutLine9, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      aboutLine9Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addAboutLine10 = function addAboutLine10() {
      var aboutLine10Tl = new TimelineMax({ onComplete: addAboutLine11 });
      var mySplitText = new SplitText($aboutLine10, { type: "words,chars" }),
          chars = mySplitText.chars;
      aboutLine10Tl.fromTo($aboutLine10, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      aboutLine10Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.04, "+=0.1");
    };

    var addAboutLine11 = function addAboutLine11() {

      TweenLite.fromTo($aboutLine11, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'creative development', chars: 'upperCase', speed: 1, revealDelay: 0.5 },
        delay: 0,
        onComplete: addAboutLine12
      });
    };

    var addAboutLine12 = function addAboutLine12() {

      var aboutLine12Tl = new TimelineMax({ onComplete: addAboutLine13 });
      var mySplitText = new SplitText($aboutLine12, { type: "words,chars" }),
          chars = mySplitText.chars;
      aboutLine12Tl.fromTo($aboutLine12, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      aboutLine12Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addAboutLine13 = function addAboutLine13() {

      var aboutLine13Tl = new TimelineMax({ onComplete: addAboutLine14 });
      var mySplitText = new SplitText($aboutLine13, { type: "words,chars" }),
          chars = mySplitText.chars;
      aboutLine13Tl.fromTo($aboutLine13, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      aboutLine13Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addAboutLine14 = function addAboutLine14() {

      TweenLite.fromTo($aboutLine14, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'interactive design', chars: 'upperCase', speed: 1, revealDelay: 0.5 },
        delay: 0,
        onComplete: addAboutLine15
      });
    };

    var addAboutLine15 = function addAboutLine15() {
      var aboutLine15Tl = new TimelineMax({ onComplete: addAboutLine16 });
      var mySplitText = new SplitText($aboutLine15, { type: "words,chars" }),
          chars = mySplitText.chars;
      aboutLine15Tl.fromTo($aboutLine15, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      aboutLine15Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addAboutLine16 = function addAboutLine16() {
      var aboutLine16Tl = new TimelineMax({ onComplete: addAboutLine2ndLast });
      var mySplitText = new SplitText($aboutLine16, { type: "words,chars" }),
          chars = mySplitText.chars;
      aboutLine16Tl.fromTo($aboutLine16, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      aboutLine16Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addAboutLine2ndLast = function addAboutLine2ndLast() {
      var aboutLine2ndLastTl = new TimelineMax({ onComplete: addAboutLineLast });
      var mySplitText = new SplitText($aboutLine2ndLast, { type: "words,chars" }),
          chars = mySplitText.chars;
      aboutLine2ndLastTl.fromTo($aboutLine2ndLast, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      aboutLine2ndLastTl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addAboutLineLast = function addAboutLineLast() {
      TweenLite.fromTo($aboutLineLast, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        delay: 0,
        onComplete: addAboutLineSecretKey
      });

      TweenLite.to($aboutpageHome, 0.5, {
        scrambleText: { text: 'home', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($aboutpageWork, 0.5, {
        scrambleText: { text: 'work', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($aboutpageAbout, 0.5, {
        scrambleText: { text: 'about', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($aboutpageContact, 0.5, {
        scrambleText: { text: 'contact', chars: '01', speed: 2, revealDelay: 0 }
      });
    };

    var addAboutLineSecretKey = function addAboutLineSecretKey() {
      TweenLite.fromTo($aboutLineSecretKey, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        display: 'block',
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'gooey', chars: '01', speed: 2, revealDelay: 0 },
        delay: 0

      });
    };

    addAboutLine1();
  }

  function runContact() {
    TweenLite.to(window, 1, { scrollTo: { y: 0, x: 0 }, ease: Expo.easeOut });
    TweenLite.to($wrap, 1, { scrollTo: { y: 0, x: 0 }, ease: Expo.easeOut });
    resetHome();
    resetWork();
    resetAbout();
    resetContact();
    TweenLite.set([$contactWrap], { display: 'block' });

    var addContactLine1 = function addContactLine1() {

      TweenLite.fromTo($contactLine1, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'contact', chars: '0123456789', speed: 1, revealDelay: 0.5 },
        delay: 1,
        onComplete: addContactLine2
      });
    };

    var addContactLine2 = function addContactLine2() {

      TweenLite.fromTo($contactLine2, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'email', chars: 'upperCase', speed: 1, revealDelay: 0.5 },
        delay: 0,
        onComplete: addContactLine3
      });
    };

    var addContactLine3 = function addContactLine3() {
      var contactLine3Tl = new TimelineMax({ onComplete: addContactLine4 });
      var mySplitText = new SplitText($contactLine3, { type: "words,chars" }),
          chars = mySplitText.chars;
      contactLine3Tl.fromTo($contactLine3, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      contactLine3Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addContactLine4 = function addContactLine4() {
      var contactLine4Tl = new TimelineMax({ onComplete: addContactLine5 });
      var mySplitText = new SplitText($contactLine4, { type: "words,chars" }),
          chars = mySplitText.chars;
      contactLine4Tl.fromTo($contactLine4, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      contactLine4Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addContactLine5 = function addContactLine5() {

      TweenLite.fromTo($contactLine5, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'send me a message', chars: 'upperCase', speed: 1, revealDelay: 0.5 },
        delay: 0,
        onComplete: addContactLine6
      });
    };

    var addContactLine6 = function addContactLine6() {
      var contactLine6Tl = new TimelineMax({ onComplete: addContactLine7 });
      var mySplitText = new SplitText($contactLine6, { type: "words,chars" }),
          chars = mySplitText.chars;
      contactLine6Tl.fromTo($contactLine6, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      contactLine6Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addContactLine7 = function addContactLine7() {
      var contactLine7Tl = new TimelineMax({ onComplete: addContactLine8 });
      var mySplitText = new SplitText($contactLine7, { type: "words,chars" }),
          chars = mySplitText.chars;
      contactLine7Tl.fromTo($contactLine7, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      contactLine7Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addContactLine8 = function addContactLine8() {

      TweenLite.fromTo($contactLine8, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'social links', chars: 'upperCase', speed: 1, revealDelay: 0.5 },
        delay: 0,
        onComplete: addContactLine9
      });
    };

    var addContactLine9 = function addContactLine9() {
      var contactLine9Tl = new TimelineMax({ onComplete: addContactLine10 });
      var mySplitText = new SplitText($contactLine9, { type: "words,chars" }),
          chars = mySplitText.chars;
      contactLine9Tl.fromTo($contactLine9, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      contactLine9Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addContactLine10 = function addContactLine10() {
      var contactLine10Tl = new TimelineMax({ onComplete: addContactLine2ndLast });
      var mySplitText = new SplitText($contactLine10, { type: "words,chars" }),
          chars = mySplitText.chars;
      contactLine10Tl.fromTo($contactLine10, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      contactLine10Tl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addContactLine2ndLast = function addContactLine2ndLast() {
      var contactLine2ndLastTl = new TimelineMax({ onComplete: addContactLineLast });
      var mySplitText = new SplitText($contactLine2ndLast, { type: "words,chars" }),
          chars = mySplitText.chars;
      contactLine2ndLastTl.fromTo($contactLine2ndLast, 0.5, { yPercent: -50 }, { opacity: 1, yPercent: 0, ease: Back.easeOut.config(2) });
      contactLine2ndLastTl.staggerFrom(chars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=0.1");
    };

    var addContactLineLast = function addContactLineLast() {
      TweenLite.fromTo($contactLineLast, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        yPercent: 0,
        alpha: 1,
        delay: 0,
        onComplete: addContactLineSecretKey
      });

      TweenLite.to($contactpageHome, 0.5, {
        scrambleText: { text: 'home', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($contactpageWork, 0.5, {
        scrambleText: { text: 'work', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($contactpageAbout, 0.5, {
        scrambleText: { text: 'about', chars: '01', speed: 2, revealDelay: 0 }
      });
      TweenLite.to($contactpageContact, 0.5, {
        scrambleText: { text: 'contact', chars: '01', speed: 2, revealDelay: 0 }
      });
    };

    var addContactLineSecretKey = function addContactLineSecretKey() {
      TweenLite.fromTo($contactLineSecretKey, 0.5, {
        yPercent: -100,
        alpha: 0
      }, {
        display: 'block',
        yPercent: 0,
        alpha: 1,
        scrambleText: { text: 'tunes', chars: '01', speed: 2, revealDelay: 0 },
        delay: 0

      });
    };

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
  };
}();

window.onload = function () {
  console.log('🤠 howdy there!');
  Jumanji.init();
};