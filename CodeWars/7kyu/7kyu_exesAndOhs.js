// Check to see if a string has the same amount of 'x's and 'o's. The method
// must return a boolean and be case insensitive. The string can contain any
// char.

// Examples input/output:

// XO("ooxx") => true XO("xooxx") => false XO("ooxXm") => true XO("zpzpzpp") =>
// true // when no 'x' and 'o' is present should return true XO("zzoo") => false

function XO(str) {
  var xCount = 0;
  var oCount = 0;
  var sameCount = false;

  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      xCount += 1;
    } else if (str[i].toLowerCase() === "o") {
      oCount += 1;
    }
  }
  if (xCount === oCount) {
    sameCount = true;
  } else {
    sameCount = false;
  }
  return sameCount;
}
