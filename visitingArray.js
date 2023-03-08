function traverse(arr, length = arr.length, i = 0) {
  if (length <= 0) return;
  console.log(arr[i]);
  length--;
  i++;

  traverse(arr, length, i);
}

traverse([1, 4, 5, 6, 6, 4]);
