/*
 * Autor: Daniel Gutiérrez
 * 18/11/2014
 *
 * Extender el objeto Array para que permita añadir nuevos elementos al final del array:
 * 
 * var array1 = [0, 1, 2];
 * array1.anadir(3);
 * // array1 = [0, 1, 2, 3]
 * 
 * Incluir la opción de controlar si se permiten elementos duplicados o no:
 * 
 * var array1 = [0, 1, 2];
 *  
 * array1.anadir(2);
 * // array1 = [0, 1, 2, 2]
 *  
 * array1.anadir(2, false);
 * // array1 = [0, 1, 2]
 *
 */

'use strict';

var elements, result;

Array.prototype.anadir = function(element, duplicate) {
    if (duplicate == false) {
        for (var i = 0; i < this.length; i+= 1) {
            if (this[i] === element) {
                return false;
            }
        };
    }
    this[this.length] = element
};

elements = [0, 1, 2];
elements.anadir(2);
elements.anadir(2, false);

result = document.getElementById('result');
result.innerHTML = elements;

