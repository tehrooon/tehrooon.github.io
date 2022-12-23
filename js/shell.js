var scr = document.getElementById("screen")
var speed = 90;
var linebreak = "<br />";
var login = "login: ";
var ps1 = '~$ ';

async function commander(t) {
	var input = commands[t][0];
	var output = commands[t][1];
	let i = 0;
	let newLine = new Promise(allDone => {
		async function typeWriter() {
			let outPut = new Promise(hitEnter => {
				if (i < input.length) {
					scr.innerHTML += input.charAt(i);
					i++;
					setTimeout(typeWriter, speed);
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
			scr.innerHTML += linebreak + await newLine; // this line runs. but why?
		};
		typeWriter();
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
