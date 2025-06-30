/*
map in js = creates a new array by performing some operation on each array elements
*/

let arr = [4, 3, 5];

let a = arr.map((elements) => {
  console.log(elements);
  return elements + 1;
});

console.log(a);

console.log("\n");
let b = arr.map((elements, index, array) => {
  console.log(elements, index, array);
  return elements + 1;
});

console.log(b);
