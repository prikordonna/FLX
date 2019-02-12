function reverseNumber(num) {
    let reversed = 0;
    if (num % 1 === 0 ) {
        while(num) {
            reversed *= 10;
            reversed += num % 10;
            num = Math.floor(num / 10);
        }
    }    
    return reversed;
}

reverseNumber();