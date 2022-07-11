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
