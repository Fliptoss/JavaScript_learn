const arr = [["html", "css", "js"], 1, 2, 3, 4, 5];
const [courses, ...rest] = arr;

console.log(rest);
console.log(courses);
