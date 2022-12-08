function wave(str) {
  // create an array with (str.length) empty slots
  // fill the slots with str
  const arrStr = Array(str.length).fill(str);

  // replace the letters with capitilized one
  return arrStr.map((x, i) => x.replace(x[i], x[i].toUpperCase()));
}

console.log(wave("anas"));

// x[i].toUpperCase() + x.slice(0, str.length)
