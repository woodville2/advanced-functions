"use strict";

function Animal(mammal, type, food) {
  this.mammal = mammal;
  this.type = type;
  this.food = food;
}
const animal = new Animal("largest", "elephant", "plants");

console.log(animal);

Animal.prototype.identifyType = function () {
  console.log(this.type + "Asian Elephant");
};

function largeMammal() {
  console.log(" I am the biggest");
}

Animal.prototype.largeMammal = largeMammal;
