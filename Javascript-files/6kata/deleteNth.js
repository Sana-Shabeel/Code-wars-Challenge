function deleteNth(arr, n) {
  // remove duplicates
  const [...set] = new Set(arr);
  // count occurence
  const countOccurence = set.map((el) => {
    return arr.reduce((a, b) => (el === b ? a + 1 : a + 0), 0);
  });

  for (let i = 0; i < set.length; i++) {
    let Occur = countOccurence[i];
    const uniq = set[i];
    // console.log(uniq);

    while (Occur > n) {
      arr.splice(arr.lastIndexOf(uniq), 1);
      Occur--;
      console.log(Occur);
    }
  }

  return arr;
}
