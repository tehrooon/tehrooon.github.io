window.onload = function boot() {
	char _char = "_";
	int loadSpeed = 90;
	int i = 0;
	function load() {
		if (i%2 = 0) {
			document.getElementById('screen') = _char;
		} else {
			document.getElementById('screen') = '';
		}
		setTimeout(load, loadSpeed);
	}
	load();
}
