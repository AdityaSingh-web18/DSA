//Example
for (let i = 1; i <= 5; i++) {
  let x = "";
  let y = "";
  for (let a = 1; a <= i; a++) {
    x = x + a + " ";
  }
  console.log(x);
  for (let b = 1; b <= i; b++) {
    y = y + "*" + " ";
  }
  console.log(y);
}
