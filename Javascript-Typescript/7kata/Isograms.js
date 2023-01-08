console.log("Isograms challenge from codewars");
console.log("----------------------------------------------------------------");

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// Convert string to lowercase
// try using new Set to get the unique elements
// then compare the returned value to the original string

function isIsogram(str) {
  const lowerStr = str.toLowerCase();
  const unique = new Set(lowerStr);
  return [...unique].join("") === lowerStr ? true : false;
}

console.log(isIsogram("ans"));
