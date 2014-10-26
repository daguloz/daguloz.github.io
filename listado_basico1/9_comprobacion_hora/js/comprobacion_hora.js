/*
 * 
 * Autor: Daniel Gutiérrez
 * 26/10/2014
 *
 * Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si 
 * es correcta. Si lo fuera, ha de mostrar la hora un segundo después
 *
 */

var btn_check;
var info;

var hour;
var min;
var seg;

var next_hour;
var next_min;
var next_seg;

window.onload = function() {

	info = document.getElementById('info');
	btn_check = document.getElementById('btn_check');

	btn_check.onclick = function() {
		hour = parseInt(document.getElementById('hour').value);
		min = parseInt(document.getElementById('min').value);
		seg = parseInt(document.getElementById('seg').value);

		if ((hour > 0) && (hour < 24) && (min > 0) && (min < 60) && (seg > 0) && (seg < 60)) {
			if (seg == 59) {
				next_seg = 0;
				if (min == 59) {
					next_min = 0;
					if (hour == 23) {
						next_hour = 0;
					}
					else
						next_hour = hour + 1;
				}
				else {
					next_min = min + 1;
					next_hour = hour;
				}
			}
			else {
				next_seg = seg + 1
				next_min = min;
				next_hour = hour;
			}

			if (next_seg.toString().length == 1)
				next_seg = 0 + "" + next_seg;
			if (next_min.toString().length == 1)
				next_min = 0 + "" + next_min;


			info.innerHTML = 'Segundo siguiente: ' + next_hour + ':' + next_min + ':' + next_seg; 
		}
		else {
			info.innerHTML = 'La hora no es válida.';
		}

	}
};