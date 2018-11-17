function chColor(color) {
   document.body.style.background = color;
   document.getElementsByClassName("masthead")[0].style.background = color;
   document.getElementsByClassName("site-wrapper")[0].style.background = color;
}

function chBorderColor(color, id) {
	console.log(document.getElementById(id).style.color);
	document.getElementById(id).style.border = "1px";
	document.getElementById(id).style.color = color;
}