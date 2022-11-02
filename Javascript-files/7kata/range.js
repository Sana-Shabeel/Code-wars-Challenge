function smash(n) {
  const start = n[0];
  const end = n[n.length - 1];
  const length = end - start + 1;

  // _ is used as a variable name whenyou know you are not going to use the variable
  // [...Array(length).keys()] creates an array of <length> characters
  // the array returned from [...Array(length).keys()] will be filled with nums from 0 to length - 1
  // map through the array returned
  //  add the index to the first element of the original array
  // EX: start + 0, start + 1, start + 2
  const alternative = [...Array(length).keys()].map((_, i) => start + i);
  console.log("alternative method", alternative);

  return Array.from({ length }, (el, i) => start + i);
}

console.log(smash([6, 9]));
console.log(smash([-1, 4]));
