var scr = document.getElementById("screen");
var speed = 100;
var linebreak = "<br />";
var login = "login: ";
var ps1 = `<span style="color: yellow;"> ~ $ </span>`;
async function commander(t) {
	var input = commands[t][0];
	var output = commands[t][1];
	let i = 0;
	let newLine = new Promise(resolve => {
		async function typer() {
			let outPut = new Promise(resolve => {
				async function stroke() {
					scr.innerHTML += input.charAt(i);
				}
				if (i < input.length) {
					stroke().then(function(value) {i++, setTimeout(typer, speed);});
				} else if (i == input.length) {
					resolve(output)
				};
			});
			// login
			if (t==0) {
				scr.innerHTML = await outPut;
			} else {
				scr.innerHTML += linebreak + '<span class="green">' + await outPut + '</span>';
			}
			resolve(ps1);
			scr.innerHTML += linebreak + await newLine; // #3 not understadable; if here this line runs. if not here types to the end and then first letter
			scr.scrollIntoView({block: "end"}); // auto scroll
		};
		typer()
	});
	scr.innerHTML += linebreak + await newLine; // #3 not understadable. if not here typing will be mixed. but Why?
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
