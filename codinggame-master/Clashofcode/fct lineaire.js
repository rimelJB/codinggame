var inputs = readline().split(' ');
const a = parseInt(inputs[0]);
const b = parseInt(inputs[1]);
const n = parseInt(readline());

for (let i = 0; i < n; i++) {
    const x = parseInt(readline());
    s = a * x + b
    console.log(s);
}
