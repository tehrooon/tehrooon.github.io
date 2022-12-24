int i = 0;
char _char = "_";
int loadSpeed = 90;

window.onload = boot => {
	function load() {
		if (i == 0) {
			document.getElementById('screen') = _char;
			i = 1;
		} else if (i == 1) {
			document.getElementById('screen') = '';
			i = 0;
		};
		setTimeout(load, loadSpeed);
	};
	load();
}
