window.onload = init;

function init() {
  var image0 = document.getElementById("zero");
  image0.onclick = showImageZero;
  var image1 = document.getElementById("one");
  image1.onclick = showImageOne;
  var image2 = document.getElementById("two");
  image2.onclick = showImageTwo;
  var image3 = document.getElementById("three");
  image3.onclick = showImageThree;
  var image4 = document.getElementById("four");
  image4.onclick = showImageFour;
  var image5 = document.getElementById("five");
  image5.onclick = showImageFive;
}

function showImageZero() {
  var image0 = document.getElementById("zero");
  image0.src = "photo/zero.jpg";
}
function showImageOne() {
  var image1 = document.getElementById("one");
  image1.src = "photo/one.jpg";
}
function showImageTwo() {
  var image2 = document.getElementById("two");
  image2.src = "photo/two.jpg";
}
function showImageThree() {
  var image3 = document.getElementById("three");
  image3.src = "photo/three.jpg";
}
function showImageFour() {
  var image4 = document.getElementById("four");
  image4.src = "photo/four.jpg";
}
function showImageFive() {
  var image5 = document.getElementById("five");
  image5.src = "photo/five.jpg";
}