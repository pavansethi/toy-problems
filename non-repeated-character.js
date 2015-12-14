// Non-repeated Character
// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

// Examples
// Input          Output
// string:
// "ABCDBIRDUP"   "A"
// string:
// "XXXXXXX"      "sorry"

var firstNonRepeatedCharacter = function(str) {
  var chars = {};
  var uniques = [];
  for (var i = 0; i < str.length; i++) {
    if (!chars.hasOwnProperty(str[i]) || chars[str[i]] < 1){
      chars[str[i]] = 1
    } else {
      chars[str[i]]++;
    }
  }

  for (var i in chars) {
    if (chars[i] === 1) { uniques.push(i); }
  }

  if (!uniques.length) { return "sorry"; }
  return uniques[0];
}
