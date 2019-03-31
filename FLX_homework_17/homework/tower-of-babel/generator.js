const max = process.argv[2];
let FizzBuzz = function*() {
    let cur = 1;

    while (cur <= max) {
        let value = cur;
        if (cur % 3 === 0 && !(cur % 5 === 0))  { 
            value = `Fizz`;
        } else if (cur % 5 === 0 && !(cur % 3 === 0))  {
            value = `Buzz`;
        } else if (cur % 3 === 0 && cur % 5 === 0)  {
            value = `FizzBuzz`;
        } 

        cur++;
        yield value;
    }
}();


for ( let n of FizzBuzz) {
    console.log(n);
}