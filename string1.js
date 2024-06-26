//count the names containing A or a in given string--
let names = ["Ankit", "Aman", "Max", "rohit", "virat"];
let result = 0;
for (let i = 0; i < names.length; i++) {
  let inner = names[i];
  for (let j = 0; j < inner.length; j++) {
    if (inner[j] == "A" || inner[j] == "a") {
      result++;
      break;
    }
  }
}
console.log(result);
