N = 5;
let s = "";
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // (j == 0 + i || j == N - 1 - i) diagonal and contre diagonal
    if (j == 0 + i || j == N - 1 - i) {
      s += "x";
    } else {
      s += "#";
    }
  }
  s += "\n";
  console.log(s);
  
}
