const inputField = document.getElementById('input-number');
const tableBody = document.getElementById('table-body');
const generateButton = document.getElementById('generate');


generateButton.addEventListener('click', function(){
    const number = parseFloat(inputField.value);
    tableBody.innerHTML ='';
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
    const cells = [];
    for(let i = 0; i<=5; i++){
        const cell = document.createElement('td');
        cells.push(cell);
    }
    

    cells[0].innerText = number;
    cells[1].innerText = "x";
    cells[2].innerText = i;
    cells[3].innerText = "=";
    cells[4].innerText = number*i;

    for (let i=0 ; i<cells.length ; i++){
        tableRow.appendChild(cells[i]);
    }


    return tableRow;
}