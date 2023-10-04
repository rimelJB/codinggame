const s = "1234"; // length always even
let r=""
for (let i = 0; i < s.length; i++) {
    let n=parseInt(s[i])// convert a char into a digit
  r+=`${s[i+1]}`.repeat(n)// reapeat a char n times
  i=i+1
  }
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(r);