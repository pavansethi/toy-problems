/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
*/

/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
*/


// Return indices
function twoSum(numbers, target) {
  var storage = {};

  for (var i = 0; i < numbers.length; i++) {
      var diff = target - numbers[i];
      if (storage[diff] === undefined) {
          storage[numbers[i]] = i;
      } else {
          return [storage[diff], i]
      }
  }
  return false;
}

twoSum([1,4,6,8,2,5,9], 10)


// Return values
var twoSumWithValues = function(numbers, target) {
  var storage = {};

  for (var i = 0; i < numbers.length; i++) {
    var diff = target - numbers[i];

    if (storage[diff] === undefined) {
      storage[numbers[i]] = numbers[i];
    } else {
      return [storage[diff], numbers[i]];
    }
  }
}

twoSumWithValues([1,4,6,8,2,5,9], 10)

// Return all values that add to target
var twoSumWithAllValues = function(numbers, target) {
  var storage = {};
  var results = [];

  for (var i = 0; i < numbers.length; i++) {
    var diff = target - numbers[i];
    if (storage[diff] === undefined) {
      storage[numbers[i]] = numbers[i];
    } else {
      results.push([storage[diff], numbers[i]]);
    }
  }
  return JSON.stringify(results);
}

twoSumWithAllValues([1, 4, 6, 8, 2, 5, 9], 10)