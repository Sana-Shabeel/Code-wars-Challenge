// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  const newArr = [...numbers];

  const minNum = Math.min(...numbers);
  const index = newArr.findIndex((el) => el == minNum);
  const spliced = newArr.splice(index, 1);

  return newArr;
}
console.log(removeSmallest([5, 3, 1, 2, 1, 4]));

function solution(str) {
  return [...str].reverse().join("");
}
console.log(solution("anas"));
