"use strict";

function createPerson(name, age, married) {
  const person = {
    name,
    age,
    married: married,

    talk: function () {
      console.log("Welcome to the site!");
    },
  };

  return person;
}

const liam = createPerson("Liam", 35, "false");
