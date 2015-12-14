// Sum Array
// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

// Examples
// Input                    Output
// array:
// [ 1, 2, 3 ]              6
// array:
// [ 4, -1, 5 ]             8
// array:
// [ 10, -11, 11 ]          11
// array:
// [ 1, 2, 3, -6, 4, 5, 6 ] 15

function sumArray (array) {
    var previousMax = 0;
    var currentMax = 0;
    if (allNegative(array)) {
        return Math.max(...array);
    }
    for (var i = 0; i < array.length; i++) {
        previousMax = Math.max(0, previousMax + array[i]);
        currentMax = Math.max(previousMax, currentMax);
    }
    return currentMax;
}

function allNegative(array) {
    var filtered = array.filter(function(num) {
        return num < 0;
    })
    return filtered.length === array.length
}