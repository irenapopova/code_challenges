// There is a secret string which is unknown to you. Given a collection of
// random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each
// letter occurs somewhere before the next in the given string. "whi" is a
// triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in
// the secret string.

// You can assume nothing about the triplets given to you other than that they
// are valid triplets and that they contain sufficient information to deduce the
// original string. In particular, this means that the secret string will never
// contain letters that do not occur in one of the triplets given to you.

function recoverSecret(triplets) {
  var first = "",
    secret = "";
  for (var i = 0; i < triplets.length; i++) {
    first = triplets[i][0];
    for (var j = 0; j < triplets.length; j++) {
      if (triplets[j][1] == first || triplets[j][2] == first) break;
      if (j === triplets.length - 1) {
        secret += first;
        for (var k = 0; k < triplets.length; k++) {
          if (triplets[k][0] == first) triplets[k].splice(0, 1);
        }
        i = 0;
      }
    }
  }
  return secret;
}
