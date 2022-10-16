function smash(n) {
  const start = n[0];
  const end = n[n.length - 1];
  const length = end - start + 1;

  return Array.from({ length }, (el, i) => start + i);
}

console.log(smash([6, 9]));
console.log(smash([-1, 4]));
