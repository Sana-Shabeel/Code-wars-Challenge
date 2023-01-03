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
