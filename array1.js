//print second half of array with even and odd length--
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (num.length % 2 != 0) {
  start = (num.length + 1) / 2;
} else {
  start = num.length / 2;
}
for (let i = start; i < num.length; i++) {
  console.log(num[i]);
}
