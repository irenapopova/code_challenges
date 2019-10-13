// You have to create a function that takes a positive integer number and
// returns the next bigger number formed by the same digits:

// nextBigger(12)==21 nextBigger(513)==531 nextBigger(2017)==2071 If no bigger
// number can be composed using those digits, return -1:

// nextBigger(9)==-1 nextBigger(111)==-1 nextBigger(531)==-1

function nextBigger(n) {
  var digitSort = n =>
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("");
  if (n.toString() === digitSort(n)) return -1;
  for (i = n + 1; i <= parseInt(digitSort(n)); i++) {
    if (digitSort(i) === digitSort(n)) return i;
  }
}
