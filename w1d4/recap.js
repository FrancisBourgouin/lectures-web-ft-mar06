// Functions needs arguments to be reusable

// Receive anything as a parameter (Arrays, Objects, String,...)

const someFunction = function (amount, age, duration) {
  // ...
};

// Receive function DEFINITIONS as a parameter

const someHOFFunction = function (callbackAction) {
  // ...
  callbackAction();
  // ...
};

// When we call a function, we can give variables or values

const sum = function (num1, num2) {
  // ...
};

sum(1, 5); // 1 and 5 are *anonymous*

const num1 = 5;
const num2 = 10;

sum(num1, num2);

// Callback functions!

// Can be used to output content (forEach)
// Can be used to transform content (map, forEach)
// Can be used to check if content pass a condition (filter)
