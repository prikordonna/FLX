let a = prompt("Please enter value 'a' ");
let b = prompt("Please enter value 'b' ");
let c = prompt("Please enter value 'c' "); 
const discriminant = (b * b) - 4 * (a * c);

function quadratic(a, b, c) {
    if ( isNaN(a) || isNaN(b) || isNaN(c) ) {
        alert("Invalid input data");
    } else if ( a === "0" || (a === "" || b === "" || c === "") || (a === null || b === null || c === null)) {
        alert("Invalid input data");
    } else {
        if ( discriminant > 0 ) {
            const x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
            alert(`x1 = ${x1} and x2 = ${x2}`);
        } else if ( discriminant === 0 ) {
            const x = (-b - Math.sqrt(discriminant));
            alert(`x = ${x}`);
        } else {
            alert("no solution");
        }
    }
}

quadratic(a, b, c);
