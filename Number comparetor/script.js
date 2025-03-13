const firstInput = document.getElementById('inputOne');
const secondInput = document.getElementById('inputTwo');
const compareButton = document.getElementById('buttonOne');
const resetButton = document.getElementById('buttonTwo');
const resultPlace = document.getElementById('display');


compareButton.addEventListener('click', compare);

function compare(){
    const firstValue = parseInt(firstInput.value);
    const secondValue = parseInt(secondInput.value);

    if(firstValue>secondValue){
        resultPlace.innerText = 'First number is greater than second number'
    }else if(firstValue<secondValue){
        resultPlace.innerText = 'First number is less than second number'
    }else{
        resultPlace.innerText = 'First number and second number are equal'
    }
}

resetButton.addEventListener('click',resetAll);

function resetAll(){
    firstInput.value = '';
    secondInput.value = '';
    resultPlace.innerText = '';
}