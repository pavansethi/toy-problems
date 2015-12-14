// Character Frequency
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

// Examples
// Input          Output
// string:
// "aaabbc"       [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// string:
// "mississippi"  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// string:
// ""             [ ]

function characterFrequency (string) {
  var obj = {};
  var output = [];
  for (var i = 0; i < string.length; i++) {
      if (!obj[string[i]]) {
        obj[string[i]] = 1;
      } else {
        obj[string[i]] += 1; 
      }
  }

  for (var i in obj) {
    var tuple = [i, obj[i]];
    output.push(tuple);
  }

  output.sort(function(a, b) {
      if (a[1] < b[1]) { return 1; }
      if (a[1] > b[1]) { return -1; }
      if (a[1] === b[1]) return a[0] < b[0] ? -1 : 1;
  })

  return output;
}