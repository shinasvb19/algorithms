function sum(n, result = 0) {
  if (n <= 0) return;

  sum(n - 1, (result += n));
  console.log(result);
}
sum(10);
