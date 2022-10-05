console.log("oddInt challenge from codewars");

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

/*

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function findOdd(A) {
  const count = {};
  A.forEach((el) => {
    count[el] = (count[el] || 0) + 1;
  });
  const value = Object.values(count);
  const oddNumber = value.filter((od) => od % 2 === 1).join("");
  const num = Number(oddNumber);
  console.log(getKeyByValue(count, num));
  const x = getKeyByValue(count, num);

  return Number(x);
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));



  // const oddNumber = odd.filter((od) => od % 2 === 1).join("");
  // console.log(count);
  // const str = "3";
  // return count;


  for (const [key, value] in Object.entries(count)) {
    console.log(`${key}: ${value}`);
  }

const counts = {};
const sampleArray = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
sampleArray.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);
console.log(Object.values(counts));



A.filter((x) => {
    return unique.map((uni) => x === uni);
  });

A.sort()

    const dup = arr.indexOf(item) != index;
      return dup.length;
*/
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
