// JavaScript Document
console.log("Evolve!");


// THUNDERSTONE --> JOLTEON 
var deButton = document.querySelector(".thunderstone");
var jolteon = document.querySelector(".eevee");

deButton.addEventListener("click", EvolveJolteon);

function EvolveJolteon() {
	jolteon.classList.toggle("ThunderstoneEvolve");
}

// WATERSTONE --> VAPOREON
var deButton = document.querySelector(".waterstone");
var vaporeon = document.querySelector(".eevee");

deButton.addEventListener("click", EvolveVaporeon);

function EvolveVaporeon() {
	vaporeon.classList.toggle("WaterstoneEvolve");
}

// FIRESTONE --> FLAREON
var deButton = document.querySelector(".firestone");
var flareon = document.querySelector(".eevee");

deButton.addEventListener("click", EvolveFlareon);

function EvolveFlareon() {
	flareon.classList.toggle("FirestoneEvolve");
}