"use strict";

// Create shortPerson() function that will destructure given person object
// to following form: { n: "Mike", c: "Splain", a: 23, p: 100 }

// If given person object doesn't have postsQuantity field
// it should get default value of 0.

const person1 = {
  name: "Mike",
  info: {
    country: "Spain",
    age: 23,
  },
  postsQuantity: 100,
};

const person2 = {
  name: "Alice",
  info: {
    country: "Italy",
    age: 25,
  },
};

const shortPerson = (person) => {
  const {
    name: n,
    info: { country: c, age: a },
    postsQuantity: p = 0,
  } = person;

  return { n, c, a, p };
};

console.log(shortPerson(person1));
console.log(shortPerson(person2));
