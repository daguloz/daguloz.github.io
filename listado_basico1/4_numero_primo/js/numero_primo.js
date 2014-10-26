/*
 * 
 * Autor: Daniel Gutiérrez
 * 19/10/2014
 *
 * Implementa NumeroPrimo que pida un número e indique si es primo o no
 *
 */

var btn_check;
var info;
var num;
var reason = false;

window.onload = function() {

	info = document.getElementById('info');
	btn_check = document.getElementById('btn_check');

	btn_check.onclick = function() {
		num = parseInt(document.getElementById('num1').value);

		if (!isNaN(num)) {
			if (isPrime(num))
				info.innerHTML = 'El número es primo.';
			else {
				info.innerHTML = 'El número no es primo.';
				if (reason)
					info.innerHTML += '<br />(' + reason + ')';
			}
		}

	}
};

function isPrime(num) {
	var isPrime = false;

	if (num < 2) {
		isPrime = false;
		reason = 'No se considera primo ni compuesto.'
	}
	else if ((num == 2) || (num == 3)) {
		isPrime = true;
	}
	else {
		// Even number
		if (num % 2 == 0){
			isPrime = false;
			reason = 'Divisible por 2';
		}
		else {
			// Uneven
			isPrime = true;

			for (var i = 3; i <= num; i++) {
				if ((num % i == 0) && (num != i)) {
					// Divisible by i
					isPrime = false;
					reason = 'Divisible por ' + i;
				}
			}
		}
	}

	return isPrime;
}