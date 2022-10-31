/*
KATA 8 - code wars


*/
function removeEveryOther(arr) {
  //your code here
  return arr.filter((s) => s !== "Remove");
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
