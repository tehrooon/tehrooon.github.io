window.onload = function boot() {
	char _char = "_";
	int loadSpeed = 90;
	int i = 0;
	function load() {
		if (i%2 = 0) {
			document.getElementById('scr') = _char;
		} else {
			document.getElementById('scr') = '';
		}
		setTimeout(load, loadSpeed);
	}
	load();
}
