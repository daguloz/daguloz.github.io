/*
 * Autor: Daniel Gutiérrez
 * 18/11/2014
 *
 */

var arrayMat, array_A, array_B, array_C;

window.onload = function () {

    'use strict';

    var array, bAdd, bCreateA, bCreateB, bMultiply, bSubtract, bTraspondA, bTraspondB, cols, createArray, i, info, operations, rows;

    function showArrays() {
        array = document.getElementById('array');
        array.innerHTML = '';

        operations = document.getElementById('operations');
        operations.style.display = 'block';

        if (typeof array_A != 'undefined')
            array.innerHTML += array_A.getHTMLTable('A');
        if (typeof array_B != 'undefined')
            array.innerHTML += array_B.getHTMLTable('B');
        if (typeof array_C != 'undefined')
            array.innerHTML += array_C.getHTMLTable('Resultado');
    }

    bCreateA = document.getElementById('bCreateA');
    bCreateA.onclick = function () {
        createArray('A');
    }
    bCreateB = document.getElementById('bCreateB');
    bCreateB.onclick = function () {
        createArray('B');
    }

    function createArray(index) {
        cols = parseInt(document.getElementById('cols').value);
        rows = parseInt(document.getElementById('rows').value);

        if (!isNaN(rows) && !isNaN(cols)) {
            arrayMat = new ArraysMatematicos(rows, cols);
            if (index == 'A')
                array_A = arrayMat;
            else if (index == 'B')
                array_B = arrayMat;
            else
                array_C = arrayMat;

            showMsg('Matriz ' + index + ' creada');
            showArrays();
        } else {
            showMsg('Introduce valores válidos!');
        }
    };

    bAdd = document.getElementById('bAdd');
    bAdd.onclick = function () {
        if ((typeof array_A != 'undefined') && (typeof array_B != 'undefined')) {
            array_C = array_A.sumar(array_B);
            if (array_C != false) {
                showMsg('Matrices sumadas');
                showArrays();
            }
            else {
                showMsg('Error! Las matrices no tienen el mismo tamaño!');
            }
        }
        else {
            showMsg('Necesitas dos matrices para sumarlas.')
        }
    };

    bSubtract = document.getElementById('bSubtract');
    bSubtract.onclick = function () {
        if ((typeof array_A != 'undefined') && (typeof array_B != 'undefined')) {
            array_C = array_A.restar(array_B);
            if (array_C != false) {
                showMsg('Matrices restadas');
                showArrays();
            }
            else {
                showMsg('Error! Las matrices no tienen el mismo tamaño!');
            }
        }
        else {
            showMsg('Necesitas dos matrices para restarlas.')
        }
    };

    bTraspondA = document.getElementById('bTraspondA');
    bTraspondA.onclick = function () {
        if (typeof array_A != 'undefined') {
            array_C = array_A.trasponer();
            if (array_C != false) {
                showMsg('Matriz A Traspuesta');
                showArrays();
            }
            else {
                showMsg('Error!');
            }
        }
        else {
            showMsg('No existe la matriz A!')
        }
    };

    bTraspondB = document.getElementById('bTraspondB');
    bTraspondB.onclick = function () {
        if (typeof array_B != 'undefined') {
            array_C = array_B.trasponer();
            if (array_C != false) {
                showMsg('Matriz B Traspuesta');
                showArrays();
            }
            else {
                showMsg('Error!');
            }
        }
        else {
            showMsg('No existe la matriz B!')
        }
    };

    bMultiply = document.getElementById('bMultiply');
    bMultiply.onclick = function () {
        if ((typeof array_A != 'undefined') && (typeof array_B != 'undefined')) {
            array_C = array_A.multiplicar(array_B);
            if (array_C != false) {
                showMsg('Matrices multiplicadas');
                showArrays();
            }
            else {
                showMsg('Error! Las matrices no tienen el tamaño adecuado!');
            }
        }
        else {
            showMsg('Necesitas dos matrices para multiplicarlas.')
        }
    };

    function showMsg (msg) {
        var info;
        info = document.getElementById('info');
        info.innerHTML = msg;
    }
};