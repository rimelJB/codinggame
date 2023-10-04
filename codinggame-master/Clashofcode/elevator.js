const F = parseInt(readline());
const N = parseInt(readline());
var inputs = readline()?.split(' ');
let temp = F*3;
for (let i = 0; i < N; i++) {
    const A = parseInt(inputs[i]);
    temp += 2 + A*2;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(temp);