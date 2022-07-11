"use strict";

// Swap values of two variables.

let first = "first";
let second = "second";

console.log(`BEFORE SWAPPING: first = "${first}", second = "${second}"`);

// Solution 1 - using temporary variable
let temp = first;
first = second;
second = temp;

console.log(`SWAPPING #1: first = "${first}", second = "${second}"`);
console.log(
  first === "second" && second === "first"
    ? "Variables swapped!"
    : "Something went wrong!"
);

// Solution 2 - using destructuring
[first, second] = [second, first];

console.log(`SWAPPING #2: first = "${first}", second = "${second}"`);
console.log(
  first === "first" && second === "second"
    ? "Variables swapped!"
    : "Something went wrong!"
);
