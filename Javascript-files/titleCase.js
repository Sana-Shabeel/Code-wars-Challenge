console.log("-----title case------");

function titleCase(title, minorWords) {
  if (title === "") {
    return "";
  }

  const minorWordsArray = minorWords.toLowerCase().split(" ");
  const minor = title
    .slice(1)
    .split(" ")
    .map((word) => {
      const smallword = word.toLowerCase();
      console.log(smallword);

      return minorWordsArray.includes(smallword) ? smallword : null;
    })
    .filter((notNull) => notNull !== null);

  const capitalized = title
    .split(" ")
    .map((word, i) => {
      const smallword = word.toLowerCase();
      console.log(smallword);

      if (smallword !== minor[minor.indexOf(smallword)]) {
        return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
      }

      return minor[minor.indexOf(smallword)];
    })
    .join(" ");

  return capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
}
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); // should return: 'A Clash of Kings'
