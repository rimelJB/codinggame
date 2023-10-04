const o = readline();
if (o=="Scissors"){
    console.log('Stone');
}
if (o=="Stone"){
    console.log('Hand');
}
if (o=="Hand"){
    console.log('Scissors');
}
if(o!=="Scissors" && o!=="Hand" && o!=="Stone"){console.log('Error');

}