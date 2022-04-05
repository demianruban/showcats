"use strict";

window.onload = function() {
    setInterval(changeCats, 3000);
}

function changeCats() {
    var timestamp = new Date().getTime();
    // get image
    let img = document.getElementById("catimg");
    // reload image
    img.src = "https://cataas.com/cat/says/hello?t=" + timestamp;;
}
