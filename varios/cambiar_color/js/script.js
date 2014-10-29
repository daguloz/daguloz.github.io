/*
 * 
 * Autor: Daniel Gutiérrez
 * 29/10/2014
 *
 * Crea la siguiente página Web donde el botón cambia el color (azul o verde)
 * del marco indicado (derecha o izquierda). Asegúrate de que funcione en los
 * tres navegadores principales.
 * Código a utilizar:
 * - window.parent
 *
 */

var btn_change;
var color;
var frame;

window.onload = function() {

	btn_change = document.getElementById('btn_change');

	btn_change.onclick = function() {
		color = window.parent.frames[0].document.getElementById('color').value;
		frame = window.parent.frames[0].document.getElementById('frame').value;
		if (frame == 'left')
			frameIndex = 0;
		else
			frameIndex = 1;
		window.parent.frames[frameIndex].document.bgColor = color;
	}
}