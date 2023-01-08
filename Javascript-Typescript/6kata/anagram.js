console.log("anagram challenge from codewars");
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

function anagrams(word, words) {
  const step1 = words.filter((x) => x.length == word.length);
  const splitWord = word.split("");
  console.log(step1);
  const step2 = step1.map((w) => w.split("").reduce((a, b) => {}));
  //   console.log(step2);
  //   const step3 = step2.filter((x) => !x.includes("0"));
  //   return [...new Set(step3)];
  return step2;
}
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));

function add(a, b) {
  const num1 = Number(a);
  const num2 = Number(b);
  return (BigInt(num1) + BigInt(num2)).toString(); // Fix me!
}
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
