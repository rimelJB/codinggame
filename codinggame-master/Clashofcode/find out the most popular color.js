const n = 5;
let d={}
for (let i = 0; i < n; i++) {
    const t = "Blue";
    if(d[t]){
        d[t]++
    }else{
        d[t]=1
    }
}
var items = Object.keys(d).map(function(key) {
    return [key, d[key]];
  });
  items.sort(function(first, second) {
    return second[1] - first[1];
  });
  items=items.filter(a=>a[1]>=items[0][1]);
// Write an answer using console.log()
console.error(items);

console.log(items.length>1? "Multiple "+items[0][1]: items[0][0]+' '+items[0][1]);

//methode 2
// const n = parseInt(readline());
//  y=0;
//  b=0;
// g=0;
// for (let i = 0; i < n; i++) {
//     const T = readline();
//     if (T=='Yellow'){
//         y=y+1
//     }
//     if (T=='Blue'){
//         b=b+1
//     }
//     if (T=='Green'){
//         g=g+1
//     }
// }
// if (Math.max(y,b,g)==y){
//     console.log('Yellow',y);
// }if (Math.max(y,b,g)==b){
//     console.log('Blue',b);
// }
// if (Math.max(y,b,g)==g){
//     console.log('Green',g);
// }
// else {
//     console.log('Multiple', Math.max(y,b,g))
// }
// Write an answer using console.log()
// To debug: console.error('Debug messages...');


