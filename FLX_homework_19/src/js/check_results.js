let checkResult = (user, computer) => {
    if (user === 'scissors' && computer === 'paper' || user === 'paper' && computer === 'rock' || user === 'rock' && computer === 'scissors') {
        userScore++
        return win();
    } else if (user === computer) {
        return draw();
    } else {
        computerScore++
        return lose();
    }
}

let whoWins = (user, computer) => { 
    if (user > computer) {
        return win();
    } else if (user < computer) {
        return lose();
    } else {
        return draw();
    }
}
