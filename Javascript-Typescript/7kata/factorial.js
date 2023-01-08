// finding FACTORAL of a number
// factoral is when you * the given with every number that comes before it
// The factorial function (symbol: !) says to multiply all whole numbers from our chosen number down to 1.

function factoralize(num) {
  if (num < 0) {
    return "ERROR: factorial for negative number doesnt exist.";
  } else if (num === 0) {
    return 1;
  } else {
    return num * factoralize(num - 1);
  }
}
console.log("factoral number is " + factoralize(10));
