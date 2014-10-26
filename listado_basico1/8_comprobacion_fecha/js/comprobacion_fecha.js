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

var day;
var month;
var year;

var month_days;

var next_day;
var next_month;
var next_year;

window.onload = function() {

	info = document.getElementById('info');
	btn_check = document.getElementById('btn_check');

	btn_check.onclick = function() {
		day = parseInt(document.getElementById('day').value);
		month = parseInt(document.getElementById('month').value);
		year = parseInt(document.getElementById('year').value);

		switch(month) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				month_days = 31;
				break;

			case 4:
			case 6:
			case 9:
			case 11:
				month_days = 30;
				break;

			case 2:
				if (year % 4 == 0)
					month_days = 29;
				else 
					month_days = 28;
				break;
			
			default:
				month_days = 0;
		}

		if ((month_days > 0) && (day > 0) && (day <= month_days) && (!isNaN(year))) {
			if (day == month_days) {
				next_day = 1;
				if (month == 12) {
					next_month = 1;
					next_year = year + 1;
				}
				else {
					next_month = month + 1;
					next_year = year;
				}
			}
			else {
				next_day = day + 1;
				next_month = month;
				next_year = year;
			}

			info.innerHTML = 'Día siguiente: ' + next_day + '/' + next_month + '/' + next_year; 
		}
		else {
			info.innerHTML = 'La fecha no es válida.';
		}

	}
};