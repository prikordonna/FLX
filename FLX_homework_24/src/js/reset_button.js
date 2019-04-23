export let resetAll = () => {
    let reset = () => {
        userScore = 0;
        computerScore = 0;
        round = 0;
        resultRound.innerHTML = '';
        resultFinish.innerHTML = '';
    }
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener('click', () => { reset();});
}

resetAll();