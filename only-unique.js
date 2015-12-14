// Only Unique
// Given a string, remove any characters that are not unique from the string.

// You've got Helpers! (click to view code)
// Examples
// Input          Output
// str:
// "abccdefe"     "abdf"
// str:
// "hello there"  "o tr"
// str:
// "xyz"          "xyz"
// str:
// "iiii"         ""

function onlyUnique (str) {
    var storage = {};
    var output = '';
    for (var i = 0; i < str.length; i++) {
        if (!storage[str[i]]) {
            storage[str[i]] = 1;
        } else {
            storage[str[i]] += 1;
        }
    }

    for (var key in storage) {
        if (storage[key] === 1) {
            output += key;
        }
    }
    return output;
}