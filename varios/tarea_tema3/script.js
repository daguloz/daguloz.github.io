/*
 * 
 * Autor: Daniel Gutiérrez
 * 19/10/2014
 *
 *
 */

window.onload = function() {

	var newWindow;

	newWindow = window.open('', '', 'width=600,height=400');
	newWindow.document.open();
	newWindow.document.write('<!DOCTYPE html><html><head>' +
		'<meta charset="utf-8" /><body>');

	writeToWindow(newWindow);
	newWindow.document.write('</body></html>');
	newWindow.document.close();

	window.document.open();
	window.document.write('<h1>Tarea del tema 3</h1>');
	
	name = prompt('Introduzca su nombre y apellidos');
	bday = prompt('Introduzca su día de nacimiento');
	bmonth = parseInt(prompt('Introduzca su mes de nacimiento'));
	byear = parseInt(prompt('Introduzca su año de nacimiento'));

	window.document.write('Buenos días, ' + name + '<br/>' +
		'Tu nombre tiene ' + name.length + ' caracteres, incluidos espacios.<br/>' +
		'La primera letra E de tu nombre está en la posición: ' + name.indexOf('e') + '<br/>' +
		'La última letra E de tu nombre está en la posición: ' + name.lastIndexOf('e') + '<br/>' +
		'Tu nombre menos las primeras 3 letras es: ' + name.slice(3) + '<br/>' +
		'Tu nombre todo en mayúsculas es: ' + name.toUpperCase() + '<br/>' +
		'Tu edad es: ' + (2014 - byear)  + ' años.<br/>' +
		'Naciste un feliz ' + bday + ' de ' + monthName(bmonth) + ' del año ' + byear + '.<br/>' +
		'El coseno de 90 es : ' + Math.cos(90) + '.<br/>' +
		'El número mayor de (65, 22, 69, 99, 12) es: ' + Math.max(65, 22, 69, 99, 12) + '.<br/>' +
		'Ejemplo de número al azar entre 1 y 10: ' + Math.ceil(Math.random() * 10));

	window.document.close();


}

function writeToWindow(target) {

	var javaAvailable;
	var iesGC;

	if (navigator.javaEnabled())
		javaAvailable = "SI";
	else
		javaAvailable = "NO";

	target.document.write('<h1>Ventana Nueva</h1>' +
		'URL Completa: ' + location.href + '<br/>' +
		'Protocolo utilizado: ' + location.protocol + '<br/>' +
		'Nombre en código del navegador: ' + navigator.appCodeName + '<br/>' +
		'Java ' + javaAvailable + ' está disponible en esta ventana.');
	iesGC = window.open('http://iesgrancapitan.org/portal/', '', 'width=800,height=600');
}

function monthName(month) {
	switch (month) {
		case 1:
			return 'Enero';
			break;
		case 2:
			return 'Febrero';
			break;
		case 3:
			return 'Marzo';
			break;
		case 4:
			return 'Abril';
			break;
		case 5:
			return 'Mayo';
			break;
		case 6:
			return 'Junio';
			break;
		case 7:
			return 'Julio';
			break;
		case 8:
			return 'Agosto';
			break;
		case 9:
			return 'Septiembre';
			break;
		case 10:
			return 'Octubre';
			break;
		case 11:
			return 'Noviembre';
			break;
		case 12:
			return 'Diciembre';
			break;
		

	}
}