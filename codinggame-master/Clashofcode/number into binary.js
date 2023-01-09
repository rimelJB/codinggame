// **** a number into binary then if there is succession then add it if not print it
const n = parseInt(readline()).toString(2);
console.error(n);

if (n === "0") {
  console.log("0");
} else {
  res = [];
  let previous = "",
    s = 0;
  for (let current of n) {
    if (previous === "") previous = current;
    if (current === previous) {
      s += 1;
    } else {
      // current != previous
      res.push(s);
      s = 1;
    }
    previous = current;
  }

  console.log(res.concat([s]).join(""));
}
