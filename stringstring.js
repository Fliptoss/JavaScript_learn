let username = "BroCode";

username.charAt(0);

console.log(username.indexOf("o")); //get the index of o

console.log(username.length); //getting the length of a string

username = username.trim(); //trim the white space
console.log(username);

console.log(username.toLowerCase());
console.log(username.toUpperCase());

console.log(username.repeat());

console.log(username.startsWith("B"));

console.log("");

let result = username.startsWith(" ");
if (result) {
  console.log("Your username can not include empty space");
}

let phoneno = "123-456-678";

phoneno = phoneno.replaceAll("-", ""); //eliminate all the dashes
