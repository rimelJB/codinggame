const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const b = parseInt(inputs[0]);
    const t = parseInt(inputs[1]);
    t2 = (t * 9 / 5 + 32);
    console.log(t2 == b ? "Same" : t2 > b ? "Lower" : "Higher");
}