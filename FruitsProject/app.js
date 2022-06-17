"use strict";

//require the Mongoose package (after running >npm i mongoose in Hyper to install it)
const mongoose = require("mongoose");

//connect to MongoDB by specifying port to access MongoDB server
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/fruitsDB");
}

// Create Mongoose Schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// Create Mongoose Model
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  // name: "Apple",
  rating: 10,
  review: "Peaches are so yummy!",
});

// fruit.save();

////////////////////////////
// Person Schema Challenge
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  rating: 6,
  review: "Decent fruit.",
});

// mango.save();

const person = new Person({
  name: "Amy",
  age: 12,
  // favoriteFruit: pineapple,
});

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!",
// });

// const orange = new Fruit({
//   name: "Orange",
//   score: 10,
//   review: "Great fruit!",
// });

// const banana = new Fruit({
//   name: "Banana",
//   score: 10,
//   review: "Awesome fruit",
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne(
//   { _id: "62a4e714d206294bdce50788" },
//   { name: "Peach" },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the document.");
//     }
//   }
// );

// Person.updateOne({ name: "John" }, { favoriteFruit: mango }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated document.");
//   }
// });

// Fruit.deleteOne({ name: "Pineapple" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted document.");
//   }
// });

// Person.deleteOne({ name: "Amy" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted document.");
//   }
// });
