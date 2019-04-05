let userScore = 0;
let computerScore = 0;
let round = 0;
const result = document.querySelector(".results");
const resultRound = document.querySelector(".result-round");
const resultFinish = document.createElement('p');

let userChoice = () => {
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    rock.addEventListener('click', () => {game("rock");})
    paper.addEventListener('click', () => {game("paper");})
    scissors.addEventListener('click', () => {game("scissors");})
}
userChoice();

let computerOption = () => {
    const options = ["rock", "paper", "scissors"];
    let random = (Math.floor(Math.random() * 3));
    return options[random];
}
