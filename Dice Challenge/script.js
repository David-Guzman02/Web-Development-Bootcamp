"use strict";

// Selecting elements
const img1El = document.querySelector(".img1");
const img2El = document.querySelector(".img2");
const heading1 = document.querySelector("h1");

// Generate random dice roll for player 1
const randomNumber1 = Math.trunc(Math.random() * 6) + 1;

// Generate random dice roll for player 2
const randomNumber2 = Math.trunc(Math.random() * 6) + 1;

// Display random dice image for both players
const randomDice = function () {
  img1El.setAttribute("src", `./images/dice${randomNumber1}.png`);
  img2El.setAttribute("src", `./images/dice${randomNumber2}.png`);

  if (randomNumber1 > randomNumber2) {
    heading1.innerHTML = "🚩 Player 1 Wins!";
  }
  if (randomNumber1 < randomNumber2) {
    heading1.innerHTML = " Player 2 Wins! 🚩";
  }
  if (randomNumber1 === randomNumber2) {
    heading1.innerHTML = "Draw!";
  }
};

randomDice();
