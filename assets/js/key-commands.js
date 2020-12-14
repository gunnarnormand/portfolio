const KeyCommandsModule = (function() {

	const $wrap = document.querySelector('.wrap');
	const audio = document.querySelector('#opening');
  const audioSuccess = document.querySelector('#success');
	const $keyboardWrap = document.querySelector('.keyboard-wrap');
	const $kbdTrigger = document.querySelector('.kbd-toggle');
	const $keys = document.querySelectorAll('.key');
	const $kbdInitMessage = document.querySelector('.kbd-init-message');

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
		const kbdInitTl = new TimelineMax();
		let kbdinitSplitText = new SplitText($kbdInitMessage, {type:"words,chars"}),
		kbdinitChars = kbdinitSplitText.chars;
			kbdInitTl
				.to($kbdInitMessage, 0.25, {autoAlpha:1, display:'block', ease: Expo.easeOut})
				.staggerFrom(kbdinitChars, 0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");

	}

	function hideMessage() {
		const kbdHideTl = new TimelineMax();
			kbdHideTl
				.to($kbdInitMessage, 0.25, {autoAlpha:0, display:'none', ease: Expo.easeOut});
	}

	function shutdownKeyboard() {
		window.removeEventListener('keydown', playSound, false);
		$keys.forEach(key => key.removeEventListener('transitionend', removeTransition, false));
	}

	function initKeyboard() {
		keyCommandHome();
		keyCommandGooey();
		keyCommandTunes();
		keyCommandPassword();

		$keys.forEach(key => key.addEventListener('transitionend', removeTransition));
		window.addEventListener('keydown', playSound);
	}

	function playSound(e) {
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
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

		let pressed = [];
		let keyCommand = 'home';

		window.addEventListener('keyup', (e) => {
			if ($kbdTrigger.checked === false ) return;

			pressed.push(e.key);
			pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
			if (pressed.join('').includes(keyCommand)) {
				runHome();
				playSuccess();
			}
		});
	}

	function keyCommandGooey() {

		let pressed = [];
		let keyCommand = 'gooey';

		window.addEventListener('keyup', (e) => {
			if ($kbdTrigger.checked === false ) return;

			pressed.push(e.key);
			pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
			if (pressed.join('').includes(keyCommand)) {
				runGooey();
				playSuccess();
			}
		});
	}

	function keyCommandTunes() {

		let pressed = [];
		let keyCommand = 'tunes';

		window.addEventListener('keyup', (e) => {
			if ($kbdTrigger.checked === false ) return;

			pressed.push(e.key);
			pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
			if (pressed.join('').includes(keyCommand)) {
				runTunes();
				playSuccess();
			}
		});
	}

	function keyCommandPassword() {

		let pressed = [];
		let keyCommand = 'password';

		window.addEventListener('keyup', (e) => {
			if ($kbdTrigger.checked === false ) return;

			pressed.push(e.key);
			pressed.splice(-keyCommand.length - 1, pressed.length - keyCommand.length);
			if (pressed.join('').includes(keyCommand)) {
				runPassword();
				playSuccess();
			}
		});
	}

	function runHome() {
		TweenLite.to(window, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
		TweenLite.to($wrap, 1, {scrollTo:{y:0, x:0}, ease: Expo.easeOut});
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
})();

window.addEventListener('load', function() {
	KeyCommandsModule.init();
});
