console.log("AB9");
// find the square root of each number and then add them all together

function squareSum(numbers) {
  const squaredNums = numbers.map((n) => {
    console.log(n);
    return n ** 2;
  });
  console.log(squaredNums);
  return squaredNums.reduce((pv, cv) => {
    return pv + cv;
  }, 0);
}
console.log(squareSum([0, 3, 4, 5]));

//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str) {
  return str.slice(1, -1);
}
console.log("Remove Char ", removeChar("hello"));

function getEvenNumbers(numbersArray) {
  // filter out the odd numbers
  const even = numbersArray.filter((x) => {
    const n = x == 0 ? 0 + 2 : x; // if there is 0 then it will be 2 cause 2 is even and so is 0
    if (n % 2 == 0) {
      return n;
    } else if (x.length == 0) {
      return n;
    }
  });
  return even;
}
console.log(getEvenNumbers([0, 0, 0, 2, 4, 5]));

// counting number of types a value appears in an array
const arr = [1, 1, 1, 2, 3, 4, 2, 3, 4, 6, 7, 8, 3, 3, 3, 3];
function countOccurence(array, value) {
  return array.reduce((acc, val) => (val === value ? acc + 1 : acc + 0), 0);
}
console.log(countOccurence(arr, 3));

// reverseWords
function reverseWords(str) {
  // Go for it
  const splitStr = str.split(" ");
  const reversed = splitStr.map((word) => word.split("").reverse().join(""));
  return reversed.join(" ");
}
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

function filter_list(l) {
  // from a list of strings and integers return integer

  return l.filter((n) => typeof n === "number");
}
console.log(filter_list([1, "a", "b", 0, 15]));
// console.log(typeof 2);
