console.log("AB9");

// Count the number of divisors of a positive integer n
// Divide n by every number form n down until 0. return the numbers that dont have remainders
// todo;
// n  % by the (n- 1) and return the n that doesnt give remainder int
function getDivisorsCnt(n) {
  const nArr = [];
  for (let i = 0; i < n; i++) {
    nArr.push(n - i);
  }
  console.log(nArr);
  const checkForRemainder = nArr.map((currN) =>
    n % currN === 0 ? n : "remainder"
  );
  const filterInts = checkForRemainder.filter((n) => typeof n === "number");
  return filterInts.length;
}
console.log(getDivisorsCnt(54));
