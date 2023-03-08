function evenNumber(arr) {
  let result = [];
  function reccursion(arr, i = 0, length = arr.length) {
    if (i == length) return;

    if (arr[i] % 2 == 0) {
      result.push(arr[i]);
    }

    i++;
    reccursion(arr, i, length);
  }
  reccursion(arr);
  return result;
}
console.log(evenNumber([1, 4, 3, 6, 7, 9, 8, 6]));
