/*
 * 
 * Autor: Daniel Gutiérrez
 * 19/10/2014
 *
 * Crea la siguiente página Web donde el botón crea cinco nuevas ventanas
 * ubicadas en la esquina tal y como se muestran.
 * 
 * Métodos a utilizar:
 * 
 * - miVentana = window.open('','','width=200,height=200');
 * - miVentana.document.open();
 * - miVentana.document.write() 
 *   - Añade el esqueleto básico: html, head, title, body, ul...
 * - miVentana.document.close();
 *
 */

var ventana = [];
var btn_open;

window.onload = function() {

	btn_open = document.getElementById('btn_open');
	btn_open.onclick = function() {
		for (var i = 0; i < 5; i++) {
			ventana[i] = window.open('', '', 'width=200,height=200');
			ventana[i].document.open();

			ventana[i].document.write('<!DOCTYPE html><html><head>' +
				'<meta charset="utf-8" /><title>Ventana ' + (i+1) + '</title>' +
				'<body>Ventana ' + (i+1) +
				'<button id="btn_close" >Cerrar</button>' +
				'<script type="text/javascript" src="cerrar.js"></script>' +
				'</body></html>');

			ventana[i].document.close();
		};
	}
}