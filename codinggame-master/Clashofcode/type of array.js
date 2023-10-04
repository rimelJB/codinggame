
// console.error(n)
// debut = n.match(/([\[]+)/g) ? n.match(/([\[]+)/g)[0] : null
// fin = n.match(/([\]]+)/g) ? n.match(/([\]]+)/g).at(-1) : null
// console.error(debut,fin)
// console.log(debut && debut?.length == fin?.length && n[0] == '[' && n.at(-1) == ']' ? debut.length + 'D array' : 'None')

// also my solution
// const n = readline();
const n = "[[3],[5]]";
s=0
for (let i = 0; i < n; i++) {
    if(n.chatAt(i)===","){
        s=s+1
    }
  }
  if(s==0){
    console.log("1D array")
  }
  if(s){
    console.log(`${s}D array`)
  }
  if(s==-1){
    console.log('None')

  }