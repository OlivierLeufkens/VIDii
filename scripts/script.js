// JavaScript Document
console.log("Evolve!");

var deButton = document.querySelector("button");
var jolteon = document.querySelector("img");

deButton.addEventListener("click", EvolveJolteon);

function EvolveJolteon() {
	jolteon.classList.toggle("ThunderstoneEvolve");
}