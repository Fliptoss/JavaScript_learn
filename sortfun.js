let a = [
  { name: "Ratul", age: 28 },
  { name: "Jatin", age: 25 },
  { name: "Vikas", age: 32 },
  { name: "Rohit", age: 35 },
];

//x.name does not sort out the names
a.sort((x, y) => x.age - y.age);

console.log(a);

//sort object for names
a.sort((x, y) => x.name.localeCompare(y.name));
//(dot)localCompare function.

console.log(a);
