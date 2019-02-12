function addOne(x) {
    return x + 1;
}

function pipe() {
    let firstArg = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        firstArg = arguments[i](firstArg);
    }
    return firstArg;
}

pipe(1, addOne, addOne);