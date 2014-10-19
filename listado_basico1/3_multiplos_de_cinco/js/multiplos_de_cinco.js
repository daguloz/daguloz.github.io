/*
 * 
 * Autor: Daniel Gutiérrez
 * 19/10/2014
 *
 * Implementa MultiplosDeCinco que pida 7 números e indique si alguno es
 * múltiplo de 5.
 *
 */

var btn_check;
var info;
var inputs;
var multiplos;

window.onload = function() {

	info = document.getElementById('info');
	btn_check = document.getElementById('btn_check');

	btn_check.onclick = function() {
		multiplos = [];
		inputs = document.getElementsByTagName('input');
		for (var i = 0; i < inputs.length; i++) {
			if ( ((inputs[i].value % 5) === 0) && (inputs[i].value > 0) ) {
				multiplos.push(inputs[i].value);
			}
		}

		if (multiplos.length > 0) {
			info.innerHTML = 'Multiplos de cinco: ';
		}
		else {
			info.innerHTML = 'Ningún numero es múltiplo de cinco.';
		}
		for (var i = 0; i < multiplos.length; i++) {
			info.innerHTML = info.innerHTML + ' ' + multiplos[i];
		};
	}
};