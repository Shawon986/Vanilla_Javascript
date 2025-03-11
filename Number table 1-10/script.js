
const generateButton = document.getElementById('generate');
const firstRow = document.getElementById('first-row');
const secondRow = document.getElementById('second-row');


generateButton.addEventListener('click', function(){

    firstRow.innerHTML ='';
    secondRow.innerHTML ='';

    for(let number = 1; number<=10; number++){
        const numberTable = getTable(number);
        
        if(number<=5){
            firstRow.appendChild(numberTable);
        }else{
            secondRow.appendChild(numberTable);
        }

        
    }
});

function getTable(number){
    
    const numberTable = document.createElement('table');
    numberTable.classList = 'table-auto border border-slate-700 w-full';
    const tableBody = document.createElement('tbody');

    for(let row = 1; row<=10; row++){
        const tableRow = getTableRow(number, row);
        tableBody.appendChild(tableRow);
    }



    numberTable.appendChild(tableBody);

    return numberTable;
};


function getTableRow(number,row){
    const cells =[];
    for(let cell = 1; cell<=5; cell++){
        const cell = document.createElement('td');
        cells.push(cell);
    }

    cells[0].innerText = number;
    cells[1].innerText = " x ";
    cells[2].innerText = row;
    cells[3].innerText = " = ";
    cells[4].innerText = number * row;

    const tableRow = document.createElement('tr');

    for(let cell = 0; cell < cells.length; cell++){
        tableRow.appendChild(cells[cell]);
    }

    return tableRow;
}