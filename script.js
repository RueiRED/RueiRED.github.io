//All images taken from PEXELS.COM - free stock images
"use strict";

window.onload = function() {


//Navigation bar buttons
var about = document.querySelector("#navAbout");
var services = document.querySelector("#navServices");
var contact = document.querySelector("#navContact");

about.onclick = function() {
  document.querySelector("#aboutRow").scrollIntoView();
  window.scrollBy(0, -50);
}

services.onclick = function() {
  document.querySelector("#servicesRow").scrollIntoView();
  window.scrollBy(0, 700);
}

contact.onclick = function() {
  document.querySelector("#phoneContact").scrollIntoView();
  window.scrollBy(0, -50);
}

//Learn more jumbotron button jump to about div
var bannerBtn = document.querySelector("#bannerBtn");
bannerBtn.onclick = function() {
  document.querySelector("#aboutRow").scrollIntoView();
  window.scrollBy(0, -50);
}
}