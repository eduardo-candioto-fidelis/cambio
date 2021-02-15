fetch('/cambio/datas/database.csv')
    .then(response => response.text())
    .then(csv => {
        const database = parseFromCsv(csv);
        drawTableCells(database);
    })
