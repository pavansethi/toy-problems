// Roman Numeral Translator
// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.

// You should return "null" on invalid input.

function translateRomanNumeral (romanNumeral) {
    var numerals = {
      'I' : 1,
      'V' : 5,
      'X' : 10,
      'L' : 50,
      'C' : 100,
      'D' : 500,
      'M' : 1000
    }
    
    var sum = 0;
    for (var i = 0; i < romanNumeral.length; i++) {
        if (!numerals.hasOwnProperty(romanNumeral[i])) {return 'null'};
        if (numerals[romanNumeral[i]] < numerals[romanNumeral[i + 1]]) {
            sum -= numerals[romanNumeral[i]];
        } else {
            sum += numerals[romanNumeral[i]];
        }
    }

    return sum;

}