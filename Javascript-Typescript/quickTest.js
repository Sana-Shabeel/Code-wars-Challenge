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

// console.log("code" + " ".repeat(140) + "wars");
