const add = function(a,b) {
	let total = (a+b)
  return total
};

const subtract = function(a,b) {
	let total = (a-b)
  return total
};

const sum = function(arr) {
  let sum = 0;

for (const value of arr) {
  sum += value;
}
return sum
};

const multiply = function(arr) {
  var total = 1;
  for (var i = 0; i < arr.length; i++) {
      total = total * arr[i];
  }
  return total;

};

const power = function(a,b) {
	let total = Math.pow(a,b)
  return total
};

const factorial = function(x) {
	let total = 1
  for (i=1; i<= x; i++)
  {
   total = total *i 
  }
  return total 
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
