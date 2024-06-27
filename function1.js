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
