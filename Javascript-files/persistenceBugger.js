// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit
// exmp 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)

function persistence(num) {
  let counter = 0;
  num = num.toString();
  console.log(num.length);
  while (num.length > 1) {
    const x = num
      .split("")
      .reduce((a, b) => a * b)
      .toString();
    console.log(x);
    num = x;
    // num = eval();
    counter++;
  }
  return counter;
}
console.log(persistence(999));
