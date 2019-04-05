"use strict";var checkResult=function(e,r){return"scissors"===e&&"paper"===r||"paper"===e&&"rock"===r||"rock"===e&&"scissors"===r?(userScore++,win()):e===r?draw():(computerScore++,lose())},whoWins=function(e,r){return r<e?win():e<r?lose():draw()},userScore=0,computerScore=0,round=0,result=document.querySelector(".results"),resultRound=document.querySelector(".result-round"),resultFinish=document.createElement("p"),userChoice=function(){var e=document.querySelector(".rock"),r=document.querySelector(".paper"),n=document.querySelector(".scissors");e.addEventListener("click",function(){game("rock")}),r.addEventListener("click",function(){game("paper")}),n.addEventListener("click",function(){game("scissors")})};userChoice();var computerOption=function(){return["rock","paper","scissors"][Math.floor(3*Math.random())]},game=function(e){if(round<3){round++;var r=computerOption(),n=checkResult(e,r);resultRound.innerHTML="Round ".concat(round,", ").concat(e," vs. ").concat(r,", ").concat(n),3<=round&&(resultFinish.className="result-finish",resultFinish.innerHTML="".concat(whoWins(userScore,computerScore),"  With results [ ").concat(userScore," : ").concat(computerScore," ]"),result.appendChild(resultFinish))}},resetAll=function(){document.querySelector(".reset").addEventListener("click",function(){round=computerScore=userScore=0,resultRound.innerHTML="",resultFinish.innerHTML=""})};resetAll();var win=function(){return"You've WON!"},lose=function(){return"You’ve LOST!"},draw=function(){return"It's a DRAW!"};