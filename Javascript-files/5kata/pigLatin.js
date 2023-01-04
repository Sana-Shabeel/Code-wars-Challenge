/*
Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


*/

function pigIt(str) {
  // split the string into an array of words
  const splitStr = str.split(" ");

  const punctuation = ["!", ".", "?"];
  let newStr = "";

  for (let i = 0; i < splitStr.length; i++) {
    const word = splitStr[i];
    const newWord = word.slice(1) + word[0] + "ay ";

    if (punctuation.includes(word)) {
      newStr += word;
      continue;
    }
    newStr += newWord;
  }

  return newStr.trimEnd();
}
console.log(pigIt("Hello world !"));
console.log(pigIt("Pig latin is cool"));
