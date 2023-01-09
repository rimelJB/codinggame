// comparing hights in a loop of a while and for
// game loop
while (true) {
    ind=0
    Max=0
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.
    if(Max<mountainH || i==0)
    {Max=mountainH
    ind=i}
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

         // The index of the mountain to fire on.

}console.log(ind);
}