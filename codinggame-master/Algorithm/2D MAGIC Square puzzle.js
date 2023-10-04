// 2D MAGIC Square puzzle
const n = parseInt(readline());
const ASR = [];
const Global = [];
//  principal diagonal
pri = 0;
// secondary diagonal
sec = 0;
for (let i = 0; i < n; i++) {
  var inputs = readline().split(" ");
  var SR = 0;
  //  principal diagonal
  pri += +inputs[i][i];
  //  secondary diagonal
  sec += +inputs[i][n - i - 1];
  for (let j = 0; j < n; j++) {
    const c = parseInt(inputs[j]);
    SR += +inputs[j];
    Global.push(inputs[j]);
  }
  ASR.push(SR);
}

function allAreEqual(array, n) {
  const result = array.every((element) => {
    if (
      element === array[0] &&
      element <= n * n &&
      Number.isInteger(element) &&
      element >= 1
    ) {
      return true;
    }
  });
  return result;
}

if (
  allAreEqual(ASR, n) &&
  (allAreEqual(Global, n) === false || Global.length === 1) &&
  pri === sec
) {
  console.log("MAGIC");
} else {
  console.log("MUGGLE");
}
