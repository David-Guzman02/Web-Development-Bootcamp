// const tweet = prompt("Compose your tweet");

// if (tweet.length > 140) {
//   tweet.slice(0, 140),
//     alert(
//       `You have written ${tweet.length} characters. It must be less than 140.`
//     );
// } else {
//   alert(
//     `You have written ${tweet.length} characters, you have ${
//       140 - tweet.length
//     } characters remaining`
//   );
// }

// const yourName = prompt("What is your name?");

// alert(
//   `Hello, ${
//     yourName.toUpperCase().slice(0, 1) + yourName.toLowerCase().slice(1)
//   }`
// );
// const dogAge = prompt("How old is your dog?");
// const humanAge = (dogAge - 2) * 4 + 21;

// alert(`Your dog is ${humanAge} in human years`);

// const calcBottles = function (startingMoney, costPerBottle) {
//   const numberOfBottles = Math.trunc(startingMoney / costPerBottle);
//   return numberOfBottles;
// };

// const calcChange = function (startingAmount, costPerBottle) {
//   const change = startingAmount % costPerBottle;
//   return change;
// };

// function getMilk(money, costPerBottle) {
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log(
//     `buy $${calcBottles(money, costPerBottle)} worth of bottles of milk`
//   );
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

//   return calcChange(money, costPerBottle);
// }

// console.log(`Hello master, here is your ${getMilk(10, 3)} change`);

// getMilk(5);

////////////////////////////////////////
// Time left to live

// const lifeInWeeks = function (age) {
//   const years = 90 - age;
//   const days = years * 365;
//   const weeks = years * 52;
//   const months = years * 12;

//   console.log(
//     `You have ${days} days, ${weeks} weeks, and ${months} months left.`
//   );
// };

// lifeInWeeks(56);

////////////////////////////////////
// BMI Calculator

// const bmiCalculator = function (weight, height) {
//   const heightsquared = Math.pow(height, 2);
//   const bmi = weight / heightsquared;
//   return Math.trunc(bmi);
// };

// console.log(bmiCalculator(60, 2));
// const bmi = bmiCalculator(65, 1.8);
// console.log(bmi);

/////////////////////////////////////////
// random dice roll

// const random = function (val) {
//   const roll = Math.trunc(Math.random() * val + 1);
//   return roll;
// };
// console.log(random(100));
// const output = [];
// let count = 1;

// const fizzBuzz = function () {
//   while (count <= 100) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     } else if (count % 5 === 0) {
//       output.push("Buzz");
//     } else {
//       output.push(count);
//     }
//     count++;
//   }
//   console.log(output);
// };

// fizzBuzz();

/////////////////////////////////////////
// 99 bottles

// let count = 99;

// const beer = function () {
//   while (count > 0) {
//     if (count > 1) {
//       console.log(
//         `${count} bottles of beer on the wall, ${count} bottles of beer.`
//       );
//       count--;
//       console.log(
//         `Take one down and pass it around, ${count} bottles of beer on the wall.`
//       );
//     } if (count === 1) {
//       console.log(
//         `${count} bottle of beer on the wall, ${count} bottle of beer.`
//       );
//       count--;
//       console.log(
//         `Take one down and pass it around, no more bottles of beer on the wall.`
//       );
//     } if (count === 0) {
//       console.log(
//         "No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall."
//       );
//     }
//   }
// };

// beer();

////////////////////////////////////////////////
// Fibonacci Generator

// const fibonacciGenerator = function (n) {
//   const result = [];

//   if (n > 0) {
//     result.push(0);

//     if (n >= 2) {
//       result.push(1);
//     }
//     for (let i = 2; i < n; i++) {
//       result.push(result[i - 1] + result[i - 2]);
//     }
//   }
//   console.log(result);
// };

// fibonacciGenerator(2);
