var scr = document.getElementById("screen")
var speed = 100;
var linebreak = "<br />";
var login = "login: ";
var ps1 = '~$ ';

async function commander(t) {
	var input = commands[t][0];
	var output = commands[t][1];
	let i = 0;
	let newLine = new Promise(allDone => {
		async function typer() {
			let outPut = new Promise(hitEnter => {
				async function stroke() {
					scr.innerHTML += input.charAt(i);
				}
				if (i < input.length) {
					stroke().then(function(value) {i++, setTimeout(typer, speed);});
				} else if (i == input.length) {
					hitEnter(output)
				};
			});
			// login
			if (t==0) {
				scr.innerHTML = await outPut;
			} else {
				scr.innerHTML += linebreak + await outPut;
			}
			allDone(ps1);
			scr.innerHTML += linebreak + await newLine; // these two lines are not understadable; this line runs. but why?
		};
		typer()
	});
	scr.innerHTML += linebreak + await newLine; // I dont understand this line. if not here typing will mixed.
}

// start
scr.innerHTML = login;
var n = 0;
function shell() {
	if (n < commands.length) {
		commander(n).then(function(value) {n++; setTimeout(shell, speed)});
	}
}
shell();
