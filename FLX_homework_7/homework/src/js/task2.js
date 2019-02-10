const playGame = confirm("Do you want to play a game?");

if (playGame) {
    let number = 5;
    let randomNumber = Math.floor(Math.random() * number) + 1;
    let userInput, continueGame, playAgain;
    let prize = 10;
    let total = 0;
    let prize2, prize3;

    Loop1:
    for (let attempts = 3; attempts >= 0; attempts--) {
        switch (attempts) {
            case 3:
                userInput = prompt(`
                Enter a number in range 0 to ${number}
                Attempts left: ${attempts}
                Total prize: ${total}$
                Possible prize on current attempt: ${prize}
                `);
                if (+userInput === randomNumber) {
                    total += prize;
                    continueGame = confirm(`Congratulation! Your prize is: ${total}$. Do you want to continue?`);
                    if (continueGame) {
                        attempts = 4;
                        prize *= 3;
                        number *= 2;
                        randomNumber = Math.floor(Math.random() * number) + 1;
                        continue Loop1;
                    } else {
                        alert(`Thank you for a game. Your prize is: ${total}$`);
                        playAgain = confirm("Do you want to play a game again?");
                        if (playAgain) {
                            attempts = 4;
                            number = 5;
                            total = 0;
                            prize = 10;
                            randomNumber = Math.floor(Math.random() * number) + 1;
                            continue Loop1;
                        } else {
                            break;
                        }
                    }
                }
                break;
            case 2:
                prize2 = prize / 2;
                userInput = prompt(`
                Enter a number in range 0 to ${number}
                Attempts left: ${attempts}
                Total prize: ${total}$
                Possible prize on current attempt: ${prize2}
                `);
                if (+userInput === randomNumber) {
                    total += prize2;
                    continueGame = confirm(`Congratulation! Your prize is: ${total}$. Do you want to continue?`);
                    if (continueGame) {
                      attempts = 4;
                      prize *= 3;
                      number *= 2;
                      randomNumber = Math.floor(Math.random() * number) + 1;
                      continue Loop1;
                    } else {
                        alert(`Thank you for a game. Your prize is: ${total}`);
                        playAgain = confirm("Do you want to play a game again?");
                        if (playAgain) {
                            attempts = 4;
                            number = 5;
                            total = 0;
                            prize = 10;
                            randomNumber = Math.floor(Math.random() * number) + 1;
                            continue Loop1;
                        } else {
                            break;
                        }
                    }
                }
                break;
            case 1:
                prize3 = parseInt((prize / 2) / 2);
                userInput = prompt(`
                Enter a number in range 0 to ${number}
                Attempts left: ${attempts}
                Total prize: ${total}$
                Possible prize on current attempt: ${prize3}
                `);
                if (+userInput === randomNumber) {
                    total += prize3;
                    continueGame = confirm(`Congratulation! Your prize is: ${total}$. Do you want to continue?`);
                    if (continueGame) {
                        attempts = 4;
                        prize *= 3;
                        number *= 2;
                        randomNumber = Math.floor(Math.random() * number) + 1;
                        continue Loop1;
                    } else {
                        alert(`Thank you for a game. Your prize is: ${total}`);
                        playAgain = confirm("Do you want to play a game again?");
                        if (playAgain) {
                            attempts = 4;
                            number = 5;
                            total = 0;
                            prize = 10;
                            randomNumber = Math.floor(Math.random() * number) + 1;
                            continue Loop1;
                        } else {
                            break;
                        }
                    }
                }
                break;
            case 0:
                alert(`Thank you for a game. Your prize is: ${total}`);
                playAgain = confirm("Do you want to play a game again?");
                if (playAgain) {
                    attempts = 4;
                    number = 5;
                    total = 0;
                    prize = 10;
                    randomNumber = Math.floor(Math.random() * number) + 1;
                    continue Loop1;
                } 
                break;
            default:
                alert('something went wrong');
        }
    }
} else {
    alert("You did not become a millionaire, but can.");
}


