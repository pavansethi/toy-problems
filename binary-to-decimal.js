// Binary to Decimal
// Given a number n (represented as a binary number string), convert n to base 10.

// Examples
// Input Output
// n:
// "0"     0
// n:
// "1"     1
// n:
// "10"    2
// n:
// "11"    3
// n:
// "100"   4
// n:
// "101"   5
// n:
// "110"   6
// n:
// "111"   7
// n:
// "1000"  8

function binaryToDecimal (n) {
    var len = n.length - 1;
    var exponents = [];
    for (var i = 0; i < n.length; i++) {
        if (n[i] == 1) {
            var exp = Math.pow(2, len)
            exponents.push(exp);    
            len--;
        } else {
            len--;
        }
    }
    return exponents.reduce(function(exp1, exp2) {
        return exp1 + exp2;
    }, 0)
}