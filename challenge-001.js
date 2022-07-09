// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.

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

/* *************************************************** */
const testData = {
  functions: ["sum1", "sum2", "sum3", "sum4"],
  testCases: [
    { data: [1, 2, 3, 4, 5], expectedResult: 15 },
    { data: [5, 10, 15, 20], expectedResult: 50 },
    { data: [-100, 50, 0], expectedResult: -50 },
    { data: [0.5, 5.5, -3, 450, 35.67], expectedResult: 488.67 },
  ],
};

testData.functions.forEach((func) => {
  testData.testCases.forEach((testCase) => {
    let result = eval(func)(...testCase.data);
    console.log(
      `${func}(${testCase.data.join(",")}) = ${result} ${
        result === testCase.expectedResult ? "SUCCESS" : "FAILURE"
      }`
    );
  });
  console.log("-".repeat(50));
});
