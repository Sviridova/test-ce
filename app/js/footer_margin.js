"use strict";

var screenWidth = window.screen.width;
var margin = (screenWidth - 940) / 2;

if (screenWidth >= 1050) {
    document.getElementById("footer1").style.marginLeft = margin + "px";
    document.getElementById("footer2").style.marginLeft = margin + "px";
}
