const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let mul = 1;
  for(let i = 0; i < array.length; i++) {
    mul *= array[i];
  }
  return mul;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let mul = 1;
  for(let i = 1; i <= a; i++) {
    mul *= i;
  }
  return mul;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
