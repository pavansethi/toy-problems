// Common Characters
// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

// Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'

removeDupes = function(str) {
    var chars = {};
    var output = '';
    for (var i = 0; i < str.length; i++) {
        chars[str[i]] = 1;
    }
    for (var i in chars) {
        output += i;
    }
    return output;
}

commonCharacters = function(string1, string2){
    var output = '';
    for (var i = 0; i < string1.length; i++) {
        if (string2.indexOf(string1[i]) > -1) {
            output += string1[i];
        }
    }
    output = removeDupes(output);
    return output.split(' ').join('')
};