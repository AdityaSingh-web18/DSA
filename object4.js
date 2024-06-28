//show name and rating of the products which are above 5000 & below 10000
let flipkart = [
  { name: "speaker", price: 5400, rating: 4 },
  { name: "headphones", price: 5001, rating: 3.8 },
  { name: "playstation", price: 50000, rating: 5 },
  { name: "watch", price: 4000, rating: 4.1 },
];
for (let i = 0; i < flipkart.length; i++) {
  if (flipkart[i].price > 5000 && 10000 > flipkart[i].price) {
    console.log(
      "Name :",
      flipkart[i].name + ",",
      "Rating :",
      flipkart[i].rating
    );
  }
}

//given data with name & age create key-value pairs & print users with age more than 30.
//["Rahul","Prateek","Aman","Rohit","Naman"] [32,30,26,28,44].
let names = ["Rahul", "Prateek", "Aman", "Rohit", "Naman"];
let age = [32, 30, 26, 28, 44];
let arr = [];
for (let i = 0; i < names.length; i++) {
  let obj = {};
  obj.names = names[i];
  obj.age = age[i];
  arr.push(obj);
}
console.log(arr);
for (let key in arr) {
  if (arr[key].age > 30) {
    console.log("Users with age more than 30 is", arr[key].names);
  }
}
