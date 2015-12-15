// http://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

function tripledouble(num1, num2) {

  num1 = num1.toString().split('');
  num2 = num2.toString().split('');
  var triples = [];
  var triple = '';
  var doubles = [];
  var double = '';

  for (var i = 0; i < num1.length; i++) {
    if (num1[i] === num1[i+1] && num1[i+1] === num1[i+2]) {
      triple = num1[i] + num1[i+1] + num1[i+2];
      triples.push(triple);
    }
  }

  for (var i = 0; i < num2.length; i++) {
    if (num2[i] === num2[i+1]) {
      double = num2[i] + num2[i+1];
      doubles.push(double);
    }
  }

  doubles = doubles.join('').split('');
  triples = triples.join('').split('');

  for (var i = 0; i < triples.length; i++) {
    if (doubles.indexOf(triples[i]) > -1) {
      return 1;
    }
  }
  return 0;
}