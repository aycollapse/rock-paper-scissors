//ROCK PAPER SCISSORS
const choices = ["rock","paper","scissors"];
let playerScore=0,computerScore=0;
let roundCounter;

//computer random choice
function getComputerChoice()
{
    return choices[Math.floor(Math.random()*choices.length)];
}
//round result
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
    return result;
}
//round
function playRound()
{
    let playerChoice = prompt("choose between rock, paper or scissors: ").toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(getWinner(playerChoice,computerChoice)+"\nPlayer: "+playerScore+"\nComputer: "+computerScore);
}

let roundsMax = prompt("Winning points: ");
while(Math.max(playerScore,computerScore)<roundsMax)
{
    playRound();
}
if(playerScore==roundsMax)
{
    console.log("The final winner is the PLAYER!!")
}
else
{
    console.log("The final winner is the COMPUTER!! :(")
}