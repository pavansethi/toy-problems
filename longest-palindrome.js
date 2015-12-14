// Longest Palindrome
// Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).


// Examples
// Input                                        Output
// string:
// "aibohphobia"                                "aibohphobia"
// string:
// "My dad is a racecar athlete"                "a racecar a"

function longestPalindrome (string) {
  var current, next, string = string.toLowerCase();
  var finalString = '';
  for (current = 0; current < string.length; current++) {
    var count = 0;
    for (next = current + 1; next < string.length; next++) {
        var strToCheck = string.substring(current, next + 1);
        count++;
        if (isPalindrome(strToCheck) && count > finalString.length) {
            finalString = strToCheck;
        };
    }
  }
  return finalString;
}

function isPalindrome(string) {
    return string === string.split('').reverse().join('');
}