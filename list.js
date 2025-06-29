let marsk = {
  harry: 40,
  ssa: 34,
  faer: 56,
  fasdr: 88,
};

for (let i = 0; i < Object.keys(marsk).length; i++) {
  console.log(
    "the marks of " +
      Object.keys(marsk)[i] +
      " are " +
      marsk[Object.keys(marsk)[i]]
  );
}

//another way
for (let i in marsk) {
  console.log("The marsk of: " + i + " are " + marsk[i]);
}

//dollar sign
let b1 = hgjvj;
let b2 = hjguuo;
