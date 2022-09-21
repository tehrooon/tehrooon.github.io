var i = 0;
var ps1 = 'amir@github.io:~$ ';
var txt = 'myname'; /* The text */
var result = 'amir';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  document.getElementById("ps1").innerHTML = ps1;
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function endit() {
  document.getElementById("result").innerHTML = result;
}

function final() {
	typeWriter();
	endit();
}
