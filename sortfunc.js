const number = [1, 4, 22, 5, 2, 77, 7, 9, 11, 0];

function sortAsc(a, b) {
  return a - b;
}

number.sort(sortAsc);
console.log(number);
