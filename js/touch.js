//var article = document.getElementsByTagName("article")[0];
//var style = "width: 20%; height: 20%; display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
//var qrCode = '<img src="../media/svg/qr-code.svg" /><img style="' + style + '" src="../media/amir.webp" />';
//article.innerHTML = qrCode // trigger.
var article = document.getElementsByTagName("article")[0];
article.addEventListener("touchstart", function(event) {
  window.alert(event.touches.length)
  window.alert("hello")
}, false)
