var boardStr =
  "735814296\n" +
  "896275314\n" +
  "214963857\n" +
  "589427163\n" +
  "362189745\n" +
  "471356982\n" +
  "923541678\n" +
  "648792531\n" +
  "157638429";

function sudokuCheck(boardStr) {
  var result = 'solved';
  var board = boardStr.split('\n').map(function(row) {
    return row.split('').map(function(num) {
      return num;
    });
  });

  // Check Rows
  board.forEach(function(row) {
    if (!validate(row)) {
      result = 'invalid';
    };
  });

  // Check Cols
  var cols = [];
  for (var i = 0; i < 9; i++) {
    cols.push(board.map(function(row) {
      return row[i];
    }));
  }
  cols.map(function(col) {
    if (!validate(col)) {
      return 'invalid';
    };
  })

  // Check 3x3s
  //     var threes = [];
  //     var threes = board.map(function(row) {
  //         return row.slice(0, 3)
  //     })

  //     console.log(threes);
  return result;
}

function validate(arr) {
  var arrCopy = arr.slice();
  arrCopy = JSON.stringify(arrCopy.sort());
  var checkAgainst = JSON.stringify(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
  //     console.log(arrCopy === checkAgainst);
  if (arrCopy === checkAgainst) {
    return true;
  } else {
    return false;
  }
}
sudokuCheck(boardStr);