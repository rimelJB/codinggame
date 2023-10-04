// an array calcuate perfect number
r = [1];
const n = parseInt(readline());
var inputs = readline().split(" ");
for (let i = 0; i < n; i++) {
  const l = parseInt(inputs[i]);
  if (n % i === 0) {
    r.push(i);
  }
}
s = r.reduce((a, b) => a + b, 1);
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(s);
