//Computer Choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);
    //Rock
    if (randomNumber >= 0 && randomNumber <= 3) {
        return "rock";
    //Paper
    } else if (randomNumber >= 4 && randomNumber <= 6) {
        return "paper";
    //scissor
    } else {
        return "scissor";
    }
}

//Human Choice
function getHumanChoice() {
    //prompt user
    do {
        choice = prompt("Please Choose : rock, paper, scissor").toLowerCase();
    }
    
    //promt again if user type invalid choice
     while (choice !== "rock" && choice !== "paper" && choice !== "scissor");
   
    return choice;
}

playGame();

//Start Game
function playGame(){
//declare score
let humanScore = 0;
let computerScore = 0;

//Play Round
function playRound(humanChoice,computerChoice) {
    if (humanSelection === "rock" && computerChoice ==="paper") {
        computerScore++
        console.log('You lose !, paper beat rock');
        alert('You lose !, paper beat rock');
    } else if (humanSelection === "scissor" && computerChoice ==="rock") {
        computerScore++
        console.log('You lose !, rock beat scissor')
        alert('You lose !, rock beat scissor')
    } else if (humanSelection === "paper" && computerChoice ==="scissor") {
        humanScore++
        console.log('You lose !, scissor beat paper')
        alert('You lose !, scissor beat paper')
    } else if (humanSelection === "paper" && computerChoice ==="rock") {
        humanScore++
        console.log('You win !, paper beat rock')
        alert('You win !, paper beat rock')
    } else if (humanSelection === "rock" && computerChoice ==="scissor") {
        humanScore++
        console.log('You win !, rock beat scissor')
        alert('You win !, rock beat scissor')
    } else if (humanSelection === "scissor" && computerChoice ==="paper") {
        humanScore++
        console.log('You win !, scissor beat paper')
        alert('You win !, scissor beat paper')
    } else if (humanSelection === "rock" && computerChoice ==="rock") {
        console.log('Tie ! You both choose rock')
        alert('Tie ! You both choose rock')
    } else if (humanSelection === "paper" && computerChoice ==="paper") {
        console.log('Tie ! You both choose paper')
        alert('Tie ! You both choose paper')
    } else if (humanSelection === "scissor" && computerChoice ==="scissor") {
        console.log('Tie ! You both choose scissor')
        alert('Tie ! You both choose scissor')
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

//round counter
let round = 0;

//print result in console
function result() {
    console.log("Your choice : "+ humanSelection);
    console.log("Computer choice : "+ computerSelection);
    console.log("Your Score: "+ humanScore);
    console.log("Computer Score : "+ computerScore);
    console.log("Game Round : " + round);
    alert("Your choice : " + humanSelection + " Computer choice : "+ computerSelection);
    alert("Your Score: " + humanScore + " Computer Score : "+ computerScore);

}

//PLay Game until 5 round
while(round !== 5) {
playRound(humanSelection = getHumanChoice(),computerSelection = getComputerChoice());
round++
result();
}
//Define who wins based on score
if (humanScore > computerScore) {
    console.log("CONGRATULATIONS YOU WIN")
    alert("CONGRATULATIONS YOU WIN");
    return
    } else if (computerScore > humanScore)  {
    console.log("UNFORTUNATELY YOU LOSE")
    alert("UNFORTUNATELY YOU LOSE");
    return
    } else {
        console.log("ITS DRAW")
    alert("ITS DRAW");
    }
    
} 
    
