var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn=document.getElementById("random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

body.onload = setGradient;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function generateRandom() {
  var letters = "0123456789ABCDEF";
  var color="#";
  for(var j=0;j<6;j++){
  		color+= letters[Math.floor(Math.random()*16)];
  }
  
  return color;
}

randomBtn.onclick=function(){
	// color1.value="rgb(" + generateRandom(0,2) +"," + generateRandom(0,255) + "," + generateRandom(0,255) +")";
	color1.value=generateRandom();
	color2.value=generateRandom();
	setGradient();

}