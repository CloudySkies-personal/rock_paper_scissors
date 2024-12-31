function getComputerChoice(min = 1, max){
   let range = (max - min) + 1
   return Math.floor(Math.random()*range + min)
}

//console.log(getComputerChoice(0, 2))

function getUserChoice(){
    console.log("Rock, Paper, Scissors!")
    let choice = prompt ('Type "Rock", "Paper",or "Scissors":').toLowerCase()
    console.log(choice)
    return (choice)
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let comp_alias = "";

    switch (computerChoice){
        case 1:
            comp_alias = "rock";
            break;
        case 2:
            comp_alias = "paper";
            break;
        case 3:
            comp_alias = "scissors";
            break;
    }
    console.log(`human: ${humanChoice}
computer: ${comp_alias}`)
    switch (humanChoice){
        case "rock":
            humanChoice = 1;
            break;
        case "paper":
            humanChoice = 2;
            break;
        case "scissors":
            humanChoice = 3;
            break;
    }
    if ((humanChoice > computerChoice) || (humanChoice == 1 && computerChoice == 3)){
        
       console.log("You win!")
       humanScore+=1
    }

    else if (humanChoice == computerChoice){
       console.log("tie")
    }

    else {
        console.log("lose :(")
    }
}

playRound(getUserChoice(), getComputerChoice(1,3))