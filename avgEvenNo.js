//average of even number from 1 to 50--
let sum = 0;
let count = 0;
for (let i = 1; i < 51; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
    count++;
  }
}
console.log("average of even number from 1 to 50 is", sum / count);
