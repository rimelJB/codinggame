/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

//Rotate 13 alphabete

const T = "UFARBKJHLMFGTY";
const s='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let N1="";
let N2="";
for (let i = 0; i < T.length; i++) {
    const x=s.indexOf(T[i]) + 13
    if (x>=26){
        N1+=s[x-26]
}else{
    N2+=s[x]
}
  }
  console.log(N1+N2)


