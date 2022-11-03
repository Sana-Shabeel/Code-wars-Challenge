/*

Maximum Length Difference

You need to return the max possible difference between the single string length from the first array and the single string length from the second array.

[Math.max(...a2LongestString), Math.min(...a1LongestString)]

  console.log(Math.max(...a2LongestString) - Math.min(...a1LongestString));


*/

function mxdiflg(a1, a2) {
  // your code

  if (a1.length === 0 && a2.length === 0) return -1;
  const a1LongestString = a1.map((c) => c.length);
  const a2LongestString = a2.map((c) => c.length);
  const a1Added = a2.map((c) => c.length).reduce((a, b) => a + b, 0);
  const a2Added = a2.map((c) => c.length).reduce((a, b) => a + b, 0);

  return a1Added > a2Added
    ? Math.max(...a1LongestString) - Math.min(...a2LongestString)
    : Math.max(...a2LongestString) - Math.min(...a1LongestString);
}
a1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(
  mxdiflg(
    ["voooddoodccchhhjjhhuuuuuuuu", "vuu"],
    ["voooddoodccchhhjjhhuuuuuuuu", "vuu"]
  )
);
