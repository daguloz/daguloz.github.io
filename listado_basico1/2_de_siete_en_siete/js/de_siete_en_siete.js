/*
 * 
 * Autor: Daniel Gutiérrez
 * 19/10/2014
 *
 * Implementa DeSieteEnSiete que escriba los números del 100 al 0 de 7 en siete
 *
 */

var info;

window.onload = function() {

	info = document.getElementById('info');
	for (var i = 100; i >= 0; i -= 7) {
		info.innerHTML = info.innerHTML + " " + i;
	}
};