console.log("ab9");
const number = function (busStops) {
  // Good Luck!
  // the first element in the array is the amoount of people who got in.
  // the second is the people who got out
  // so its the first - the second + the third - the fourth...
  return busStops.map((x) => x[0] - x[1]).reduce((a, b) => a + b, 0);
};
console.log(number([[0, 0]]));

///

// the max and min element
const min = function (list) {
  return Math.min(...list);
};
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
const max = function (list) {
  return Math.max(...list);
};
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

///
// creating numbers from 0 to whatever
const nums = [...Array(100).keys()];
console.log(nums);
///

////
function accum(s) {
  // your code
  // result == "A-Bb-Ccc-Dddd"
  // first word after every - has to capitilized
  const small = s.toLowerCase();
  const result = small
    .split("")
    .map((l, idx) => l.toUpperCase() + l.repeat(idx) + "-");

  return result.join("").slice(0, -1);
}
console.log(accum("RqaEzty"));

/////

////
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this: Sam Harris => S.H
function sumArray(array) {
  if (array == null || array.length <= 2) {
    return 0;
  }
  const sorted = array.sort((a, b) => a - b);
  return sorted.slice(1, -1).reduce((a, b) => a + b, 0);
}
console.log(sumArray([6, 2, 1, 8, 10]));

/////

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.split("")
    .map((str) =>
      str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
    )
    .join("");
};

console.log("HeLLo WoRLD".toAlternatingCase());

//////

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// If EVEN return the 2 middle characters
// If ODD return THE middle characters

function getMiddle(s) {
  //Code goes here!
  const isOdd = s.length % 2 === 0 ? "even" : "odd";
  const middle = s.length / 2;
  return isOdd === "even" ? s[middle - 1] + s[middle] : s[Math.floor(middle)];
}

console.log(getMiddle("test"));

////////////////////////////////

// Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(nums) {
  // My solution
  let firstMinRemoved = nums.filter((n) => n !== Math.min(...nums));

  Math.min(...firstMinRemoved) + Math.min(...nums);

  // from kata solutions
  nums = nums.sort(function (a, b) {
    return a - b;
  });

  return nums[0] + nums[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

////////////////////////////////

var isPalindrome = function (x) {
  return parseInt(x.toString().split("").reverse().join("")) === x;
};
console.log(isPalindrome(-121));

////////////////////////////////
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

function arithmetic(a, b, operator) {
  //your code here!
  const optr = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };

  return optr[operator];
}
console.log(arithmetic(1, 2, "add"));

////////////////////////////////

// RANGE IN JAVASCRIPT

//Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = (n) => {
  return [...Array(n + 1).keys()].reverse().slice(0, -1);
};

console.log(reverseSeq(5));

////////////////////////////////

/* 

NUMBERED ALPHABET


example 
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


*/
var numberedAbc = function (array) {
  //your awesome code here
  if (array.length === 0) return [];

  return array.map((c, i) => `${i + 1}: ${c}`);
};

console.log(numberedAbc(["a", "b", "c"]));

/////$/////////////////////////////////////////
/*
Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer



*/
function squareDigits(num) {
  const nums = [...num.toString()]
    .map((n) => (n === "1" ? n * 1 : n * n))
    .join("");
  return parseInt(nums);
}

console.log(squareDigits(3212));
