const prompt = require("prompt-sync")();

let obj = {
  abc: 98,
  bcsd: 34,
  afs: 55,
  trt: 99,
};

//for in loops
for (let i in obj) {
  console.log("Marks of " + i + " are: " + obj[i]);
}

//for of loops
for (let j of "abc") {
  console.log(j);
}

let sum = 0;
let n = prompt("Enter your number: ");
n = Number.parseInt(n);

for (var k = 0; k < n; k++) {
  sum += k;
}

console.log("Sum " + n + " is " + sum);

//while loop

let a = prompt("Enter the value of a ");
a = Number.parseInt(a);

var c = 0;
while (c < a) {
  console.log(c);
  c++;
}
