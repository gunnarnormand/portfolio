"use strict";

var ConsoleModule = function () {
  var $wrap = document.querySelector('.wrap');
  var $innerWrap = document.querySelector('.inner-wrap');
  var $line1 = document.querySelector('#line1');
  var $line2 = document.querySelector('#line2');
  var $line3 = document.querySelector('#line3');
  var $line4 = document.querySelector('#line4');
  var $line5 = document.querySelector('#line5');
  var $line6 = document.querySelector('#line6');
  var $topLink = document.querySelector('#top-link');
  var $skipControl = document.querySelector('#skip-control');

  function resetHome() {
    TweenMax.killTweensOf($line1);
    TweenMax.killTweensOf($line2);
    TweenMax.killTweensOf($line3);
    TweenMax.killTweensOf($line4);
    TweenMax.killTweensOf($line5);
    TweenMax.killTweensOf($line6);
    TweenLite.set([$line1], {
      opacity: 0
    });
    TweenLite.set([$line2], {
      opacity: 0
    });
    TweenLite.set([$line3], {
      opacity: 0
    });
    TweenLite.set([$line4], {
      opacity: 0
    });
    TweenLite.set([$line5], {
      opacity: 0
    });
    TweenLite.set([$line6], {
      opacity: 0
    });
    TweenLite.set([$innerWrap], {
      display: 'none'
    });
  }

  function clickCommandHome(e) {
    e.preventDefault();
    initConsole();
    TweenLite.to(window, 1, {
      scrollTo: {
        y: 0,
        x: 0
      },
      ease: Expo.easeOut
    });
    TweenLite.to($wrap, 1, {
      scrollTo: {
        y: 0,
        x: 0
      },
      ease: Expo.easeOut
    });
    TweenLite.to($topLink, 0.5, {
      scrambleText: {
        text: 'gunnar@gunnar.tech ~/Documents/portfolio/home',
        chars: '01',
        speed: 1,
        revealDelay: 0
      }
    });
  }

  function mouseenterCommandHome() {
    TweenLite.to($topLink, 0.5, {
      scrambleText: {
        text: 'gunnar@gunnar.tech ~/Documents/portfolio/home',
        chars: '01',
        speed: 1,
        revealDelay: 0
      }
    });
  }

  var initConsole = function initConsole() {
    resetHome();
    var masterHomeTl = new TimelineMax();
    var mySplitText3 = new SplitText($line3, {
      type: "words,chars"
    }),
        chars3 = mySplitText3.chars;
    var mySplitText4 = new SplitText($line4, {
      type: "words,chars"
    }),
        chars4 = mySplitText4.chars;
    var mySplitText5 = new SplitText($line5, {
      type: "words,chars"
    }),
        chars5 = mySplitText5.chars;
    var mySplitText6 = new SplitText($line6, {
      type: "words,chars"
    }),
        chars6 = mySplitText6.chars;
    masterHomeTl.set([$innerWrap], {
      display: 'block'
    }).fromTo($line1, 0.5, {
      yPercent: -100,
      alpha: 0
    }, {
      yPercent: 0,
      alpha: 1,
      scrambleText: {
        text: 'gunnar normand portfolio',
        chars: '0123456789',
        speed: 1,
        revealDelay: 0.5
      },
      delay: 2
    }).fromTo($line2, 0.5, {
      yPercent: -100,
      alpha: 0
    }, {
      yPercent: 0,
      alpha: 1,
      scrambleText: {
        text: 'CEO &amp; CREATIVE DIRECTOR @ ULTRAMODERN',
        chars: 'upperCase',
        speed: 1,
        revealDelay: 0.5
      },
      delay: 0
    }).fromTo($line3, 1, {
      yPercent: -50
    }, {
      opacity: 1,
      yPercent: 0,
      ease: Back.easeOut.config(2)
    }).staggerFrom(chars3, 0.01, {
      opacity: 0,
      ease: Power1.easeIn
    }, 0.08, "+=0.1").fromTo($line4, 1, {
      yPercent: -50
    }, {
      opacity: 1,
      yPercent: 0,
      ease: Back.easeOut.config(2)
    }).staggerFrom(chars4, 0.01, {
      opacity: 0,
      ease: Power1.easeIn
    }, 0.08, "+=0.1").fromTo($line5, 1, {
      yPercent: -50
    }, {
      opacity: 1,
      yPercent: 0,
      ease: Back.easeOut.config(2)
    }).staggerFrom(chars5, 0.01, {
      opacity: 0,
      ease: Power1.easeIn
    }, 0.08, "+=0.1").fromTo($line6, 1, {
      yPercent: -50
    }, {
      opacity: 1,
      yPercent: 0,
      ease: Back.easeOut.config(2)
    }).staggerFrom(chars6, 0.01, {
      opacity: 0,
      ease: Power1.easeIn
    }, 0.08, "+=0.1").to($skipControl, 1, {
      opacity: 0,
      display: 'none',
      ease: Expo.easeOut
    });

    function skipHomeAnimations() {
      masterHomeTl.progress(0.95);
    }

    $skipControl.addEventListener('click', skipHomeAnimations);
  };

  $topLink.addEventListener('click', clickCommandHome);
  $topLink.addEventListener('mouseenter', mouseenterCommandHome);
  return {
    initConsole: initConsole
  };
}();

window.onload = function () {
  ConsoleModule.initConsole();
};
"use strict";

var CursorModule = function () {
  var innerCursor = document.querySelector(".cursor--small");
  var canvas = document.querySelector(".cursor--canvas");
  var clientX = -100;
  var clientY = -100;
  var lastX = 0;
  var lastY = 0;
  var useAltStrokeColor = false;
  var isStuck = false;
  var showCursor = false;
  var group;
  var stuckX;
  var stuckY;
  var fillOuterCursor;

  function init() {
    initCursor();
    initCanvas();
    initCursorHovers();
  }

  var initCursor = function initCursor() {
    document.addEventListener("mousemove", function (e) {
      clientX = e.clientX;
      clientY = e.clientY;
    });

    var render = function render() {
      TweenMax.set(innerCursor, {
        x: clientX,
        y: clientY
      });
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  };

  var initCanvas = function initCanvas() {
    var shapeBounds = {
      width: 75,
      height: 75
    };
    paper.setup(canvas);
    var strokeColor = '#3cfc81';
    var altStrokeColor = '#272727';
    var strokeWidth = 1;
    var segments = 8;
    var radius = 15;
    var noiseScale = 150;
    var noiseRange = 6;
    var isNoisy = false;
    var polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius);
    polygon.strokeColor = strokeColor;
    polygon.strokeWidth = strokeWidth;
    polygon.smooth();
    group = new paper.Group([polygon]);
    group.applyMatrix = false;
    var noiseObjects = polygon.segments.map(function () {
      return new SimplexNoise();
    });
    var bigCoordinates = [];

    var lerp = function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    };

    var map = function map(value, in_min, in_max, out_min, out_max) {
      return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    };

    paper.view.onFrame = function (event) {
      if (useAltStrokeColor) {
        polygon.strokeColor = altStrokeColor;
      } else {
        polygon.strokeColor = strokeColor;
      }

      if (!isStuck) {
        // move circle around normally
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        group.position = new paper.Point(lastX, lastY);
      } else if (isStuck) {
        // fixed position on a nav item
        lastX = lerp(lastX, stuckX, 0.08);
        lastY = lerp(lastY, stuckY, 0.08);
        group.position = new paper.Point(lastX, lastY);
      }

      if (isStuck && polygon.bounds.width < shapeBounds.width) {
        // scale up the shape
        polygon.scale(1.15);
      } else if (!isStuck && polygon.bounds.width > 30) {
        // remove noise
        if (isNoisy) {
          polygon.segments.forEach(function (segment, i) {
            segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
          });
          isNoisy = false;
          bigCoordinates = [];
        } // scale down the shape


        var scaleDown = 0.92;
        polygon.scale(scaleDown);
      } // while stuck and big, apply simplex noise


      if (isStuck && polygon.bounds.width >= shapeBounds.width) {
        isNoisy = true; // first get coordinates of large circle

        if (bigCoordinates.length === 0) {
          polygon.segments.forEach(function (segment, i) {
            bigCoordinates[i] = [segment.point.x, segment.point.y];
          });
        } // loop over all points of the polygon


        polygon.segments.forEach(function (segment, i) {
          // get new noise value
          // we divide event.count by noiseScale to get a very smooth value
          var noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
          var noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1); // map the noise value to our defined range

          var distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
          var distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange); // apply distortion to coordinates

          var newX = bigCoordinates[i][0] + distortionX;
          var newY = bigCoordinates[i][1] + distortionY; // set new (noisy) coordindate of point

          segment.point.set(newX, newY);
        });
      }

      polygon.smooth();
    };
  };

  var initCursorHovers = function initCursorHovers() {
    var handleSkipControlMouseEnter = function handleSkipControlMouseEnter(e) {
      TweenMax.to(innerCursor, 1, {
        background: '#3cfc81',
        scale: 2,
        ease: Expo.easeOut
      });
    };

    var handleSkipControlMouseLeave = function handleSkipControlMouseLeave(e) {
      TweenMax.to(innerCursor, 1, {
        background: 'rgba(60,252,129,.25)',
        scale: 1,
        ease: Expo.easeOut
      });
    };

    var handleCanvasCursorMouseEnter = function handleCanvasCursorMouseEnter(e) {
      var navItem = e.currentTarget;
      var navItemBox = navItem.getBoundingClientRect();
      stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
      stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
      isStuck = true;
      TweenMax.to(innerCursor, 1, {
        background: '#3cfc81',
        scale: 0.25,
        ease: Expo.easeOut
      });
    };

    var handleCanvasCursorMouseLeave = function handleCanvasCursorMouseLeave() {
      isStuck = false;
      TweenMax.to(innerCursor, 1, {
        background: 'rgba(60,252,129,.25)',
        scale: 1,
        ease: Expo.easeOut
      });
    };

    var handleSocialCursorMouseEnter = function handleSocialCursorMouseEnter(e) {
      var navItem = e.currentTarget;
      var navItemBox = navItem.getBoundingClientRect();
      stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
      stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
      isStuck = true;
      useAltStrokeColor = true;
      TweenMax.to(innerCursor, 1, {
        background: '#3cfc81',
        scale: 0,
        ease: Expo.easeOut
      });
      TweenMax.to(innerCursor, 1, {
        background: '#3cfc81',
        scale: 0,
        ease: Expo.easeOut
      });
    };

    var handleSocialCursorMouseLeave = function handleSocialCursorMouseLeave() {
      isStuck = false;
      useAltStrokeColor = false;
      TweenMax.to(innerCursor, 1, {
        background: 'rgba(60,252,129,.25)',
        scale: 1,
        ease: Expo.easeOut
      });
    };

    var skipControls = document.querySelectorAll('.skip-control');
    skipControls.forEach(function (link) {
      link.addEventListener('mouseenter', handleSkipControlMouseEnter);
      link.addEventListener('mouseleave', handleSkipControlMouseLeave);
    });
    var $links = document.querySelectorAll('.link');
    $links.forEach(function (link) {
      link.addEventListener('mouseenter', handleCanvasCursorMouseEnter);
      link.addEventListener('mouseleave', handleCanvasCursorMouseLeave);
    });
    var $socialLinks = document.querySelectorAll('.social-link');
    $socialLinks.forEach(function (link) {
      link.addEventListener('mouseenter', handleSocialCursorMouseEnter);
      link.addEventListener('mouseleave', handleSocialCursorMouseLeave);
    });
  };

  return {
    init: init
  };
}();

window.addEventListener('load', function () {
  if (window.innerWidth >= 768) {
    CursorModule.init();
  }
});
"use strict";

var KeyCommandsModule = function () {
  var $wrap = document.querySelector('.wrap');
  var audio = document.querySelector('#opening');
  var audioSuccess = document.querySelector('#success');
  var $keyboardWrap = document.querySelector('.keyboard-wrap');
  var $kbdTrigger = document.querySelector('.kbd-toggle');
  var $keys = document.querySelectorAll('.key');
  var $kbdInitMessage = document.querySelector('.kbd-init-message');

  function init() {
    $kbdTrigger.addEventListener('change', handleKeyboard);
  }

  function handleKeyboard() {
    if ($kbdTrigger.checked) {
      initKeyboard();
      showMessage();
      $keyboardWrap.classList.add('keyboard-active');
    } else {
      shutdownKeyboard();
      hideMessage();
      $keyboardWrap.classList.remove('keyboard-active');
    }
  }

  function showMessage() {
    var kbdInitTl = new TimelineMax();
    var kbdinitSplitText = new SplitText($kbdInitMessage, {
      type: "words,chars"
    }),
        kbdinitChars = kbdinitSplitText.chars;
    kbdInitTl.to($kbdInitMessage, 0.25, {
      autoAlpha: 1,
      display: 'block',
      ease: Expo.easeOut
    }).staggerFrom(kbdinitChars, 0.01, {
      opacity: 0,
      ease: Power1.easeIn
    }, 0.08, "+=0.1");
  }

  function hideMessage() {
    var kbdHideTl = new TimelineMax();
    kbdHideTl.to($kbdInitMessage, 0.25, {
      autoAlpha: 0,
      display: 'none',
      ease: Expo.easeOut
    });
  }

  function shutdownKeyboard() {
    window.removeEventListener('keydown', playSound, false);
    $keys.forEach(function (key) {
      return key.removeEventListener('transitionend', removeTransition, false);
    });
  }

  function initKeyboard() {
    keyCommandHome();
    keyCommandGooey();
    keyCommandTunes();
    keyCommandPassword();
    $keys.forEach(function (key) {
      return key.addEventListener('transitionend', removeTransition);
    });
    window.addEventListener('keydown', playSound);
  }

  function playSound(e) {
    var audio = document.querySelector("audio[data-key=\"".concat(e.keyCode, "\"]"));
    var key = document.querySelector(".key[data-key=\"".concat(e.keyCode, "\"]"));
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
      if ($kbdTrigger.checked === false) return;
      pressed.push(e.key);
      pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);

      if (pressed.join('').includes(keyCommand)) {
        runHome();
        playSuccess();
      }
    });
  }

  function keyCommandGooey() {
    var pressed = [];
    var keyCommand = 'gooey';
    window.addEventListener('keyup', function (e) {
      if ($kbdTrigger.checked === false) return;
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
      if ($kbdTrigger.checked === false) return;
      pressed.push(e.key);
      pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);

      if (pressed.join('').includes(keyCommand)) {
        runTunes();
        playSuccess();
      }
    });
  }

  function keyCommandPassword() {
    var pressed = [];
    var keyCommand = 'password';
    window.addEventListener('keyup', function (e) {
      if ($kbdTrigger.checked === false) return;
      pressed.push(e.key);
      pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);

      if (pressed.join('').includes(keyCommand)) {
        runPassword();
        playSuccess();
      }
    });
  }

  function runHome() {
    TweenLite.to(window, 1, {
      scrollTo: {
        y: 0,
        x: 0
      },
      ease: Expo.easeOut
    });
    TweenLite.to($wrap, 1, {
      scrollTo: {
        y: 0,
        x: 0
      },
      ease: Expo.easeOut
    });
    ConsoleModule.initConsole();
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

  function runPassword() {
    if ($wrap.classList.contains('false-password')) {
      $wrap.classList.remove('false-password');
    } else {
      $wrap.classList.add('false-password');
    }
  }

  return {
    init: init
  };
}();

window.addEventListener('load', function () {
  KeyCommandsModule.init();
});
"use strict";

var LinksModule = function () {
  var init = function init() {
    basicLinks();

    if (window.innerWidth >= 768) {
      socialLinks();
    }
  };

  function basicLinks() {
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
          scrambleText: {
            text: $text,
            chars: '01',
            speed: 1,
            revealDelay: 0
          },
          ease: Expo.easeOut
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
        color: '#3cfc81',
        ease: Expo.easeOut
      });
    }

    $links.forEach(function (link) {
      link.addEventListener('mouseenter', handleLinkEnter);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
  }

  function socialLinks() {
    var $socialLinks = document.querySelectorAll('.social-link');

    function handleSocialLinkEnter(e) {
      e.preventDefault();
      var svg = this.firstElementChild;
      var text = this.lastElementChild;
      var sLinkEnterTl = new TimelineMax();
      sLinkEnterTl.to(svg, 0.25, {
        yPercent: -100,
        autoAlpha: 0,
        force3D: true,
        ease: Back.easeOut.config(1.7)
      }).fromTo(text, 0.25, {
        autoAlpha: 0,
        yPercent: 100,
        force3D: true
      }, {
        autoAlpha: 1,
        yPercent: 0,
        force3D: true,
        ease: Back.easeOut.config(1.7)
      });
    }

    function handleSocialLinkLeave(e) {
      e.preventDefault();
      var svg = this.firstElementChild;
      var text = this.lastElementChild;
      var sLinkLeaveTl = new TimelineMax();
      sLinkLeaveTl.to(svg, 0.5, {
        yPercent: 0,
        autoAlpha: 1,
        force3D: true,
        ease: Back.easeOut.config(1.7)
      }, 'leave').to(text, 0.25, {
        yPercent: 100,
        autoAlpha: 0,
        force3D: true,
        ease: Back.easeOut.config(1.7)
      }, 'leave');
    }

    $socialLinks.forEach(function (slink) {
      slink.addEventListener('mouseenter', handleSocialLinkEnter);
      slink.addEventListener('mouseleave', handleSocialLinkLeave);
    });
  }

  return {
    init: init
  };
}();

window.addEventListener('load', function () {
  LinksModule.init();
});
"use strict";

var LoaderModule = function () {
  var $loader = document.querySelector('#loader');
  var $loaderGif = document.querySelector('#loader-gif');
  var $loaderTextRows = document.querySelectorAll('.loader-text');

  var initLoader = function initLoader() {
    var loaderTl = new TimelineMax({
      delay: 0,
      smoothChildTiming: true
    }).to($loaderGif, 0.25, {
      autoAlpha: 0,
      ease: Expo.easeOut
    }, 'loader').staggerFromTo($loaderTextRows, 1, {
      alpha: 0,
      yPercent: -100,
      force3D: true
    }, {
      yPercent: 0,
      alpha: 1,
      force3D: true,
      scrambleText: {
        text: '[Gunnar.tech] $INIT $INIT...',
        chars: '0123456789',
        speed: 1,
        revealDelay: 0.5
      },
      delay: 0
    }, .05, 'loader').staggerTo($loaderTextRows, 1, {
      alpha: 0
    }, .05, 'loader+=0.5').to($loader, 1.5, {
      yPercent: 100,
      zIndex: 0,
      force3D: true,
      ease: Expo.easeOut
    }, 'loader+=1.25').set($loader, {
      display: 'none'
    });
  };

  return {
    initLoader: initLoader
  };
}();

window.addEventListener('load', function () {
  LoaderModule.initLoader();
});
"use strict";

var NavModule = function () {
  var $overview = document.querySelector('#overview');
  var $logo = document.querySelector('#logo');
  var $logoCode = $logo.querySelectorAll('[data-name="rect"]');
  var $logoSvgText = $logo.querySelector('text');

  function initLogo() {
    CustomWiggle.create("wigglex", {
      wiggles: 10,
      type: "random"
    });
    CustomWiggle.create("wiggley", {
      wiggles: 10,
      type: "random"
    });
    var logoTextTl = new TimelineMax({
      repeat: -1
    });
    logoTextTl.fromTo($logoSvgText, 10, {
      rotation: 0,
      force3D: true
    }, {
      rotation: 360,
      transformOrigin: 'center',
      force3D: true,
      ease: Linear.easeNone
    });

    if ($overview.classList.contains('show')) {
      TweenMax.set(block, {
        x: 0,
        y: 0,
        fill: '#4f4f4f'
      });
    } else {
      $logoCode.forEach(function (block) {
        TweenMax.to(block, 1, {
          delay: Math.random() * 1.1,
          x: 1,
          fill: '#3cfc81',
          ease: 'wigglex',
          repeat: -1
        });
        TweenMax.to(block, 1, {
          delay: Math.random() * 1.1,
          y: -1,
          fill: '#fd971f',
          ease: 'wiggley',
          repeat: -1
        });
      });
    }

    $logo.addEventListener('click', function (e) {
      e.preventDefault();
      OverviewModule.init();
    });

    if (window.innerWidth >= 768) {
      $logo.addEventListener('mouseenter', function () {
        logoTextTl.pause();
        $logoCode.forEach(function (block) {
          if ($overview.classList.contains('show')) {
            TweenMax.set(block, {
              x: 0,
              y: 0,
              fill: '#fff'
            });
          } else {
            TweenMax.set(block, {
              x: 0,
              y: 0,
              fill: '#4f4f4f'
            });
          }
        });
      });
      $logo.addEventListener('mouseleave', function () {
        logoTextTl.play();
        $logoCode.forEach(function (block) {
          TweenMax.to(block, 1, {
            delay: Math.random() * 1.1,
            x: 1,
            fill: '#3cfc81',
            ease: 'wigglex',
            repeat: -1
          });
          TweenMax.to(block, 1, {
            delay: Math.random() * 1.1,
            y: -1,
            fill: '#fd971f',
            ease: 'wiggley',
            repeat: -1
          });
        });
      });
    }
  }

  return {
    initLogo: initLogo
  };
}();

window.addEventListener('load', function () {
  NavModule.initLogo();
});
"use strict";

var OverviewModule = function () {
  var $overview = document.querySelector('#overview');
  var $overviewMain = document.querySelector('.overview-main');
  var $overviewWipe = document.querySelector('.overview-wipe');
  var $logo = document.querySelector('#logo');
  var $logoComputer = $logo.querySelector('.logo-path');
  var $logoCode = [].slice.call($logo.querySelectorAll('[data-name="rect"]')).reverse();
  var $textPath = $logo.querySelector('textPath');
  var $sideScroller1 = document.querySelector('.sidescroller-1');
  var $sideScroller2 = document.querySelector('.sidescroller-2');
  var $sideScroller3 = document.querySelector('.sidescroller-3');
  var $footer = document.querySelector('footer');

  var init = function init() {
    if ($overview.getAttribute('data-display') === 'hide') {
      $overview.setAttribute('data-display', 'show');
      $footer.classList.add('overview-active');
      bodyScrollLock.disableBodyScroll($overview);
      var overviewShowTl = new TimelineMax({
        delay: 0,
        onComplete: WorkMenu.init
      }).staggerTo($logoCode, 0.15, {
        fill: '#f8f8f2',
        ease: Expo.easeOut
      }, 0.015, 'overview').to($overviewWipe, 2, {
        yPercent: -100,
        force3D: true,
        ease: Expo.easeOut
      }, 'overview').to($logoComputer, 1, {
        fill: '#f8f8f2',
        ease: Expo.easeOut
      }, 'overview').to($textPath, 1, {
        fill: '#f8f8f2',
        ease: Expo.easeOut
      }, 'overview').to($sideScroller1, 1, {
        color: '#f8f8f2',
        ease: Expo.easeOut
      }, 'overview').to($sideScroller2, 1, {
        color: '#f8f8f2',
        ease: Expo.easeOut
      }, 'overview').to($sideScroller3, 1, {
        color: '#f8f8f2',
        ease: Expo.easeOut
      }, 'overview').set($overview, {
        autoAlpha: 1,
        display: 'block'
      }, 'overview');
    } else {
      $overview.setAttribute('data-display', 'hide');
      $footer.classList.remove('overview-active');
      bodyScrollLock.enableBodyScroll($overview);
      var overviewHideTl = new TimelineMax({
        delay: 0
      });
      overviewHideTl.staggerTo($logoCode, 0.15, {
        fill: '#4d4d4d',
        ease: Expo.easeOut
      }, 0.015, 'overview');
      overviewHideTl.to($overviewWipe, 2, {
        yPercent: 0,
        force3D: true,
        ease: Expo.easeOut
      }, 'overview');

      if (window.innerWidth >= 768) {
        overviewHideTl.to($logoComputer, 1, {
          fill: '#4d4d4d',
          ease: Expo.easeOut
        }, 'overview');
        overviewHideTl.to($textPath, 1, {
          fill: '#4d4d4d',
          ease: Expo.easeOut
        }, 'overview');
        overviewHideTl.to($sideScroller1, 1, {
          color: '#4d4d4d',
          ease: Expo.easeOut
        }, 'overview');
        overviewHideTl.to($sideScroller2, 1, {
          color: '#4d4d4d',
          ease: Expo.easeOut
        }, 'overview');
        overviewHideTl.to($sideScroller3, 1, {
          color: '#4d4d4d',
          ease: Expo.easeOut
        }, 'overview');
      }

      overviewHideTl.to($overview, 1, {
        autoAlpha: 0,
        display: 'none',
        ease: Expo.easeOut
      }, 'overview+=1.25');
    }
  };

  return {
    init: init
  };
}();
"use strict";

var ResizeModule = function () {
  function init() {
    window.addEventListener('resize', refreshBrowser);
  }

  function refreshBrowser() {
    window.location.reload();
  }

  return {
    init: init
  };
}();

window.addEventListener('load', function () {
  ResizeModule.init();
});
"use strict";

var WorkMenu = function () {
  function init() {
    console.log('work menu js');
  }

  return {
    init: init
  };
}();
//# sourceMappingURL=bundle.js.map
