console.log("AB9");
console.log("QuickTest.js");

/////==============
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  classPoints.push(yourPoints);
  const avg = classPoints.reduce((a, b) => a + b, 0);
  console.log(classPoints);
  console.log(avg / classPoints.length);
  return avg / classPoints.length >= yourPoints ? false : true;
}
console.log(betterThanAverage([2, 3], 5));

////==============
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
function basicOp(operation, value1, value2) {
  // Code
  // reuslt == ('+', 4, 7) --> 11

  return eval(value1 + operation + value2);
}
console.log(basicOp("+", 4, 7));

////////===========

function find_average(array) {
  //Write a function which calculates the average of the numbers in a given list.
  // Note: Empty arrays should return 0.
  // your code here
  if (array.length <= 0) {
    return 0;
  } else {
    return array.reduce((a, b) => a + b, 0) / array.length;
  }
}
console.log(find_average([1, 2, 3]));

/////////////==============
function greet() {
  const greet = "Hello World";
  return greet
    .split("")
    .map((x, idx) => x.toUpperCase() + x.repeat(idx))
    .join("-");
}
console.log(greet());
