// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url) {
  // My solution
  if (!url.includes("#")) return url;
  const arr = url.split("");
  return arr.slice(0, arr.indexOf("#")).join("");

  // solution on codewars  return url.split('#')[0];
}

console.log(removeUrlAnchor("www.codewars.com/katas/"));
console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about"));
