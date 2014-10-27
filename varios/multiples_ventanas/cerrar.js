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

var btn_close;

window.onload = function() {

	btn_close = document.getElementById('btn_close');
	btn_close.onclick = function() {
		window.close();
	}
}