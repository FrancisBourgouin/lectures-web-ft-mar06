// Why we use functions

const sumOfTwoAndFive = function () {
  return 2 + 5;
};

// sumOfTwoAndFive bad:
// Ideally no ops in the return
// Only has one purpose, is not flexible

const sumOfTwoNumbers = function (a, b) {
  const result = a + b;

  return result;
};

const sumOfNumbers = function (listOfNumbers) {
  let sumBuffer = 0;
  for (const number of listOfNumbers) {
    sumBuffer += number;
  }
  return sumBuffer;
};

const negativeSumOfNumbers = function (listOfNumbers) {
  let sumBuffer = 0;
  for (const number of listOfNumbers) {
    sumBuffer -= number;
  }
  return sumBuffer;
};

// const result = sumOfNumbers([1, 3, 23, 5, 6, 7, 46, 26, 2]);
// console.log(result);

const opsOfNumbers = function (listOfNumbers, isAddition) {
  let sumBuffer = 0;
  for (const number of listOfNumbers) {
    if (isAddition) {
      sumBuffer += number;
    } else {
      sumBuffer -= number;
    }
  }
  return sumBuffer;
};

// normalSum(10, 4);

const betterSumFunctionMaybe = function (listOfNumbers, action) {
  let sumBuffer = 0;
  for (const number of listOfNumbers) {
    sumBuffer = action(sumBuffer, number);
  }
  return sumBuffer;
};

const numbers = [1, 42, 245, 5, 56, 6, 76, 1];
const weirdSumMultiplication = (sum, number) => sum + number * 3;
const normalSum = (sum, number) => sum + number;

const result = betterSumFunctionMaybe(numbers, normalSum);
const result1 = betterSumFunctionMaybe(numbers, (sum, number) => sum + number);
// betterSumFunctionMaybe is a higher order function
// HOF = A little bit like president of a company
// normalSum is THE callback of betterSumFunctionMaybe
const result2 = betterSumFunctionMaybe(numbers, weirdSumMultiplication);

console.log(result);
console.log(result1);
console.log(result2);

// IIFE Immediatly Invokable Function Expression

(() => {
  console.log("Hello!");
})();

// Array methods ? .slice(), .filter(), .length, .pop

const someArray = ["Hello", "Hola", "Bonjour"];

// for (const greeting of someArray) {
//   console.log(greeting);
// }

const logToConsole = (value) => console.log(value);
const overlyPreciseLog = (value, index, array) =>
  console.log(`${value} at position ${index} of array ${array}`);

someArray.forEach(overlyPreciseLog);

const homemadeForEach = function (list, actionCallback) {
  for (const index in list) {
    const value = list[index];

    actionCallback(value, index, list);
  }
};

homemadeForEach(someArray, () => console.log("POTAYTO"));

let sumBuffer = 0;
homemadeForEach([1, 244, 2, 4, 4, 6], (value) => (sumBuffer += value));

const homemadeMap = function (list, actionCallback) {
  const newListBuffer = [];
  for (const index in list) {
    const value = list[index];
    const result = actionCallback(value, index, list);
    newListBuffer.push(result);
  }
  return newListBuffer;
};

const someArrayAgain = [1, 2, 3, 4, 5];

const newArray = homemadeMap(someArrayAgain, (value, index) => value * index);

console.log(newArray);

const filtered = someArrayAgain.filter((value) => value > 4);
console.log(filtered, someArrayAgain);

const homemadeFilter = function (list, filterCallback) {
  const filterBuffer = [];
  for (const index in list) {
    const value = list[index];

    const isHappy = filterCallback(value, index, list);

    if (isHappy) {
      filterBuffer.push(value);
    }
  }
  return filterBuffer;
};
