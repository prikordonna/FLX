import {game} from './game';

export let userChoice = () => {
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    rock.addEventListener('click', () => {game("rock");})
    paper.addEventListener('click', () => {game("paper");})
    scissors.addEventListener('click', () => {game("scissors");})
}

export let computerOption = () => {
    const options = ["rock", "paper", "scissors"];
    let random = (Math.floor(Math.random() * 3));
    return options[random];
}