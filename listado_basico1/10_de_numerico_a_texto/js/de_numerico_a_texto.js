/*
 * 
 * Autor: Daniel Gutiérrez
 * 26/10/2014
 *
 * Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre
 * escrito. Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que 
 * sea lo más eficiente posible.
 *
 */

var btn_check;
var info;

var num;
var numString;
var name;

window.onload = function() {

	info = document.getElementById('info');
	btn_check = document.getElementById('btn_check');

	btn_check.onclick = function() {
		num = parseInt(document.getElementById('num').value);

		if (!isNaN(num)) {
			if ((num <= 99) && (num >= 0)) {
				info.innerHTML = getNumName(num);
			}
			else 
				info.innerHTML = 'El número no es válido.';
		}
		else
			info.innerHTML = 'El número no es válido.';

	}
};

function getNumName0_9(number) {
	switch (number) {
		case 0:
			return 'Cero';
			break;
		case 1:
			return 'uno';
			break;
		case 2:
			return 'dos';
			break;
		case 3:
			return 'tres';
			break;
		case 4:
			return 'cuatro';
			break;
		case 5:
			return 'cinco';
			break;
		case 6:
			return 'seis';
			break;
		case 7:
			return 'siete';
			break;
		case 8:
			return 'ocho';
			break;
		case 9:
			return 'nueve';
			break;
	}
}

function getNumName(number) {
	if (number < 10)
		return getNumName0_9(number);
	else {
		digit1 = parseInt(number.toString().charAt(0));
		digit2 = parseInt(number.toString().charAt(1));
		switch (digit1) {
			case 1:
				switch (digit2) {
					case 0:
						numName = 'Diez';
						break;
					case 1:
						numName = 'Once';
						break;
					case 2:
						numName = 'Doce';
						break;
					case 3:
						numName = 'Trece';
						break;
					case 4:
						numName = 'Catorce';
						break;
					case 5:
						numName = 'Quince';
						break;
					default:
						numName = 'Dieci' + getNumName0_9(digit2);
						break;
				}
				break;
			case 2:
				if (digit2 == 0) 
					numName = 'Veinte';
				else
					numName = 'Veinti' + getNumName0_9(digit2);
				break;
			case 3:
				numName = 'Treinta';
				break;
			case 4:
				numName = 'Cuarenta';
				break;
			case 5:
				numName = 'Cincuenta';
				break;
			case 6:
				numName = 'Sesenta';
				break;
			case 7:
				numName = 'Setenta';
				break;
			case 8:
				numName = 'Ochenta';
				break;
			case 9:
				numName = 'Noventa';
				break;
			default:
				numName = 'error';
		}
		if (digit1 >= 3)
			numName += ' y ' + getNumName0_9(digit2);
	}

	return numName;
}