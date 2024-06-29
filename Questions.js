//find sum of odd elements output-4
let eg = [1, 2, 3, 4];
let res = eg
  .filter(function (el) {
    return el % 2 != 0;
  })
  .reduce(function (acc, el) {
    return acc + el;
  });
console.log(res);

//addition by giving inital value 10
let input = [15, 16, 17, 18, 21];
let output = input.reduce(function (acc, el) {
  return acc + el;
}, 10);
console.log(output);

//find square of input
let inpt = [2, 5, 11, 8];
let out = inpt.map(function (el) {
  return el ** 2;
});
console.log(out);

//out-24 get product of all numbers
let give = [2, 3, 4];
let get = give.reduce(function (acc, el) {
  return acc * el;
});
console.log(get);

//out-27+216=243  find sum of cubes if num is divisible by 3
let ques = [1, 2, 3, 4, 5, 6];
let answer = [];
let step1 = ques.forEach(function (el) {
  if (el % 3 == 0) {
    answer.push(el ** 3);
  }
});
let step2 = answer.reduce(function (acc, el) {
  return acc + el;
});
console.log(step2);

//output 1-["Aman Kumar","Naman Singh","Prateek Dev"]
//output 2-["Aman Kumar","Prateek Dev"]
let users = [
  { firstName: "Aman", lastName: "Kumar", place: "Goa" },
  { firstName: "Naman", lastName: "Singh", place: "UP" },
  { firstName: "Prateek", lastName: "Dev", place: "Goa" },
];
//for output-1--
let out1 = users.map(function (el) {
  return el.firstName + " " + el.lastName;
});
console.log(out1);
//for output-2--
let out2 = users
  .filter(function (el) {
    return el.place == "Goa";
  })
  .map(function (el) {
    return el.firstName + " " + el.lastName;
  });
console.log(out2);
