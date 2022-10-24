console.log("ab9");
/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)

*/

function duplicateCount(text) {
  // turn text into lower case
  // get the duplicates from text and store it a variable
  // then get the unique values of the duplicates using Set()
  // then return the length of the unique duplicates
  const [...lowerText] = text.toLowerCase();
  const dups = lowerText.filter((c, idx) => lowerText.indexOf(c) != idx);
  const [...uniqueDuplicates] = new Set(dups);
  console.log(uniqueDuplicates);
  return uniqueDuplicates.length;
}
console.log(duplicateCount("Indivisibilities"));

console.log();
