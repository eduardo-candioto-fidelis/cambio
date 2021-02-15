function parseFromCsv(text) {
    const database = text.split('\n')
        .map(line => {
            return line.split(';').splice(3, 6)
        });

    database.pop();

    return database;
}

function drawTableCells(database) {
    const tbody = document.querySelector("tbody");
    console.log(database);

    for (let line of database) {
        const row = document.createElement("tr");
        
        for (const cell of line) {
            const data = document.createElement("td");
            data.textContent = cell;
            row.appendChild(data);
        }

        const data = document.createElement('td');
        const button = createAddFavorates(line[0]);
        data.appendChild(button);
        row.appendChild(data);
        
        tbody.appendChild(row);
    }
}

function createAddFavorates(code) {
    const button = document.createElement('button');
    button.classList.add('btn');

    const favorates = readFavoreates();

    if (favorates.indexOf(code) == -1) {
        button.classList.add('btn-outline-success');
        button.textContent = 'Adicionar';
        button.addEventListener('click', _ => {
            const favorates = readFavoreates();    
            favorates.push(code);
            writeFavorates(favorates);
            location.reload();
        });
    } else {
        button.classList.add('btn-outline-danger');
        button.textContent = 'Remover';
        button.addEventListener('click', _ => {
            let favorates = readFavoreates();    
            favorates = favorates.filter(c => c != code);
            writeFavorates(favorates);
            location.reload();
        });
    }


    return button;
}

function readFavoreates() {
    let storage = localStorage.getItem('favorates');

    if (storage === null) {
        return [];
    } else {
        let string = atob(storage); 
        const favorates = JSON.parse(string);
        return favorates;
    }
}

function writeFavorates(favorates) {
    string = JSON.stringify(favorates);
    localStorage.setItem('favorates', btoa(string));
}

function searchCode(code, database) {
    for (const line of database) {
        if (line[0] == code) {
            return line;
        }
    }

    return null;
}