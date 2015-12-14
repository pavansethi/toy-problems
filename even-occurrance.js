// Even Occurence
// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

// Examples
// Input                           Output
// arr:
// [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]   2
// arr:
// [ "cat", "dog", "dig", "cat" ]  "cat"

function evenOccurence (arr) {
    var tracker = {};
    var evens = [];

    for (var i = 0; i < arr.length; i++) {
        if (!tracker[arr[i]]) { tracker[arr[i]] = 1 }
        else { tracker[arr[i]] += 1; }
    }

    for (var i in tracker) {
        if (tracker[i] % 2 === 0) { evens.push(i) }
    }

    if (!evens.length) { return null; }

    for (var i = 0; i < arr.length; i++) {
        if (evens.indexOf(arr[i].toString()) > -1) { return arr[i]; }
    }
}
