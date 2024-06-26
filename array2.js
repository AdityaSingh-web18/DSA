//maximum in the array--
let array = [10, 8, 40, 21, 501, 8, 51, 101];
let max = array[0];
for (let i = 0; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  }
}
console.log(max);
