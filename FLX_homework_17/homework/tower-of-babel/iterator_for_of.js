const max = process.argv[2];
let fizzBuzz = {
    [Symbol.iterator] () {
        let cur = 0;
        return {
            next () {
                cur++;
                let value = "";
                if (cur % 3 === 0 && !(cur % 5 === 0))  { 
                    value = `Fizz`;
                } else if (cur % 5 === 0 && !(cur % 3 === 0))  {
                    value = `Buzz`;
                } else if (cur % 3 === 0 && cur % 5 === 0)  {
                    value = `FizzBuzz`;
                } else {
                    value = cur;
                }
                
                if (cur > max) return { done: true };

                return { done: false, value: value };
            }
        }
    }
}

for ( let n of fizzBuzz) {
    console.log(n);
}
