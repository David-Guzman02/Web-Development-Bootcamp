"use strict";

// Selecting elements
const numberOfDrumButtons = document.querySelectorAll(".drum").length;

//////////////////////////////////////
// detecting button press

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });

  /////////////////////////////////
  // detecting key press

  document.addEventListener("keydown", function (e) {
    makeSound(e.key);

    buttonAnimation(e.key);
  });

  const makeSound = function (key) {
    switch (key) {
      case "w":
        const tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        const tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        const tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        const tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        const snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        const crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        const kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
    }
  };
}

const buttonAnimation = function (currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }),
    100;
};

// console.log(housekeeper1);

// ///////////////////////////////////////
// // Drum sounds with if
// for (let i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     const buttonInnerHTML = this.innerHTML;

//     if (buttonInnerHTML === "w") {
//       const tom1 = new Audio("./sounds/tom-1.mp3");
//       tom1.play();
//     }
//     if (buttonInnerHTML === "a") {
//       const tom2 = new Audio("./sounds/tom-2.mp3");
//       tom2.play();
//     }
//     if (buttonInnerHTML === "s") {
//       const tom3 = new Audio("./sounds/tom-3.mp3");
//       tom3.play();
//     }
//     if (buttonInnerHTML === "d") {
//       const tom4 = new Audio("./sounds/tom-4.mp3");
//       tom4.play();
//     }
//     if (buttonInnerHTML === "j") {
//       const snare = new Audio("./sounds/snare.mp3");
//       snare.play();
//     }
//     if (buttonInnerHTML === "k") {
//       const crash = new Audio("./sounds/crash.mp3");
//       crash.play();
//     }
//     if (buttonInnerHTML === "l") {
//       const kick = new Audio("./sounds/kick-bass.mp3");
//       kick.play();
//     }
//   });
// }

const HouseKeeper = function (yearsOFExperience, name, cleaningRepertoire) {
  this.yearsOFExperience = yearsOFExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("Cleaning in progress...");
  };
};

const housekeeper1 = new HouseKeeper(12, "Jane", [
  "bathroom",
  "lobby",
  "bedroom",
]);

// housekeeper1.clean();
