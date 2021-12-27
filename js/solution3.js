'use strict';
//Task 3
const table = document.getElementById('table');

function generateTable(row, cols) {
    let num = 0;
    for (let i = 0; i < row; i++) {
        const tr = document.createElement('tr');

        for (let c = 1; c <= cols; c++) {
            const td = document.createElement('td');
            ++num;
            td.innerHTML = num;
            tr.append(td);
        }
        table.append(tr);
    }

}

generateTable(10, 3);