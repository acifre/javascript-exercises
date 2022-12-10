const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  if (num2 > num1) {
    return num2 - num1;
  } else {
    return num1 - num2;
  }
	
};

const sum = function(array) {

  sumArray = array.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);

  return sumArray;
	
};

const multiply = function(array) {

  multiplyArray = array.reduce((multiply, number) => {
    multiply *= number;
    return multiply;
  }, 1);

  return multiplyArray;

};

const power = function(number, power) {
  return number**power;
	
};

const factorial = function(number) {
  fact = 1;
  for (let i = number; i > 0; i--){
    fact *= i;
  }

  return fact;
	
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
