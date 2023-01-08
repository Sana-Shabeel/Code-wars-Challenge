console.log("AB9");

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand1(dna) {
  //your code here
  // A & T
  // C & G
  // if you reciver a str with AAGG replace the AA with TT and GG with CC
  const x = dna.split("").map((d) => {
    console.log(d);
    if (d == "A") {
      return (d = "T");
    } else if (d == "G") {
      return (d = "C");
    } else if (d == "C") {
      return (d = "G");
    } else if (d == "T") {
      return (d = "A");
    }
  });

  return x.join("");
}
console.log(DNAStrand1("GTAT"));

// THE ABOVE IS HOW I SOLVED THE KATA WITHOUT HELP
// THE BELOW CODE IS FROM  ONE OF THE SOLUTION FROM CODE WARS

const pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand2(dna) {
  return dna
    .split("")
    .map((v) => pairs[v])
    .join("");
}
console.log(DNAStrand2("GTAT"));

console.log(pairs["G"]);
