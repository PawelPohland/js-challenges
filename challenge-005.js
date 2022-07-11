"use strict";

// Create a function sumObjectValues() that will sum all values
// of the fields that contain numbers.

// Ensure that iteration is done only over own properties of the object.

const nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};

// this is test value for solution 1:
Object.prototype.testValue = 500;

// Solution 1 - iterating over object properties using for-in loop
const sumObjectValues1 = (obj) => {
  let total = 0;

  for (let property in obj) {
    // for-in loop will by default iterate over all object properties, that is
    // all own object's properties as well as properties from prototype
    // thus it is necessary to use hasOwnProperty method
    if (obj.hasOwnProperty(property) && typeof obj[property] === "number") {
      total += obj[property];
    }
  }

  return total;
};

// Solution 2 - using Object.values method
const sumObjectValues2 = (obj) => {
  let total = 0;

  for (let value of Object.values(obj)) {
    if (typeof value === "number") {
      total += value;
    }
  }

  return total;
};

// Solution 3 - using Object.values and reduce methods
const sumObjectValues3 = (obj) => {
  return Object.values(obj).reduce((total, value) =>
    typeof value === "number" ? total + value : total
  );
};

console.log(sumObjectValues1(nums));
console.log(sumObjectValues2(nums));
console.log(sumObjectValues3(nums));
