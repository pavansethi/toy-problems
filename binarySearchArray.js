function binarySearch (array, target, removed) {
  var middleIndex = Math.floor(array.length / 2);
  var middle = array[middleIndex];
  
  var removed = removed || 0;

  if (target === middle) {
    return middleIndex + removed;
  }

  if (array.length === 1) {
    return -1;
  }

  if (target < middle) {
    array.splice(middleIndex)
    return binarySearch(array, target, removed);
  }

  if (target > middle) {
    array.splice(0, middleIndex);
    removed += middleIndex++;
    return binarySearch(array, target, removed);
  }
}
var arr = [0,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500,3600,3700,3800,3900,4000,4100,4200,4300,4400,4500,4600,4700,4800,4900]
var target = 1700;

binarySearch(arr, target)

