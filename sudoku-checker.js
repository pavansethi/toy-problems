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
  var chunk = 9;
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
      result = 'invalid';
    };
  })

  // Check 3x3s
  var threes = [];
  var finalThrees = [];
//   var master = [];

  var master = board.map(function(row) {
    console.log(row)
    return splitByChunk(row, 3)
  })

//   console.log(master)

  function splitByChunk(row, chunk) {
    var output = [];
    for (var i = 0, j = row.length; i < j; i += chunk) {
        temparray = row.slice(i,i+chunk);
        output.push(temparray);
    }
    return output;
  }

//   console.log(threes)

  var j;
  for (var i = 0, j = threes.length; i < j; i += chunk) {
      temparray = threes.slice(i,i+chunk);
      finalThrees.push(temparray);
  }

//   console.log(finalThrees)

  finalThrees.forEach(function(three) {
    if (!validate(three)) {
      result = 'invalid';
    }
  });

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