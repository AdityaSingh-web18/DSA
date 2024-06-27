//Print the sum of even numbers given inside object
let object = {
  name: "naman",
  age: 16,
  city: "Delhi",
  numbers: [1, 2, 3, 4, 8, 10, 101, 200],
  married: false,
};
let sum = 0;
for (let i = 0; i < object.numbers.length; i++) {
  if (object.numbers[i] % 2 == 0) {
    sum = sum + object.numbers[i];
  }
}
console.log(sum);
