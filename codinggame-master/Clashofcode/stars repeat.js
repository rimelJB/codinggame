const n = 10;
const a = 5;
const symbol = "*";
let s=""
for (let i=1; i<=n; i++){
    for (let j=1; i<=n; i++)
    {s+=(" ".repeat(a+i))+(symbol.repeat(i)+"\n") 
}
 
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(s)
