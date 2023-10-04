const nb = parseInt(readline());

let i = 0;
let nb1 = 0;
let nb2 = 0;
let answer = 0;

while (Math.pow(2, i) < nb) {
    i++;
}

nb1 = Math.pow(2, i-1);
nb2 = Math.pow(2, i);

if (Math.abs(nb-nb1) <= Math.abs(nb-nb2))
    answer = nb1;
else
    answer = nb2;

console.log(answer);
