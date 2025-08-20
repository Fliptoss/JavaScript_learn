// let username;

// document.getElementById("mySubmit").onclick = function () {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// };

// let age;
// document.getElementById("AgeSubmit").onclick = function () {
//   age = document.getElementById("myAgeText").value;
//   console.log(age);
// };

const Pi = 3.1415;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * Pi * radius;
  document.getElementById("myH3").textContent = circumference;
};
