/*

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


Example 



16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


*/

const digitalRoot = (n) => {
  // your code here

  // if state to check if n's length is greater than 1
  // A state variable for the while loop
  // split n into an array of numbers

  if (n.length === 1) return n;
  let state = true;

  while (state) {
    console.log(n);

    const ns = n.toString().split("");

    const summed = ns.reduce((a, b) => parseInt(a) + parseInt(b));

    if (summed.length === 1) {
      state = false;
      return parseInt(summed);
    } else {
      state = true;
      n = summed;
    }
  }
};

console.log(digitalRoot(20));
