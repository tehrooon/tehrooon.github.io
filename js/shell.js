var i = 0;
var ps1 = 'amir@github.io:~$ ';
var input = commands[0][0]; /* input */
var output = commands[0][1]; /* output */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  document.getElementById("ps1").innerHTML = ps1;
  if (i < input.length) {
    document.getElementById("demo").innerHTML += input.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function endit() {
  document.getElementById("result").innerHTML = output;
}

/*
function final() {
	typeWriter();
	endit();
}
*/

let myPromise = new Promise(function(myResolv, myReject) {
	typeWriter();
});

myPromise.then(function(value) {
	endit();
});
