function *range(from, to) {
    let i = from;
    while(i <= to) {
        yield i;
        i++;
    }
}

for (var r of range(5, 10)) {
    console.log( r );
}