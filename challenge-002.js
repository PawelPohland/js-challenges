// Create function countVovels that will count
// all the vovels in a given input string.

// Solution 1 - use of for-of loop to iterate over string characters
const countVovels1 = (inputString) => {
  const vovels = ["a", "e", "i", "o", "u"];
  let numOfVovels = 0;

  for (let char of inputString.toLowerCase()) {
    if (vovels.includes(char)) {
      numOfVovels++;
    }
  }

  return numOfVovels;
};

// Solution 2 - use of for loop and charAt method
const countVovels2 = (inputString) => {
  const vovels = ["a", "e", "i", "o", "u"];
  let numOfVovels = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (vovels.includes(inputString.charAt(i).toLowerCase())) {
      numOfVovels++;
    }
  }

  return numOfVovels;
};

// Solution 3 - use of reduce method
const countVovels3 = (inputString) => {
  const vovels = ["a", "e", "i", "o", "u"];

  return inputString
    .toLowerCase()
    .split("")
    .reduce((numOfVovels, char) => {
      return vovels.includes(char) ? ++numOfVovels : numOfVovels;
    }, 0);
};

// Solution 4 - use of filter method and length property
const countVovels4 = (inputString) => {
  const vovels = ["a", "e", "i", "o", "u"];

  return inputString
    .toLowerCase()
    .split("")
    .filter((char) => vovels.includes(char)).length;
};

/* ************************************************************* */
const testData = {
  numOfFunctions: 4,
  testCases: [
    { data: "HEllo wOrlD", expectedResult: 3 },
    { data: "This is the counting vovels function", expectedResult: 11 },
    { data: "lorem ipsum set dolor", expectedResult: 7 },
    { data: "(A){e}<i>$o/u", expectedResult: 5 },
  ],
};

for (let i = 0; i < testData.numOfFunctions; i++) {
  const func = `countVovels${i + 1}`;

  testData.testCases.forEach((testCase) => {
    let result = eval(func)(testCase.data);
    console.log(
      `${func}('${testCase.data}') = ${result} ${
        result === testCase.expectedResult ? "SUCCESS" : "FAILURE"
      }`
    );
  });
  console.log("-".repeat(50));
}
