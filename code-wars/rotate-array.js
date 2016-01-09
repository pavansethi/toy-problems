function rev(list, start, end) {
  var arr = list;
  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

function rotate(list, n) {
  var arr = list.slice();

  n = n % arr.length;

  if (n < 0) {
    n = n + arr.length;
  }

  rev(arr, 0, arr.length - 1);
  rev(arr, 0, n - 1);
  rev(arr, n, arr.length - 1);
  return arr;
}