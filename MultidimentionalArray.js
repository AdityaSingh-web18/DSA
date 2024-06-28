//Loops in Multidimentional array-------------------------------------------------
//Find numbers of rows and columns in given input
//and also print - 1 2 3
//                 4 5 6
//                 7 8 9
let input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("row is", input.length);
console.log("column is", input[0].length);
for (let i = 0; i < input.length; i++) {
  let bag = "";
  for (let j = 0; j < input[0].length; j++) {
    bag = bag + input[i][j] + " ";
  }
  console.log(bag);
}


//For input- [              get output-
//    [1,2,31],                  1 6 28
//    [6,11,51],                 2 11 81
//    [28,81,101]                31 51 101
//   ]
let data = [
  [1, 2, 31],
  [6, 11, 51],
  [28, 81, 101],
];
for (let i = 0; i < data.length; i++) {
  let result = "";
  for (let j = 0; j < data[0].length; j++) {
    result = result + data[j][i] + " ";
  }
  console.log(result);
}