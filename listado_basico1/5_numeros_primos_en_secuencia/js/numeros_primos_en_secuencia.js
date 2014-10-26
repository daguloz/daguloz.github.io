/*
 * 
 * Autor: Daniel Gutiérrez
 * 26/10/2014
 *
 * Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos
 * números primos existen entre el 1 y dicho número.
 *
 */

var btn_check;
var info;
var num;
var count;
var primes;

window.onload = function() {

	info = document.getElementById('info');
	btn_check = document.getElementById('btn_check');

	btn_check.onclick = function() {
		num = parseInt(document.getElementById('num1').value);

		if (!isNaN(num)) {
			count = 0;
			primes = [];
			for (var i = 0; i < num; i++) {
				if (isPrime(i)) {
					primes.push(i);
					count++;
				}
			};
			info.innerHTML = 'Existen ' + count + ' números primos entre el 1 y ' + num +
			':<br /><br /><p>' + primes + '</p>';
		}

	}
};

function isPrime(num) {
	var isPrime = false;

	if (num < 2) {
		isPrime = false;
	}
	else if ((num == 2) || (num == 3)) {
		isPrime = true;
	}
	else {
		// Even number
		if (num % 2 == 0){
			isPrime = false;
		}
		else {
			// Uneven
			isPrime = true;

			for (var i = 3; i <= num; i++) {
				if ((num % i == 0) && (num != i)) {
					// Divisible by i
					isPrime = false;
				}
			}
		}
	}

	return isPrime;
}