let num = [3, 56, 34, 12, 6];
for (let i = 0; i < num.length; i++) {
  console.log(i);
}

// for each loop
num.forEach((element) => {
  console.log(element * element);
});

// Array.from
let name = "asfasf";
let arr = Array.from(name);
console.log(arr);

// for ... of
for (let i of num) {
  console.log(i);
}

// for ... in (gives us keys)
for (let item in num) {
  console.log(item);
}

// and if we want to print the array elements we have to do num[i]

for (let items in num) {
  console.log(num[items]);
}
