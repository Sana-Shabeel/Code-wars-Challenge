// KATA 8 - code wars

/*
REMOVING ELEMENTS 

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr) {
  return arr.filter((c, i) => i % 2 === 0); // fiilters out the even elements
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

////////////////////////////////////////////////////////////////////////////
