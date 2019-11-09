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
function makeMultiplier(multiplier) {
  var myFunc = function(x) {
    return multiplier * x;
  };

  return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperationOn(x, operation) {
  return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);

result = doOperationOn(100, doubleAll);
console.log(result); 
