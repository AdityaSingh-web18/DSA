//Calculate the perimeter & area of reactangle by making separate method.
let data = {
  length: 40,
  width: 11,
  perimeter: function () {
    return 2 * (this.length + this.width);
  },
  area: function () {
    return this.length * this.width;
  },
};
console.log(data.perimeter());
console.log(data.area());


//Output to get -   Hello Ram
//                  Age is 34
//                  Hobbies are Coding, Reading
let input = {
  name: "Ram",
  age: 34,
  hobbies: ["Coding", "Reading"],
  output: function () {
    console.log("Hello", this.name);
    console.log("Age is", this.age);
    let bag = "";
    for (let i = 0; i < this.hobbies.length; i++) {
      if(i==this.hobbies.length-1){
        bag = bag + this.hobbies[i];
      }
      else{
        bag = bag + this.hobbies[i]+", ";
      }
    }
    console.log(bag);
  },
};
input.output();
//or -> by join()--
let inp = {
    name: "Ram",
    age: 34,
    hobbies: ["Coding", "Reading"],
    note: function () {
      console.log("Hello", this.name);
      console.log("Age is", this.age);
      console.log("Hobbies are", this.hobbies.join(", "));
    },
  };
  inp.note();