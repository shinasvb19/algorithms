function binarySearch(arr, target) {
  left = 0;
  right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
let arr = [1, 3, 6, 7, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(binarySearch(arr, 10));
