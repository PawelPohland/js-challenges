# JavaScript Challenges

Various JavaScript challenges with solutions.

## Technologies used

- JavaScript

## List of challenges

1. [Function to sum all its arguments](#challenge-001)

### Challenge 1 {#challenge-001}

Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

:link: [Solution](challenge-001.js)

```
// Solution 1 - use of arguments object and for loop:
function sum1() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

// Splution 2 - use of arguments object and for-of loop
function sum2() {
  let total = 0;
  for (let num of arguments) {
    total += num;
  }

  return total;
}

// Solution 3 - use of rest parameters and forEach method
function sum3(...args) {
  let total = 0;
  args.forEach((num) => (total += num));

  return total;
}

// Solution 4 - use of rest parameters and reduce method
function sum4(...args) {
  return args.reduce((total, num) => total + num, 0);
}
```
