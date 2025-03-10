const inputField = document.getElementById('input-number');
const tableBody = document.getElementById('table-body');
const generateButton = document.getElementById('generate');


generateButton.addEventListener('click', function(){
    const number = parseFloat(inputField.value);
    generateTable(number);
});

function generateTable(number){
    for(let i =1; i<=10; i++){

        const tableRow = generateRow(number,i);
        tableBody.appendChild(tableRow);
    }
} 


function generateRow(number, i){
    const tableRow = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    const cell4 = document.createElement('td');
    const cell5 = document.createElement('td');

    cell1.innerText = number;
    cell2.innerText = "x";
    cell3.innerText = i;
    cell4.innerText = "=";
    cell5.innerText = number*i;

    tableRow.appendChild(cell1);
    tableRow.appendChild(cell2);
    tableRow.appendChild(cell3);
    tableRow.appendChild(cell4);
    tableRow.appendChild(cell5);


    return tableRow;
}