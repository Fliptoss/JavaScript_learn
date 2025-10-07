let a = [1, 2, 4, -1, -2];

//normallly it wont work
console.log(Math.min(a)); //NaN

//find the minimum number
console.log(Math.min(...a));
