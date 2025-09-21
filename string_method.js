let userName = "BroCode";

console.log(userName.charAt(0));

console.log(userName.length);

let userName2 = "    Brocode   ";
userName2 = userName2.trim();
console.log(userName2);

let phonenumber = "123-456-789";

// replaceAll("first what do you want to place", "what do you want to place with")
phonenumber = phonenumber.replaceAll("-", "");
console.log(phonenumber);

// string sliciing
const namename = "Bro Code";
const fullName = namename.slice(0, 2);
const lastName = namename.slice(4, 8);

let firstChar = namename.slice(0, 1);
let lastChar = namename.slice(-2);
console.log(fullName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);

// index of space
let name2 = "broseph code";
let firstname = name2.slice(0, name2.indexOf(" "));
console.log(firstname);
