
//Start Game
function playGame(){
    //declare score
    let humanScore = 0;
    let computerScore = 0;

//Computer Choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);
    //Rock
    if (randomNumber >= 0 && randomNumber <= 3) {
        return "rock";
    //Paper
    } else if (randomNumber >= 4 && randomNumber <= 6) {
        return "paper";
    //Scissors
    } else {
        return "scissors";
    }
}

//Human Choice
function getHumanChoice() {
    let choice = prompt("Choose : rock, paper, scissors");
    //check prompt
    // if (choice != "rock" || choice != "paper" || choice != "scissors") {
    //     console.log(choice);
    //     choice = prompt("Please type only from the following option : rock, paper, scissors");
    // } else {
    //     console.log(choice);
    //     return choice;
    // }
    return choice.toLowerCase();
}


    //Play Round
    function playRound(humanChoice,computerChoice) {
        if (humanSelection === "rock" && computerChoice ==="paper") {
            computerScore++
            console.log('You lose !, paper beat rock');
        } else if (humanSelection === "scissors" && computerChoice ==="rock") {
            computerScore++
            console.log('You lose !, rock beat scissors')
        } else if (humanSelection === "paper" && computerChoice ==="scissors") {
            humanScore++
            console.log('You lose !, scissors beat paper')
        } else if (humanSelection === "paper" && computerChoice ==="rock") {
            humanScore++
            console.log('You win !, paper beat rock')
        } else if (humanSelection === "rock" && computerChoice ==="scissors") {
            humanScore++
            console.log('You win !, rock beat scissors')
        } else if (humanSelection === "scissors" && computerChoice ==="paper") {
            humanScore++
            console.log('You win !, scissors beat paper')
        } else if (humanSelection === "rock" && computerChoice ==="rock") {
            console.log('Tie ! You both choose rock')
        } else if (humanSelection === "paper" && computerChoice ==="paper") {
            console.log('Tie ! You both choose paper')
        } else if (humanSelection === "scissors" && computerChoice ==="scissors") {
            console.log('Tie ! You both choose scissors')
        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    
    // if (humanScore !== 5 || computerScore !== 5) {
    //    playRound(humanSelection,computerSelection)
    // } else if (humanScore === 5) {
    // console.log("You WIn");
    // } else if (computerScore === 5)   {
    // console.log("You Lose")
    // }
   
    // console.log("Your choice : "+ humanSelection);
    // console.log("Computer choice : "+ computerSelection);
    // console.log("Your Score: "+ humanScore);
    // console.log("Computer Score : "+ computerScore);

    // if (humanScore !== 5 || computerScore !== 5) {
    //     playRound(getHumanChoice(),getComputerChoice())
    //  } else if (humanScore === 5) {
    //  console.log("You WIn");
    //  } else if (computerScore === 5)   {
    //  console.log("You Lose")
    //  }

    function result() {
        console.log("Your choice : "+ humanSelection);
        console.log("Computer choice : "+ computerSelection);
        console.log("Your Score: "+ humanScore);
        console.log("Computer Score : "+ computerScore);
    }

    playRound(humanSelection,computerSelection)
    result();


    while(humanScore !== 5 || computerScore !== 5) {
    playRound(humanSelection,computerSelection);

    result();

    if (humanScore === 5) {
        console.log("CONGRATULATIONS YOU WIN");
        return
        } else if (computerScore === 5)   {
        console.log("UNFORTUNATELY YOU LOSE")
        return
        }
        
    } 


}


    
