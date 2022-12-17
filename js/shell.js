var scr = document.getElementById("screen")
var speed = 70;
//var ps1 = 'amir@github.io:~$ ';
var ps1 = '$ ';

async function user(t) {
	let yourPromise = new Promise(function(yourResolve) {
		let i = 0;
		var input = commands[t][0];
		var output = commands[t][1] + " ";
		async function typeWriter() {
			let myPromise = new Promise(function(myResolve) {
				if (i < input.length) {
					scr.innerHTML += input.charAt(i);
					i++;
					setTimeout(typeWriter, speed);
				} else if (i == input.length) {
					myResolve(output)
					yourResolve(ps1);
				};
			});
			scr.innerHTML += "<br />" + await myPromise;
			scr.innerHTML += "<br />" + ps1;
			//yourResolve(ps1);
		};
		typeWriter();
		//typeWriter().then(function(value) {yourResolve(ps1);});
	});
	scr.innerHTML += "<br />" + await yourPromise;
}


scr.innerHTML += "<br />" + ps1;
var n = 0;
function shell() {
	if (n < commands.length) {
		user(n).then(function(value) {n++; setTimeout(shell, speed)});
}
}
shell();
