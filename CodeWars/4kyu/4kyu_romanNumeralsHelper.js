// Create a RomanNumerals helper that can convert a roman numeral to and from an
// integer value. It should follow the API demonstrated in the examples below.
// Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately
// starting with the left most digit and skipping any digit with a value of
// zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in
// MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman
// symbol in descending order: MDCLXVI.

// Examples:

// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000 Help:

// Symbol    Value I          1 V          5 X          10 L          50 C
// 100 D          500 M          1,000

var key = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

RomanNumerals = {
  toRoman: function(num) {
    var roman = "";
    for (var entry in key) {
      while (num >= key[entry]) {
        roman += entry;
        num -= key[entry];
      }
    }
    return roman;
  },
  fromRoman: function(roman) {
    var arabic = 0;
    while (roman.length > 0) {
      for (var entry in key) {
        if (roman.substring(0, 2) == entry) {
          arabic += key[entry];
          roman = roman.substr(2);
        } else if (roman.substring(0, 1) == entry) {
          arabic += key[entry];
          roman = roman.substr(1);
        }
      }
    }
    return arabic;
  }
};
