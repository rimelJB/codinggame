// * Auto-generated code below aims at helping you parse
// * the standard input according to the problem statement.
// **/

const health = parseInt(readline());
const level = parseInt(readline());

d=health-200
for (i=1;i<level;i++){
d-=20
}
if(d>0){
   console.log('rawr'+' '+ d);
}else{console.log('hehehehaw'+' '+ d);}
