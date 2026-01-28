"use strict";

let userChoice;
let computerChoice;

document.addEventListener("DOMContentLoaded", init);

function init() {
  const rock_btn = document.querySelector(".rock");
  const paper_btn = document.querySelector(".paper");
  const scissors_btn = document.querySelector(".scissors");

  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissors_btn.addEventListener("click", scissorsClick);
}

// brugerr gæt
function rockClick() {
  userChoice = "rock";
  startRound();
}

function paperClick() {
  userChoice = "paper";
  startRound();
}

function scissorsClick() {
  userChoice = "scissors";
  startRound();
}

// runde start
function startRound() {
  computerChooses();
  handShakesStart();
}

// computer gæt
function computerChooses() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
}

// hånd bevægelse 
function handShakesStart() {
  const player1 = document.querySelector("#player1");
  const player2 = document.querySelector("#player2");

  // reset hænderne
  player1.className = "player";
  player2.className = "player";

  // start animation
  player1.classList.add("shake");
  player2.classList.add("shake");

  // efter animation slutter
  setTimeout(() => {
    player1.classList.remove("shake");
    player2.classList.remove("shake");

    showHands();
    decideWinner();
  }, 1800); 
}

// vis havd hænder viser
function showHands() {
  const player1 = document.querySelector("#player1");
  const player2 = document.querySelector("#player2");

  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);
}

// resultat logik
function decideWinner() {
  hideAllTexts();

  if (userChoice === computerChoice) {
    document.querySelector("#draw").classList.remove("hidden");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    document.querySelector("#win").classList.remove("hidden");
  } else {
    document.querySelector("#lose").classList.remove("hidden");
  }
}


function hideAllTexts() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
}
