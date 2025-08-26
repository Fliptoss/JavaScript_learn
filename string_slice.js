const fullname = "Bro Code";

let firstName = fullname.slice(0, 3);
let lastName = fullname.slice(4, 8); //you do not need to put a last index

console.log(firstName);
console.log(lastName);

let firstChar = fullname.slice(0, 1);
let lastChar = fullname.slice(-1);

console.log(firstChar);
console.log(lastChar);

let namename = fullname.slice(0, fullname.indexOf(" ")); //extract all the names before the space
let lstname = fullname.slice(fullname.indexOf(" ") + 1); //extract all the names after the space
console.log(namename);

const email = "bro1@gmail.com";

let username1 = email.slice(0, email.indexOf("@"));
console.log(username1);
let lastname1 = email.slice(email.indexOf("@") + 1);
console.log(lastname1);
