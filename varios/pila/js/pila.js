/*
 * Autor: Daniel Gutiérrez
 * 18/11/2014
 *
 * Implementa las operaciones básicas de una estructura de datos pila (stack). 
 * Recuerda que una pila es una estructura LIFO donde el último elemento en 
 * entrar es el primero en salir. Los métodos y atributos a implementar son:
 *
 * - Introducir elemento en la pila apilar(elemento)
 * - Sacar elemento de la pila extraer() que devuelva el objeto.
 * - Cima de la pila, que devuelve el elemento de la cima de la pila. (cima())
 * - Propiedad cima de la pila, que siempre almacenará el último elemento.
 *
 * En la clase Array de JavaScript implementa los métodos necesarios de manera 
 * eficiente (prototype), y recuerda hacer las pruebas precisas.
 *
 * Para ello crea una pila mediante formularios donde se añadan elementos del 
 * tipo Persona (nombre, apellidos, DNI y mostrar en una ventana nueva 
 * (mostrar())) y se invoquen a todos los métodos.
 *
 * La interacción con el usuario se realizará a base de formularios lo más
 * amigables posible.
 *
 */

var Person, bCreate, bExtract, bShowPush, bPush, bTop, form, persons, result;
window.onload = function () {

    'use strict';

    // Extend Array object functionality
    Array.prototype.apilar = function (element) {
        this.push(element);
    };

    Array.prototype.extraer = function () {
        return this.pop();
    };

    Array.prototype.cima = function () {
        if (this.size === 0) {
            return false;
        }
        return this[this.length - 1];
    };

    // Array.prototype.cima = this[this.length - 1];

    // Define Person object
    Person = function (name, last, dni) {
        this.name = name;
        this.last = last;
        this.dni = dni;
    };

    Person.prototype.toString = function () {
        var p, ret = '';
        for (p in this) {
            if (this.hasOwnProperty(p)) {
                ret += p + ': ' + this[p] + ', ';
            }
        }
        return ret;
    };

    // Updates the HTML in the page
    function updateResult(msg) {
        var i, p;

        result = document.getElementById('result');
        result.style.display = 'block';

        if (msg) { result.innerHTML = msg + '<br />'; }

        if (persons.cima()) {
            result.innerHTML += '<br /><strong>Contenidos:</strong><br/>';
            for (i = 0; i < persons.length; i = i + 1) {
                result.innerHTML += i + ': ' + '<br />';
                for (p in persons[i]) {
                    if (persons[i].hasOwnProperty(p)) {
                        result.innerHTML += p + ': ' + persons[i][p] + '<br />  ';
                    }
                }
            }
        } else {
            result.innerHTML += '<br /><strong>Contenidos:</strong><br/>Array vacío.';
        }
    }

    // Open a new window with the push form
    function mostrar() {
        var left, top;
        top = (screen.height / 2) - (350 / 2);
        left = (screen.width / 2) - (400 / 2);
        form = window.open('', '', 'top=' + top + ',left=' + left + ',width=400,height=350');
        form.document.open();
        form.document.write('<!DOCTYPE html><html><head>' +
                '<meta charset="utf-8" /><title>Apilar elemento</title>' +
                '<link rel="stylesheet" href="css/style.css"></head>' +
                '<div id="content">' +
                '<h2>Apilar elemento</h2>' + 
                '<label for="name">Nombre:</label>' +
                '<input type="text" id="name" required />' +
                '<label for="last">Apellidos:</label>' +
                '<input type="text" id="last" required />' +
                '<label for="dni">DNI:</label>' +
                '<input type="text" id="dni" required />' +
                '<button id="bPush">Apilar</button>' +
                '</div>' +
                '</ul></body></html>');

        form.document.close();

        bPush = form.document.getElementById('bPush');
        bPush.onclick = function () {
            var dni, last, name;
            dni = form.document.getElementById('dni').value;
            last = form.document.getElementById('last').value;
            name = form.document.getElementById('name').value;

            persons.apilar(new Person(name, last, dni));
            updateResult('<strong>Añadiendo:</strong><br/>' + persons.cima());
            form.window.close();
        };
    }

    // Buttons

    bCreate = document.getElementById('bCreate');
    bCreate.onclick = function () {
        var buttons;

        buttons = document.getElementById('buttons');
        buttons.style.display = 'block';

        this.style.display = 'none';

        persons = [];

        mostrar();
        updateResult('Creada una pila vacía.');
    };

    bExtract = document.getElementById('bExtract');
    bExtract.onclick = function () {
        if (persons.cima()) {
            updateResult('<strong>Extrayendo:</strong><br/>' + persons.extraer());
        } else {
            updateResult('La pila está vacía.');
        }
    };

    bTop = document.getElementById('bTop');
    bTop.onclick = function () {
        if (persons.cima()) {
            updateResult('Cima: ' + persons.cima());
        } else {
            updateResult('La pila está vacía.');
        }
    };

    bShowPush = document.getElementById('bShowPush');
    bShowPush.onclick = function () {
        mostrar();
    };

};