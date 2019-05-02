let num1 = '';
let num2 = '';
let operator = '';
let total = '';
let userInput = '';
let memory = 0;
$('.output').text('');

$(document).ready(function() {  
    $('.number').click(function(e) {
        if (num1 === '') {
            num1 = e.target.innerHTML;
            displayUserInput(num1);
        } else {
            num2 = e.target.innerHTML;
            displayUserInput(num2);
            handleTotal();
        }
    });
    $('.operator').click(function(e) {
        operator = e.target.innerHTML;
        displayUserInput(operator);
    });
    $('#result').click(function(e) {
        displayResult(total);
    });
    $('#reset').click(function(e) {
        num1 = '';
        num2 = '';
        operator = '';
        total = '';
        userInput = 0;
        $('.input').text('');
        $('.output').text('');
    });
    $('#memory').click(function(e) {
        console.log('memory', e.target.innerHTML);
        memory = $('.input').val();
    });
    $('#remove-memory').click(function(e) {
        console.log('remove-memory', e.target.innerHTML);
    });
});

function handleTotal() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            break;
        case '-':
            total = +num1 - +num2;
            break;
        case '*':
            total = +num1 * +num2;
            break;
        case '/':
            total = +num1 / +num2;
            break;   
    }
    updateNumbers()
}

function displayUserInput(value) {
    userInput += value;
    $('.input').text(userInput);
}
function displayResult(val) {
    $('.output').text(val);
}
function updateNumbers() {
    num1 = total;
    num2 = '';
}

