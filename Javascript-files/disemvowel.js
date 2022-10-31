function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return [...str].filter((v) => !vowels.includes(v.toLowerCase())).join("");
}
console.log(disemvowel("This website is for losers LOL!"));
