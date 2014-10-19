/*
 * 
 * Autor: Daniel Gutiérrez
 * 19/10/2014
 *
 * 1. Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar
 *  un número entre el 1 y el 100. Mostrará un mensaje:
 * a. Para indicar si has acertado (en una nueva ventana)
 * b. Para indicar si la solución es mayor o es menor.
 *
 * Al finalizar, se le preguntará al usuario si quiere repetir el juego.
 *
 */

var btn_check;
var info;
var input;
var newWindow;
var playing = true;

var randomNum = getRandomNumber();

function getRandomNumber() {
	return Math.round(Math.random() * 100);
}

window.onload = function() {

	btn_check = document.getElementById('btn_check');
	btn_check.onclick = function() {
		
		if (playing) {
			input = document.getElementById('input_num');
			info = document.getElementById('info');

			if (input.value == randomNum) {
				newWindow = window.open('', '', 'width=250,height=200');
				newWindow.document.open();
				newWindow.document.write('<!DOCTYPE html><html><head>' +
					'<meta charset="utf-8" /><title>Enhoruabuena!</title>' +
					'<body><h1>Has ganado!</h1>' +
					'<button onClick="window.close()" >Cerrar</button>' +
					'</body></html>');
				newWindow.document.close();
				btn_check.innerHTML = 'Jugar otra vez';
				playing = false;
			}
			else {
				if (input.value > randomNum)
					info.innerHTML = 'El número es menor.';
				else
					info.innerHTML = 'El número es mayor.';
			}
		}
		else {
			randomNum = getRandomNumber();
			btn_check.innerHTML = 'Adivinalo!';
			info.innerHTML = '';
			input.value = '';
		}
	}
};