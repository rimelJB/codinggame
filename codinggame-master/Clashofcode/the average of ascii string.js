// ******  the average of ascii string
var s = "abc";
let sum_char = 0;

// loop to sum the ascii value of chars
for (let i = 0; i < s.length; i++) {
  sum_char += s[i].charCodeAt(0);
}

// Returning average of chars
console.log(Math.floor(sum_char / s.length));
