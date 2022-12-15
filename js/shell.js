const commands = [
	["guest", "logged in as guest"],
	["whoami", "amir"],
	["exho mail", "4mi2@proton.me"],
	["echo eth", "0x411112"]
];

var scr = document.getElementById("screen")
var speed = 50;
var login = 'login: ';
var ps1 = 'amir@github.io:~$ ';


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
			scr.innerHTML += "<br />" + await myPromise;
			scr.innerHTML += "<br />" + ps1;
			//yourResolve(ps1);
		};
		typeWriter();
		//typeWriter().then(function(value) {yourResolve(ps1);});
	});
	scr.innerHTML += "<br />" + await yourPromise;
}


scr.innerHTML += "<br />" + login;
user(0).then(function(value) {user(1).then(function(value) {user(2);});});
