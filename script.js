// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked
function addClass(el){
	el.classList.add("opaque");

}

// "el" stands for the "element" that was just clicked
function removeClass(el){
	el.classList.remove("navyblue");
}
function changeWords(el) {
  document.getElementById("myHeader").innerHTML = "They are all #1";
}
function changeImage(el){
	document.getElementById("lafcphoto").src = "image/fans.png";
}
function allPhotos(el){
	document.getElementById("lafcphoto").src = "image/one.png";
	document.getElementById("bearphoto").src = "image/one.png";
	document.getElementById("threephoto").src = "image/one.png";
	document.getElementById("cardphoto").src = "image/one.png";
	document.getElementById("seriesphoto").src = "image/one.png";
	document.getElementById("heatphoto").src = "image/one.png";
}
