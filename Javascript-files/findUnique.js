console.log("---Find the unique number---");

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  // Use set object to find the unique elements in an array. This will return 2 elements the
  const [...uniqs] = new Set(arr);

  // using reduce count how many time each number appears in the array
  const count1 = arr.reduce(
    (acc, curr) => (uniqs[0] === curr ? acc + 1 : acc + 0),
    0
  );
  const count2 = arr.reduce(
    (acc, curr) => (uniqs[1] === curr ? acc + 1 : acc + 0),
    0
  );

  // return the number the appears the least times
  return count1 < count2 ? uniqs[0] : uniqs[1];
}
