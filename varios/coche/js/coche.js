
var cars = [], content, i, j, property, row, table, text;

// Car object definition
function Coche(brand, model, year) {
    'use strict';

    this.brand = brand;
    this.model = model;
    this.year = year;
}

function newElement(element, value) {
    'use strict';
    var cell;
    cell = document.createElement(element);
    cell.appendChild(document.createTextNode(value));
    return cell;
}

// Add car objects
cars.push(new Coche('BMW', 'Serie 7', 1977));
cars.push(new Coche('Seat', 'Córdoba', 1993));
cars.push(new Coche('Ferrari', 'Testarossa', 1984));
cars.push(new Coche('Fiat', '500', 1996));

// table element
table = document.createElement('table');

// header row
row = document.createElement('tr');
row.appendChild(newElement('th', 'Marca'));
row.appendChild(newElement('th', 'Modelo'));
row.appendChild(newElement('th', 'Año de fabricación'));
table.appendChild(row);

// car rows
for (i = 0; i < cars.length; i = i + 1) {
    row = document.createElement('tr');

    // Generate td elements from object
    for (property in cars[i]) {
        if (cars[i].hasOwnProperty(property)) {
            row.appendChild(newElement('td', cars[i][property]));
        }
    }

    table.appendChild(row);
}

content = document.getElementById('content');
content.appendChild(table);