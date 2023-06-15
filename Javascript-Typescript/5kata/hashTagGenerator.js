/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false



*/

function generateHashtag(str) {
  console.log(str);
  if (str.trim() === "") return false;
  const arr = str.split(" ");
  const filterEmptySpace = arr.filter((space) => space !== "");
  const capitalized = filterEmptySpace.map(
    (c) => c.at(0).toUpperCase() + c.slice(1)
  );

  return "#" + capitalized.join("");
}

console.log(generateHashtag("hello world"));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
