// Arrayception
// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

// Examples
// Input                              Output
// array:
// [ [ 5 ], [ [ ] ] ]                  2
// array:
// [ 10, 20, 30, 40 ]                  1
// array:
// [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]  4
// array:
// [ ]                                 0
// array:
// [ [ [ ] ] ]                         0

var arrayception = function(arr) {
  var deepest = 0;
  var count;
  for (var i = 0; i < arr.length; i++) {

    if (arr[i].length === 0) {
      count = 0;
    }

    if (Array.isArray(arr[i])) {
      count = arrayception(arr[i]);
      if (count > 0) {
        count++;
      }
    } else {
      count = 1;
    }
    if (count > deepest) { deepest = count }
  }
  return deepest;
}