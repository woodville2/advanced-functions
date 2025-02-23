"use strict";

function Person(name, age, married) {
  this.name = name;
  this.age = age;
  this.married = false;
  this.talk = function () {
    console.log("Welcome to the site!");
  };
}

const sebastian = new Person("sebastian", 40);
sebastian.talk
