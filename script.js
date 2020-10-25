var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("yolo");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setValue() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ "rgb("+ Math.floor(Math.random() * 256) +","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")" 
	+ ", " 
	+ "rgb(" +Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")" 
	+ ")";
}

setGradient();

button.addEventListener("click", setValue);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

