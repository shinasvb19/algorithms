function isPrime(num, i = 2) {
  if (num <= 1) return false;
  if (num == i) return true;

  if (num % i == 0) return false;

  return isPrime(num, i + 1);
}

function reccursive(arr, result, i = 0) {
  if (i == arr.length) return result;

  if (isPrime(arr[i])) {
    result.push(arr[i]);
  }

  reccursive(arr, result, i + 1);
  return result;
}

const arr = [2, 5, 3, 6, 7, 9, 1, 4, 5, 11, 10, 9];
const result = [];

console.log(reccursive(arr, result));
