/*
 * 
 * Autor: Daniel Gutiérrez
 * 29/10/2014
 *
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón
 * crea una nueva ventana ubicada en la esquina superior izquierda de la
 * pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 * - window.open()
 * - document.write() 
 *   - Añade el esqueleto básico: html, head, title, body, ul...
 *
 */

var ventana;
var btn_open;
var width;
var height;

window.onload = function() {

	btn_open = document.getElementById('btn_open');

	btn_open.onclick = function() {
		width = parseInt(document.getElementById('width').value);
		height = parseInt(document.getElementById('height').value);
		if (isNaN(width) || isNaN(height)) {
			info = document.getElementById('info');
			info.innerHTML = 'Dimensiones no válidas';
		}
		else {
			properties = 'top=0,left=0,width=' + width + ',height=' + height;
			ventana = window.open('', '', properties);
			ventana.document.open();

			ventana.document.write('<!DOCTYPE html><html><head>' +
				'<meta charset="utf-8" /><title>Ventana de prueba</title>' +
				'<body>Se han utilizado las propiedades:' +
				'<ul>' +
				'<li>width = ' + width + '</li>' +
				'<li>height = ' + height + '</li>' +
				'</ul></body></html>');

			ventana.document.close();
		}
	}
}