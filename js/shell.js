var scr = document.getElementById("screen")
var speed = 90;
var login = "login: ";
var ps1 = '~$ ';

async function user(t) {
	let yourPromise = new Promise(function(yourResolve) {
		let i = 0;
		var input = commands[t][0];
		var output = commands[t][1];
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
			if (t==0) {
				scr.innerHTML = await myPromise;
				scr.innerHTML += "<br />" + await yourPromise;
			} else {
				scr.innerHTML += "<br />" + await myPromise;
				scr.innerHTML += "<br />" + await yourPromise;
			}
		};
		typeWriter();
	});
	scr.innerHTML += "<br />" + await yourPromise; // I dont understand this line.
}

// start
scr.innerHTML = login;
var n = 0;
function shell() {
	if (n < commands.length) {
		user(n).then(function(value) {n++; setTimeout(shell, speed)});
	}
}
shell();
