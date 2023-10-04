const N = readline();
var count=0;
for (let i = 1; i < N.length; i++) {
    if(N[i]==N[i-1]){
   count=count
  }else{
count=count+1
  }}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(count);