/*
 * 
 * Autor: Daniel Gutiérrez
 * 27/10/2014
 *
 * Entrega la página sumaYProducto que obtenga la suma y el producto de los números del 1 al 100.
 *
 */

var btn_check;
var info;
var suma = 0;
var producto = 1;

window.onload = function() {

	info = document.getElementById('info');
	
	for (var i = 1; i <= 100; i++) {
		suma += i;
		producto *= i;
	};

	info.innerHTML = 'Suma: ' + suma + '<br /><br />' +
	'Producto: ' + producto + '<br /><br />';

};