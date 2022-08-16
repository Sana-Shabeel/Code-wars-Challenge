/*
DESCRIPTION:
Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

Rules

Each character has its own power:
  A = 1, B = 2, ... Y = 25, Z = 26
  a = 0.5, b = 1, ... y = 12.5, z = 13
  
  
  
- Only alphabetical characters can and will participate in a battle.
- Only two groups to a fight.
- Group whose total power (a + B + c + ...) is bigger wins.
- If the powers are equal, it's a tie.

Examples
"One", "Two"  -->  "Two"
"ONE", "NEO"  -->  "Tie!"

*/

// My solution

function battle(x, y) {
  // Lets the battle begin!
  const alpha = [...Array(26).keys()].map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  console.log(alphabet);

  const lowerCase = alphabet.map((x) => x.toLowerCase());
  const findResult = (arr) =>
    arr
      .split("")
      .map((e) =>
        alphabet.indexOf(e) === -1
          ? lowerCase.indexOf(e) / 2 + 0.5
          : alphabet.indexOf(e) + 1
      )
      .reduce((a, b) => a + b);
  return findResult(x);
}

console.log(battle("ZzAa", "Neo"));

// solution from codewars

function battle(x, y) {
  const abc = (z) => z.codePointAt();
  const val = (x) =>
    [...x]
      .map((el) => (abc(el) < 91 ? abc(el) - 64 : (abc(el) - 96) / 2))
      .reduce((a, b) => a + b, 0);
  const [first, second] = [val(x), val(y)]; // es6 destructuring
  return first > second ? x : first < second ? y : "Tie!"; // nice way of doing if statements
}
