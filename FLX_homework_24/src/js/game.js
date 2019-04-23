import "../scss/style.scss";
import {userChoice, computerOption} from './compute_choice';
import {checkResult,whoWins} from './check_results';
import {resetAll} from './reset_button';
userChoice();

export let userScore = 0;
let computerScore = 0;
let round = 0;
const result = document.querySelector(".results");
const resultRound = document.querySelector(".result-round");
const resultFinish = document.createElement('p');

export let game = (userChoice) => {
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