const isBigger = function (a, b) {
    return a > b;
}

function isSmaller(a, b) {
    if (isBigger(a, b)) {
        return false;
    } else {
        return true;
    }
}

isSmaller(5, -1);