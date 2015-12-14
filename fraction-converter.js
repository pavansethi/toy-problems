Fraction Converter
Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
Whole numbers and mixed fractions should be returned as improper fractions.

Examples
Input       Output
number:
0.5         "1/2"
number:
3           "3/1"
number:
2.5         "5/2"
number:
2.75        "11/4"

function fractionConverter (number) {
    var negative = '';
    if (number < 0) {
        number = Math.abs(number);
        negative = '-';
    } else if (number === 0) {
        return '0/1';
    }
    var decimal = number % 1;
    var integer = Math.trunc(number)
    var decLength = decimal.toString().length - 2
    var bottom = "1";

    for (var i = 0; i < decLength; i++) {
        bottom += "0";
    }
    
    bottom = Number(bottom)
    var top = decimal * bottom;

    var greatestCommon = gcf(top, bottom)

    top = top / greatestCommon;
    bottom = bottom / greatestCommon;

    top = bottom * integer + top;

    top = Math.floor(top);

    return negative + top + '/' + bottom
    
}

var gcf = function(num1, num2) {
    var factor = 1;
    for (var i = 0; i < num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            factor = i;
        }
    }
    return factor;
}