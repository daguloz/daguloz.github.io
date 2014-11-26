/*
 * Autor: Daniel Gutiérrez
 * 18/11/2014
 *
 * Mediante prototype, agrega los métodos sumar, restar, trasponer y multiplicar
 * a la clase ArraysMatematicos. Recuerda que el estado de un array deberían de
 * ser los elementos.
 *  
 * Recuerda las restricciones y posibilidades de un Array:
 * 1. Sobre las dimensines de los arrays implicados
 *    (unidimensional, bidimensional...)
 * 2. Sobre las longitudes de los arrays implicados (1 en adelante)
 * 3. Sobre los contenidos de los arrays implicados (numéricos)
 * 4. Podemos rellenar un Array con valores aleatorios o directamente desde
 *    teclado.
 * Una vez creada la clase, demuestra su funcionamiento en una página bien
 * diseñada. Evita las cajas de texto y hazla lo más dinámica posible.
 */

'use strict';

var ArraysMatematicos;

ArraysMatematicos = function (rows, cols) {
    var i;
    this.rows = this.createArray(rows);
    for (i = 0; i < this.rows.length; i += 1) {
        this.rows[i] = this.createArray(cols);
    }
};

ArraysMatematicos.prototype.sumar = function (arr) {
    var i, j, newArray;
    if (arr.rows.length !== this.rows.length) {
        return false;
    }
    if (arr.rows[0].length !== this.rows[0].length) {
        return false;
    }

    newArray = new ArraysMatematicos(this.rows.length, this.rows[0].length)
    for (i = 0; i < this.rows.length; i = i + 1) {
        for (j = 0; j < this.rows[i].length; j = j + 1) {
            newArray.rows[i][j] = this.rows[i][j] + arr.rows[i][j];
        }
    }

    return newArray;
};

ArraysMatematicos.prototype.restar = function (arr) {
    var i, j, newArray;
    if (arr.rows.length !== this.rows.length) {
        return false;
    }
    if (arr.rows[0].length !== this.rows[0].length) {
        return false;
    }

    newArray = new ArraysMatematicos(this.rows.length, this.rows[0].length)
    for (i = 0; i < this.rows.length; i = i + 1) {
        for (j = 0; j < this.rows[i].length; j = j + 1) {
            newArray.rows[i][j] = this.rows[i][j] - arr.rows[i][j];
        }
    }

    return newArray;
};

ArraysMatematicos.prototype.trasponer = function () {
    var i, j, newArray;

    newArray = new ArraysMatematicos(this.rows[0].length, this.rows.length)
    for (i = 0; i < this.rows.length; i = i + 1) {
        for (j = 0; j < this.rows[i].length; j = j + 1) {
            newArray.rows[j][i] = this.rows[i][j];
        }
    }

    return newArray;
};

ArraysMatematicos.prototype.multiplicar = function (arr) {
    var elem, i, j, k, newArray;

    newArray = new ArraysMatematicos(this.rows.length, arr.rows[0].length)

    for (i = 0; i < this.rows.length; i = i + 1) {
        for (j = 0; j < arr.rows[0].length; j = j + 1) {
            elem = 0;
            for (k = 0; k < this.rows[0].length; k = k + 1) {
                elem += arr.rows[k][j] * this.rows[i][k];
            }
            newArray.rows[i][j] = elem;
        }
    }

    return newArray;
};

// Creates a random array with the specified size.
ArraysMatematicos.prototype.createArray = function (size) {
    var arr, i;
    arr = [];
    for (i = 0; i < size; i = i + 1) {
        arr[i] = Math.round((Math.random() * 10));
    }
    return arr;
};

ArraysMatematicos.prototype.getHTMLTable = function (index) {
    var content, i, j;
    content = '<table><caption>Matriz ' + index + '</caption>';
    for (i = 0; i < this.rows.length; i += 1) {
        content += '<tr>';
        for (j = 0; j < this.rows[i].length; j += 1) {
            content += '<td>' + this.rows[i][j] + '</td>';
        }
        content += '</tr>';
    }

    content += '</table>';

    return content;
};
