//Computer Choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber >= 0 && randomNumber <= 3) {
        return "rock";
    } else if (randomNumber >= 4 && randomNumber <= 6) {
        return "paper";
    } else {
        return "scissor";
    }
}

//Human Choice
    let humanSelection = "";
    let rockButton = document.getElementById("rock");
    let paperButton = document.getElementById("paper");
    let scissorButton = document.getElementById("scissor");
    let statusDisplay = document.getElementById("status");
    let yourChoice = document.getElemenyById("yourChoice");
    let yourScore = document.getElemenyById("yourScore");
    let computerChoice = document.getElemenyById("computerChoice");
    let computerScore = document.getElemenyById("computerScore");
    

    let round = 0;
    let humanScore = 0;
    let computerScore = 0;

    rockButton.addEventListener("click", ()=> {
       humanSelection = "rock";
       console.log(humanSelection);
       play();
       return
    })

    paperButton.addEventListener("click", ()=> {
        humanSelection = "paper";
        console.log(humanSelection);
        play();
        return
     })

    scissorButton.addEventListener("click", ()=> {
        humanSelection = "scissor";
        console.log(humanSelection);
        play();
        return
     })
   

 function play(humanChoice,computerChoice) {
    let computerSelection = getComputerChoice();
    function print(){
        console.log(`human: ${humanSelection} computer: ${computerSelection}`);
        let statusMsg = `human: ${humanSelection} computer: ${computerSelection}`;
        statusDisplay.innerText = statusMsg;
        yourChoice.innerText = humanSelection;
        yourScore.innerText = humanScore;
        computerChoice.innerText = computerSelection;
        computerScore.innerText = computerScore;
    }
        
    if (humanSelection === "rock" && computerSelection === "rock") {
        console.log("Tie!")
        print();
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose!")
        computerScore = computerScore + 1;
        print();
    } else if (humanSelection === "rock" && computerSelection === "scissor") {
        console.log("You Win!")
        humanScore = humanScore + 1;
        print();
    } else if (humanSelection === "paper" && computerSelection === "paper") {
        console.log("Tie!")
        print();
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("You Win!")
        humanScore = humanScore + 1;
        print();
    } else if (humanSelection === "paper" && computerSelection === "scissor") {
        console.log("You Lose!")
        computerScore = computerScore + 1;
        print();
    } else if (humanSelection === "scissor" && computerSelection === "scissor") {
        console.log("Tie!")
        print();
    } else if (humanSelection === "scissor" && computerSelection === "paper") {
        console.log("You Win!")
        humanScore = humanScore + 1;
        print();
    } else if (humanSelection === "scissor" && computerSelection === "rock") {
        console.log("You Lose!")
        computerScore = computerScore + 1;
        print();
    }
     
    round = round + 1;
    if (round === 5) {
    if(humanScore > computerScore) {
        alert("You Win")
            } else if (humanScore > computerScore) {
        alert("You Lose")
    }
 }






