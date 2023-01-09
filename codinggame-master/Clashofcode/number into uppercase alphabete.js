//  how to convert any number<1000 into uppercase alphabete

n = 701;
c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (n < 26) {
  console.log(c[n]);
} else {
  console.log(Math.floor(n / 26) - 1);
  console.log(n % 26);
  console.log(c[Math.floor(n / 26) - 1] + c[n % 26]);
}
