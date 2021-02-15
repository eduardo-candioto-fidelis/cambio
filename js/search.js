let database = null;

fetch('/cambio/datas/database.csv')
    .then(response => response.text())
    .then(text => {
        database = parseFromCsv(text);
    });

const search = document.querySelector('#search');

search.addEventListener('click', event => {
    const code = document.querySelector("#input").value.toUpperCase();

    const finded = searchCode(code, database);

    if (finded !== null) {
        drawTableCells([finded]);
    }

    event.preventDefault();
});