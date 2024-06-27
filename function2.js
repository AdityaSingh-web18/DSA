//write a function to check is the string a palindrome or not
function reverse(string) {
  let bag = "";
  for (let i = string.length - 1; i >= 0; i--) {
    bag = bag + string[i];
  }
  return bag;
}
let str = "aman";
let rev = reverse(str);
function check(a, b) {
  if (a == b) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
}
check(str, rev);

//write a function to multiply elements of two arrays and store the product in new array
function multiply(a, b) {
  let output = [];
  if (a.length !== b.length) {
    throw new Error("Arrays must be of the same length");
  }
  for (let i = 0; i < a.length; i++) {
    output.push(a[i] * b[i]);
  }
  console.log(output);
}
let arr1 = [2, 4, 6, 8];
let arr2 = [10, 11, 21, 51];
multiply(arr1, arr2);
