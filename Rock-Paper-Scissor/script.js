const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const resultDisplay = document.getElementById('result');

let computerMove = '';
const randomNumber = Math.random();

rockButton.addEventListener('click',rock);
paperButton.addEventListener('click',paper);
scissorButton.addEventListener('click',scissor);

function compare(){
    if(randomNumber>0 && randomNumber<1/3){
        computerMove ="rock";
    }
    else if(randomNumber>1/3 && randomNumber<2/3){
        computerMove ="paper";
    }else if(randomNumber>2/3 && randomNumber<1){
        computerMove = "scissor";
    };
}

function rock(){

    compare();

    let finalResult = '';

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

function paper(){
    compare();

    let finalResult = '';

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
}

function scissor(){

    compare();

    let finalResult = '';

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
}



