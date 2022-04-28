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

// FRIENDSHIP --> SYLVEON
var deButton = document.querySelector(".friendship");
var sylveon = document.querySelector(".eevee");

deButton.addEventListener("click", EvolveSylveon);

function EvolveSylveon() {
	sylveon.classList.toggle("friendshipEvolve");
}

// DAY/NIGHT --> UMBREON
var deButton = document.querySelector(".night");
var umbreon = document.querySelector(".eevee");

deButton.addEventListener("click", EvolveUmbreon);

function EvolveUmbreon() {
	umbreon.classList.toggle("nightEvolve");
}

// ICEROCK --> GLACEON
var deButton = document.querySelector(".icestone");
var glaceon = document.querySelector(".eevee");

deButton.addEventListener("click", EvolveGlaceon);

function EvolveGlaceon() {
	glaceon.classList.toggle("icestoneEvolve");
}

// MOSS --> LEAFEON
var deButton = document.querySelector(".moss");
var leafeon = document.querySelector(".eevee");

deButton.addEventListener("click", EvolveLeafeon);

function EvolveLeafeon() {
	leafeon.classList.toggle("mossEvolve");
}