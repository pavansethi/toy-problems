// Balanced Brackets
// Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

// Examples
// Input                   Output
// str:
// "(x + y) - (4)"         true
// str:
// "(x + y) - (4)"         true
// str:
// "(((10 ) ()) ((?)(:)))" true
// str:
// "[{()}]"                true
// str:
// "(50)("                 false

function isBalanced (str) {
    var flag = 0;
    var braces = '()[]{}';
    var openBrackets = '([{';
    var closedBrackets = ')]}';
    var parens = '()';
    var squares = '[]';
    var brackets = '{}';
    var brString = ""
    for (var i = 0; i < str.length; i++) {
        if (braces.indexOf(str[i]) > -1) {
            brString += str[i];
        }
    }
    if (closedBrackets.indexOf(brString[0]) > -1) {
        return false;
    } else if (parens.indexOf(brString[0]) > -1 && parens.indexOf(brString[brString.length - 1]) === -1) {
        return false;
    } else if (squares.indexOf(brString[0]) > -1 && squares.indexOf(brString[brString.length - 1]) === -1) {
        return false;
    } else if (brackets.indexOf(brString[0]) > -1 && brackets.indexOf(brString[brString.length - 1]) === -1) {
        return false;
    } else {
        for (var i = 0; i < brString.length; i++) {
            if (openBrackets.indexOf(brString[i]) > -1) {
                flag++;
            } else {
                flag--;
            }
        }
    }
    return flag === 0;
}