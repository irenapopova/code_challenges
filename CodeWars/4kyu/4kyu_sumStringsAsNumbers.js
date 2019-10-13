// Given the string representations of two integers, return the string
// representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3' A string representation of an integer will
// contain no characters besides the ten numerals "0" to "9".


function sumStrings(str1, str2) {
  var temp = "",
    str3 = "",
    next = 0;
  str1 = str1.replace(/^0+/, "");
  str2 = str2.replace(/^0+/, "");
  if (str1.length > str2.length) str2 = [str1, (str1 = str2)][0];
  while (str1.length < str2.length) {
    str1 = "0" + str1;
  }
  for (var i = str1.length - 1; i >= 0; i--) {
    temp =
      parseInt(str1.substring(i, i + 1)) +
      parseInt(str2.substring(i, i + 1)) +
      next;
    str3 = (temp % 10).toString() + str3;
    next = temp <= 9 ? 0 : 1;
  }
  if (next === 1) str3 = next + str3;
  return str3;
}
