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
    } else if (randomNumber >= 7 && randomNumber <= 9) {
        return "scissors";
    }
}

//Human Choice
function getHumanChoice() {
    let choice = prompt("Choose : rock, paper, scissors");
    alert(choice.toLowerCase());
}

    
