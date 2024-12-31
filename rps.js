function getComputerChoice(min = 1, max){
   let range = (max - min) + 1
   return Math.floor(Math.random()*range + min)
}

//console.log(getComputerChoice(0, 2))
console.log("Rock, Paper, Scissors!")
function getUserChoice(){
    
    let choice = prompt ('Type "Rock", "Paper",or "Scissors":').toLowerCase()
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

    if (humanChoice ==3 && computerChoice == 1){
        console.log("lose :(")
        computerScore++
    }
    else if ((humanChoice > computerChoice) || (humanChoice == 1 && computerChoice == 3)){
        
       console.log("You win!")
       humanScore++
    }

    else if (humanChoice == computerChoice){
       console.log("tie")
    }

    else {
        console.log("lose :(")
        computerScore++
    }
}

let rounds_played = 0;

function playGame(rounds_played){
    while (rounds_played < 5){
        playRound(getUserChoice(), getComputerChoice(1, 3))
        rounds_played ++;
    }   
}

playGame(rounds_played)
console.log(`human score: ${humanScore}
computer score: ${computerScore}`);

if (computerScore > humanScore){
    console.log("you lose :(")
}

else  if (computerScore < humanScore){
    console.log("you win!")
}

else {
    console.log("it's a tie!")
}