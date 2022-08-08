// Complete the solution so that the function will break up camel casing, using a space between words.

// "camelCasing"  =>  "camel Casing"

function solution(str) {
  if (str === "") return "";
  return str
    .split("")
    .map((s) => (s === s.toUpperCase() ? " " + s : s))
    .join("");
}

console.log(solution("camelCasing"));
