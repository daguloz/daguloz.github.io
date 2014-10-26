/*
 * 
 * Autor: Daniel Gutiérrez
 * 26/10/2014
 *
 * Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
 * a. Cuántas cifras tiene (7 cifras)
 * b. Lo muestre del revés
 *
 */

var btn_check;
var info;
var num;
var digits;
var reversed;

window.onload = function() {

	info = document.getElementById('info');
	btn_check = document.getElementById('btn_check');

	btn_check.onclick = function() {
		num = parseFloat(document.getElementById('num').value);

		if ((num >= 0) && (num <= 10)) {
			digits = num.toString().replace('.','').length;

			reversed = '';
			for (var i = num.toString().length - 1; i >= 0; i--) {
				reversed += num.toString()[i];
			};

			info.innerHTML = 'Cifras: ' + digits + '<br /><br />' + 
			'Invertido: ' + reversed;
		}
		else {
			info.innerHTML = 'Introduce un número entre 0 y 10.';
		}

	}
};