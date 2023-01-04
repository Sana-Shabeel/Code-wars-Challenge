/*
Simple Pig Latin



*/

function pigIt(str) {
  //remove the first letter of EACH word and add 'ay' at the end
  // Leave punctuation marks untouched.

  // split the string into an array of words
  const splitStr = str.split(" ");

  const punctuation = ["!", ".", "?"];
  let newStr = "";

  for (let i = 0; i < splitStr.length; i++) {
    const word = splitStr[i];
    const newWord = word.slice(1) + word[0] + "ay ";

    if (punctuation.includes(word)) {
      //
      console.log(word[0]);
      newStr += word;
      continue;
    }
    newStr += newWord;
  }

  return newStr.trimEnd();
}
console.log(pigIt("Hello world !"));
