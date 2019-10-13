// #Pascal's Triangle

// Pascal's Triangle

// Wikipedia article on Pascal's Triangle:
// http://en.wikipedia.org/wiki/Pascal's_triangle

// Write a function that, given a depth (n), returns a single-dimensional array
// representing Pascal's Triangle to the n-th level.

// For example:

// pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]

function pascalLine(n) {
  if (n === 1) return [1];
  var inArray = pascalLine(n - 1);
  var outArray = [];
  for (var i = 0; i < inArray.length - 1; i++) {
    outArray.push(inArray[i] + inArray[i + 1]);
  }
  outArray.push(1);
  outArray.unshift(1);
  return outArray;
}

function pascalsTriangle(n) {
  var finalArray = [];
  for (var j = 1; j <= n; j++) {
    finalArray = finalArray.concat(pascalLine(j));
  }
  return finalArray;
}
