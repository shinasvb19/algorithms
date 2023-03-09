function isPrime(n, i = 2) {
  if (n == 2) return true;
  if (n <= 1) return false;
  if (n == i) return true;
  if (n % i == 0) return false;

  return isPrime(n, i + 1);
}

function reccursion(arr, result, i = 0) {
  if (i == arr.length) return;

  if (isPrime(arr[i])) {
    result.push(arr[i]);
  }
  reccursion(arr, result, i + 1);
  return result;
}

const arr = [2, 33, 4, 1, 2, 4, 8, 7, 0, 5, 19, 17];
const result = [];
console.log(reccursion(arr, result));
