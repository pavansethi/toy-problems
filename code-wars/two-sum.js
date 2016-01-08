/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
*/

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

twoSum([1234,5678,9012], 14690);