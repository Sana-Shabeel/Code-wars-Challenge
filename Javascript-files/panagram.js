console.log("panagram challenge from codewars");

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  //...
  const abcArr = [..."abcdefghijklmnopqrstuvwxyz"];
  const lowerCase = string.toLowerCase();
  const modifiedStr = [...new Set(lowerCase)].filter(
    (space) => space !== " " && space !== "." && space !== ","
  );
  console.log(modifiedStr);
  const panagram = modifiedStr.reduce(
    (acc, curr) => (abcArr.includes(curr) ? acc + 1 : acc + 0),
    0
  );
  if (panagram == 26) {
    return true;
  } else {
    return false;
  }
}
console.log(isPangram("'ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ' "));
