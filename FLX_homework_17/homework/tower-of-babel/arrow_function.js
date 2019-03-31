let inputs = process.argv.slice(2);
let result = inputs.map(word => word.charAt(0).toUpperCase()).join('');
console.log(result);