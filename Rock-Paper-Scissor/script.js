const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const resultDisplay = document.getElementById('result');



rockButton.addEventListener('click',rock);
paperButton.addEventListener('click',paper);
scissorButton.addEventListener('click',scissor);

function compare(){

    let computerMove = '';
    const randomNumber = Math.random();

    if(randomNumber>0 && randomNumber<1/3){
        computerMove ="rock";
    }
    else if(randomNumber>1/3 && randomNumber<2/3){
        computerMove ="paper";
    }else if(randomNumber>2/3 && randomNumber<1){
        computerMove = "scissor";
    };

    return computerMove;
}

function rock(){
    playGame('rock');
}

function paper(){
    playGame('paper');
}

function scissor(){
    playGame('scissor');
}


function playGame(playerMove){

    const computerMove = compare();
    let finalResult = '';

    if(playerMove === 'scissor'){
        if(computerMove==="scissor"){
            finalResult = "Tie"
            resultDisplay.innerText = `You picked Scissor , computer picked ${computerMove} and Result : ${finalResult}`
        }else if(computerMove==="paper"){
            finalResult = "You Win"
            resultDisplay.innerText = `You picked Scissor , computer picked ${computerMove} and Result : ${finalResult}`
        }else if(computerMove === "rock"){
            finalResult = "You Loose"
            resultDisplay.innerText = `You picked Scissor , computer picked ${computerMove} and Result : ${finalResult}`
        }
    }else if(playerMove === 'paper'){
        if(computerMove==="paper"){
            finalResult = "Tie"
            resultDisplay.innerText = `You picked Paper , computer picked ${computerMove} and Result : ${finalResult}`
        }else if(computerMove==="scissor"){
            finalResult = "You loose"
            resultDisplay.innerText = `You picked Paper , computer picked ${computerMove} and Result : ${finalResult}`
        }else if(computerMove === "rock"){
            finalResult = "You win"
            resultDisplay.innerText = `You picked Paper , computer picked ${computerMove} and Result : ${finalResult}`
        }
    }else if(playerMove === 'rock'){
        if(computerMove==="rock"){
            finalResult = "Tie"
            resultDisplay.innerText = `You picked Rock , computer picked ${computerMove} and Result : ${finalResult}`
        }else if(computerMove==="paper"){
            finalResult = "You loose"
            resultDisplay.innerText = `You picked Rock , computer picked ${computerMove} and Result : ${finalResult}`
        }else if(computerMove === "scissor"){
            finalResult = "You win"
            resultDisplay.innerText = `You picked Rock , computer picked ${computerMove} and Result : ${finalResult}`
        }
    }
    
}



