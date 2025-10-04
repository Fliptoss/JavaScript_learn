const arr = [1, 2, 3, 4, 5, 6];
console.log("array: ", arr);
console.log(...arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8];
const arr3 = [...arr1, ...arr2, 9, 10];
console.log(arr3);
