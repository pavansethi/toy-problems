function revStringinPlace(str) {
  str = str.split('');
  var start = 0;
  var end = str.length - 1;

  while (start < end) {
    var temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
  return str.join('');
}

revStringinPlace('scotts stuff');