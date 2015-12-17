// Problem Description:

// The word i18n is a common abbreviation of internationalization the developer community use instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all words within that string of length 4 or greater into an abbreviation following the same rules.


function abbreviate(sentence) {
  sentence = sentence.replace(/[-]/,' ');
  sentence = sentence.split(' ');
  var output = [];
  sentence.map(function(word) {
    if (word.length < 5) {
        output.push(word);
    } else {
        var number = word.length - 1;
        output.push(word[0] + number + word[word.length - 1]);
    }
  });

  return output.join(', ');
}

abbreviate("hello there whats-up");