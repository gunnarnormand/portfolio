const ResizeModule = (function() {
  function init() {
		window.addEventListener('resize', refreshBrowser);
  }

	function refreshBrowser() {
		window.location.reload();
	}
  return {
    init: init
  };
})();

window.addEventListener('load', function (){
  ResizeModule.init();
});
