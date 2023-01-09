// *** if it is even then add it to the total if it odd substract it
const a = parseInt(readline());
const b = parseInt(readline());
const c = parseInt(readline());

total = 0;
if (a % 2 == 0) {
  total = total + a;
} else {
  total = total - a;
}
if (b % 2 == 0) {
  total = total + b;
} else {
  total = total - b;
}
if (c % 2 == 0) {
  total = total + c;
} else {
  total = total - c;
}

console.log(total);
