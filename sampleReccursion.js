function sampleRecursion(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  sampleRecursion(n - 1);
}

sampleRecursion(10);
