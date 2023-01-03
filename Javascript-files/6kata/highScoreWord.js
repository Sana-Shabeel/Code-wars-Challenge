/*

DESCRIPTION:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function high(x) {
  const abc = [
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const arrayX = x.split(" ");
  const total = [];

  for (let i = 0; i < arrayX.length; i++) {
    const el = arrayX[i];
    const getTotal = el.split("").map((el) => abc.indexOf(el));
    total.push(getTotal);
  }

  const highestSum = total.map((el) => el.reduce((a, b) => a + b, 0));

  const maxTotal = Math.max(...highestSum);
  const getIndexOfMax = highestSum.indexOf(maxTotal);
  console.log(getIndexOfMax);
  return arrayX[getIndexOfMax];
}
