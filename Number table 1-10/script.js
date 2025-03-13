
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
    

    const rowData = [number," x ", row, " = ", number * row];
    rowData.forEach(function(data){
        const cell = document.createElement('td');
        cell.innerText = data;
        cells.push(cell);
    });

    const tableRow = document.createElement('tr');

    cells.forEach(function(cell){
        tableRow.appendChild(cell);
    });

    return tableRow;
}