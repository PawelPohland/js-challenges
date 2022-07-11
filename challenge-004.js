"use strict";

// Implement IIFE that will expose following methods:
// greet() - takes one argument and returns greeting string
// changeGreeting() - changes greeting string
// Initial greeting string "Hey, that's" must be defined inside IIFE.

// Example:
// greeting.greet("Bob") => "Hey, that's Bob"

// greeting.changeGreeting("Good morning")
// greeting.greet("Emily") => "Good morning Emily"

// closure + IIFE
const greeting = (() => {
  let message = "Hey, that's";

  return {
    greet: (name) => `${message} ${name}`,
    changeGreeting: (newMessage) => (message = newMessage),
  };
})();

console.log(greeting.greet("Bob"));

greeting.changeGreeting("Good morning");
console.log(greeting.greet("Emily"));
