/*
HIGHEST AND LOWEST 


In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.



-> one possible way of finding the highest number

 const numArray = numbers.split(" ").map(Number);
  const lowestNumber = Number.NEGATIVE_INFINITY;

  let smallestNum = [];

  for (const num of numArray) {
    if (num > lowestNumber) {
      smallestNum = num;
    }
  }


*/

function highAndLow(numbers) {
  // turn the num string into an array
  const numArray = numbers.split(" ").map(Number);

  const lowestNumber = Math.min(...numArray);
  const highestNumber = Math.max(...numArray);

  return `${highestNumber} ${lowestNumber}`;
}

console.log(highAndLow("1 2 3 4 5"));
