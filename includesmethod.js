const availableSize = ["s", "m", "l", "xl"];
const readlineSync = require("readline-sync");
const usersize = readlineSync.question("Which size of shirt do you want?");

const isSizeAvailable = availableSize.includes(usersize);

if (isSizeAvailable) {
  console.log("Size is available");
} else {
  console.log("size is not available");
}
