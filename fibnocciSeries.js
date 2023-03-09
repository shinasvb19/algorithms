// function fibnocciSeries(n) {
//   let arr = [0, 1];
//   for (let i = 2; i < n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr;
// }

// console.log(fibnocciSeries(10));

function fibnocciSeries(n, arr = []) {
  if (n == 1) {
    return [0, 1];
  } else {
    let arr = fibnocciSeries(n - 1);

    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return arr;
  }
}

console.log(fibnocciSeries(10));
