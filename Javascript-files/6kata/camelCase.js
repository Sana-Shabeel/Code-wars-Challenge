console.log("camel Case challenge from codewars");

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// m
function toCamelCase(str) {
  if (str == "") return "";
  const reg = str.includes("-") ? "-" : "_";
  const camelCase = str
    .split(reg)
    .slice(1)
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join("");
  return str.split(reg).slice(0, 1).join("") + camelCase;
}
console.log(toCamelCase("A-B-C"));
console.log(toCamelCase("The-Stealth-Warrior"));

//////////////////////
//NICE AND SIMPLE WAY OF DOING

//from code-wars
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
console.log(toCamelCase("The-Stealth-Warrior"));

const mystr = "Hello Anas";
console.log(mystr.charAt(0));
