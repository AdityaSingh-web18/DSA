//How many times the number are present in array(arr=[8,7,2,7,9,8,8,4,2,8])
//print output in (2-->2,4-->1.......)
let arr = [8, 7, 2, 7, 9, 8, 8, 4, 2, 8];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]]++;
  }
}
console.log(obj);
for (let key in obj) {
  console.log(key + "-->" + obj[key]);
}

//Find the element whose occurance/frequency is 1.(input=[8,8,2,1,4,2,6,5])
let input = [8, 8, 2, 1, 4, 2, 6, 5];
let output = {};
for (let i = 0; i < input.length; i++) {
  if (output[input[i]] == undefined) {
    output[input[i]] = 1;
  } else {
    output[input[i]]++;
  }
}
for (let key in output) {
  if (output[key] == 1) {
    console.log("Elements whose occurance is 1=" + key);
  }
}

//Find sum of elements whose occurance/frequency is 2.(arr=[8,8,2,1,4,2,6,5])
let array = [8, 8, 2, 1, 4, 2, 6, 5];
let object = {};
for (let i = 0; i < array.length; i++) {
  if (object[array[i]] == undefined) {
    object[array[i]] = 1;
  } else {
    object[array[i]]++;
  }
}
let sum = 0;
for (let key in object) {
  if (object[key] == 2) {
    sum = sum + Number(key);
  }
}
console.log("Sum of elements whose occurance is 2 =", sum);

//Given a number stored in a variable N.
//Print the first N english smaller case alphabets,mapped with the values from 1 to N, including value stored in N.
//N is 5 for this question.
//output to print- a-1
//                 b-2
//                 c-3
//                 d-4
//                 e-5
let letters = "abcdefghijklmnopqrstuvwxyz";
let out = {};
for (let i = 0; i < 5; i++) {
  out[letters[i]] = i + 1;
}
for (let key in out) {
  console.log(key + "-" + out[key]);
}
