const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

const items = [
    { name: "captain_america", image: "images/captain_america.jpg"},
    { name: "casque_iron_man", image: "images/casque_iron_man.png"},
    { name: "deadpool", image: "images/deadpool.png"},
    { name: "groot", image: "images/groot.jpg"},
    { name: "iron_man", image: "images/iron_man.jpg"},
    { name: "itachi", image: "images/itachi.png"},
    { name: "miles_morales", image: "images/miles_morales.jpg"},
    { name: "naruto", image: "images/naruto.png"},
    { name: "sasuke", image: "images/sasuke.png"},
    { name: "tete_rdj", image: "images/tete_rdj.jpg"},
]