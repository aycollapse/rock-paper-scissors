//ROCK PAPER SCISSORS
const choices = ["rock","paper","scissors"];
let playerScore=0,computerScore=0;
let playerChoice= "";
let winner="";
let roundsMax=3;

function endgame()
{
    
}

//computer random choice
function getComputerChoice()
{
    return choices[Math.floor(Math.random()*choices.length)];
}

//round winner
function getWinner(p1,p2)   
{
    let result;
    if (p1===p2)
    {
        //draw
        result="It's a DRAW!";
    }
    else if ((p1 === "rock" && p2==="scissors") || (p1 === "scissors" && p2==="paper") || (p1 === "paper" && p2==="rock"))
    {
        //human wins
        result="Player WINS!"
        playerScore+=1;
    }
    else
    {
        //computer wins
        result="Computer WINS! :("
        computerScore+=1;
    }
    document.getElementById("resultDisplay").textContent=result;
    document.getElementById("playerScoreDisplay").textContent=playerScore;
    document.getElementById("computerScoreDisplay").textContent=computerScore;
}

//single round
function playRound(playerChoice)
{
    let computerChoice = getComputerChoice();
    winner = (getWinner(playerChoice,computerChoice)+"\nPlayer: "+playerScore+"\nComputer: "+computerScore);
    return winner;
}

//main
function game(e)
{
    if(Math.max(playerScore,computerScore)<roundsMax)
        {
            console.log(e.target.id);
            console.log(getComputerChoice());
            getWinner(e.target.id,getComputerChoice());
            console.log(playerScore+" "+computerScore);
        }
    if(playerScore==roundsMax)
        {
            document.getElementById("resultDisplay").textContent="The final winner is the PLAYER!!"
        }
    if(computerScore==roundsMax)
        {
            document.getElementById("resultDisplay").textContent="The final winner is the COMPUTER :("
        }
    //end


}

//start
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click",game));







