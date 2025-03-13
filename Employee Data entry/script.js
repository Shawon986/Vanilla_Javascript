const employees = [
    {
        id: 101,
        name: "Shawon",
        position: "Student",
        department: "CSE"
    },
    {
        id: 202,
        name: "Shozol",
        position: "Businessman",
        department: "Chemical"
    },
    {
        id: 303,
        name: "Shovon",
        position: "Student",
        department: "Textile"
    }
];

const tableBody = document.getElementById('tableBody');

const renderEmployeeData = (employees)=>{
    employees.forEach((employee)=>{
        const employeeRow = getEmployeeRow(employee);
        tableBody.appendChild(employeeRow);
    })
};

const getEmployeeRow = (employee)=>{
    const columnNames = Object.keys(employee);

    const employeeRow = document.createElement('tr');
    columnNames.forEach((columnName)=>{
        const column = document.createElement('td');
        column.innerText = employee[columnName];
        employeeRow.appendChild(column);
    });
    return employeeRow;
}

renderEmployeeData(employees);