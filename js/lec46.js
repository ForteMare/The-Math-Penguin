function multiply(x, y) {
  return x * y;
}

multiply.version = "v.1.0.0";

// Every function is a type of an object, and it can behave as such

// Just calling function with parameters
console.log(multiply(3, 2));

// Function property
console.log(multiply);

// Function property with toString
console.log(multiply.toString);

// Function factory
function makeMultiplier(multiply) {}
