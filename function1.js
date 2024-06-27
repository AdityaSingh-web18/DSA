//aman add two numbers send to naman.naman square it send it to rohit.rohit divide it by 10.
function add(a, b) {
  return a + b;
}
let aman = add(5, 1);

function square(x) {
  return x ** 2;
}
let naman = square(aman);

function divide(y) {
  return y / 10;
}
console.log("output is", divide(naman));

//using the function calculate the sum of even numbers in the array and also sum of odd numbers
function add(arr) {
  if (arr % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < array.length; i++) {
  if (add(array[i]) == true) {
    sumEven = sumEven + array[i];
  }
  if (add(array[i]) == false) {
    sumOdd = sumOdd + array[i];
  }
}
console.log(sumEven);
console.log(sumOdd);
