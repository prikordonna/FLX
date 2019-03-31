function *factorial(n) {
    let first = 1;
    for (let i = first; i <= n; i++) {
        first *= i;
        yield first;
    }
}

for (let n of factorial(5)) {
    console.log(n);
} 