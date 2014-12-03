/*
 * Autor: Daniel Gutiérrez
 * 18/11/2014
 *
 * Extender la clase String para que permita truncar una cadena de texto a un tamaño indicado como parámetro:
 * 
 * var cadena = "hola mundo";
 * cadena2 = cadena.truncar(6); // cadena2 = "hola m"

 * Modificar la función anterior para que permita definir el texto que indica que la cadena se ha truncado:
 * 
 * var cadena = "hola mundo";
 * cadena2 = cadena.truncar(6, '...'); // cadena2 = "hol..."
 *
 */

'use strict';

var str, result;

String.prototype.truncar = function(size, text) {
	var newStr;
    if (size > 0) {
    	newStr = this.substr(0, size);
    	if (text) {
    		newStr = this.substr(0, size).concat(text);
    	}
    	return newStr;
    }
    return this;
};

str = "hola que tal";

result = document.getElementById('result');
result.innerHTML = str.truncar(5, '...');

