// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for
// the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) // returns 'Bart,
// Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ]) // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ]) // returns 'Bart'

// list([]) // returns '' Note: all the hashes are pre-validated and will only
// contain A-Z, a-z, '-' and '.'.

function list(names) {
  let namesArr = [];
  if (names.length > 1) {
    for (i = 0; i < names.length; i++) {
      if (i < names.length - 2 && names.length !== 0) {
        names[i].name = names[i].name + ", ";
      }
      namesArr.push(names[i].name);
    }
    namesArr.splice(-1, 0, " & ");
  } else if (names.length < 2 && names.length > 0) {
    namesArr.push(names[0].name);
  } else {
    namesArr.push("");
  }
  return namesArr.join("");
}
