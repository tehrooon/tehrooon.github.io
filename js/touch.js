var article = document.getElementsByTagName("article")[0]; // define the article
var bc = article.innerHTML; // define variable bc that includes the business card.

// define a function that overwrites the content of article with qrCode var.
function showQrCode() {
	var style = "width: 15%; height: 15%; display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
	var qrCode = '<img src="../media/svg/qr-code.svg" /><img id="amir" ondblclick="handleQrCode()" style="' + style + '" src="../media/amir.webp" />';
	article.innerHTML = qrCode; // trigger.
}

// define a function to handle qr-code to bc and bc to qr-code
function handleQrCode() {
	if (article.innerHTML == bc) {
		showQrCode();
	} else {article.innerHTML = bc}
}

// add an event listener to listen for three start touches.
article.addEventListener("touchstart", function(event) {
	var countTouches = event.touches.length;
	if (countTouches == 3) {
		handleQrCode();
	}
}, false)
// define 3 fingers touch and functions to show and hide article.innerHTML.

// add an event listener for keyboard shortcut.
document.addEventListener("keydown", function(event) {
	if (event.which == 81 && event.which == 82) {
		handleQrCode();
	}
})
