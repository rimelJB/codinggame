//temperature la plus proche de 0
const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(" ");

var tempsorted = inputs.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);

console.log(tempsorted[0] || 0);

 