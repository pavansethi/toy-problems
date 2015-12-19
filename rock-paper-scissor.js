
// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

// Examples
// Input          Output
// roundCount:
// 1              [ "r", "p", "s" ]
// roundCount:
// 2              [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
// roundCount:
// 0              [ ]

function rockPaperPermutation (roundCount) {
​
  startArray = ['r', 'p', 's'];
  var solution = [''];
  
  if(roundCount === 0) return [];
​
  for (var i = 0; i < roundCount; i++) {
    var temp = [];
    for(var j = 0; j < solution.length; j++){
      for(var p = 0; p < 3; p++){
        temp.push(solution[j] + startArray[p])
      }
    }
    solution = temp;
  }
  
  return solution;
}