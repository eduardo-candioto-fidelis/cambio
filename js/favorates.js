fetch('/cambio/datas/database.csv')
    .then(response => response.text())
    .then(text => {
        const database = parseFromCsv(text);
        const favorates = readFavoreates();
        const findeds = favorates.map(code => searchCode(code, database));
        drawTableCells(findeds);
    });
