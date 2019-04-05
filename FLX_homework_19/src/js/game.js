let game = (userChoice) => {
    if (round < 3) {
        round++;
        const computerChoice = computerOption();
        let results = checkResult(userChoice, computerChoice);
        resultRound.innerHTML = `Round ${round}, ${userChoice} vs. ${computerChoice}, ${results}`;
        if (round >= 3) {
            resultFinish.className = "result-finish";
            resultFinish.innerHTML = `${whoWins(userScore, computerScore)}  With results [ ${userScore} : ${computerScore} ]`;
            result.appendChild(resultFinish);
        }
    } 
}
