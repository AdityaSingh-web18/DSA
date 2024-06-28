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
console.log(sum);
