"use strict";

// Create a function sumPlusMinus() that takes array of numbers
// and sums separately positive and negative numbers.

// It should return an object like this:
/*
{
    plus: 74, // sum of all positive numbers
    minus: -54, // sum of all negative numbers
}
*/

// Solution 1 - using for-of loop and returning object
const sumPlusMinus1 = (numbers) => {
  let plus = 0;
  let minus = 0;

  for (let num of numbers) {
    if (num > 0) {
      plus += num;
    } else {
      minus += num;
    }
  }

  return { plus, minus };
};

// Solution 2 - using reduce method
const sumPlusMinus2 = (numbers) => {
  return numbers.reduce(
    (sumObj, num) => {
      if (num > 0) {
        sumObj.plus += num;
      } else {
        sumObj.minus += num;
      }

      return sumObj;
    },
    { plus: 0, minus: 0 }
  );
};

/* ************************************************** */

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

console.log(sumPlusMinus1(nums));
console.log(sumPlusMinus2(nums));
