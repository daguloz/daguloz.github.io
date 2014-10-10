/*
 * 
 * Autor: Daniel Gutiérrez
 * 06/10/2014
 *
 * Completar el código JavaScript proporcionado para que:
 *
 * 1. Al mover el ratón en cualquier punto de la ventana del navegador, se
 *    muestre la posición del puntero respecto del navegador y respecto de la
 *    página:
 *
 * 2. Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar
 *    el nuevo evento y su información asociada:
 *
 * 3.  Añadir la siguiente característica al script: cuando se pulsa un botón
 *     del ratón, el color de fondo del cuadro de mensaje debe ser amarillo
 *     (#FFFFCC) y cuando se pulsa una tecla, el color de fondo debe ser azul
 *     (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser
 *     blanco.
 *
 */

function keyHandler(event) {
	
	var charCode = event.charCode || event.keyCode;
	var charValue = String.fromCharCode(charCode);
	var info = ['Teclado', 'Carácter [' + charValue + ']',
		'Código [' + charCode + ']'];
	
	showInfo(info);
	setInfoBg('#CCE6FF');

}

function mouseHandler(event) {
	if (event.type == 'mousemove'){
		
		var info = ['Ratón',
			'Navegador [' + event.clientX + ', ' + event.clientY + ']',
			'Página [' + event.pageX + ', ' + event.pageY + ']'];
		
		showInfo(info);
		setInfoBg('#FFFFFF');

	}
	else if (event.type == 'click')
		setInfoBg('#FFFFCC');

}

function setInfoBg(color) {
	document.getElementById("info").style.background = color;
}

function showInfo(msg) {
	document.getElementById("info").innerHTML = '<h1>' + msg[0]+'</h1>';
	for(var i = 1; i < msg.length; i++) {
		document.getElementById("info").innerHTML += '<p>' + msg[i]+'</p>';
	}
}

window.onload = function() {
    document.onkeypress = keyHandler;
    document.onmousemove = mouseHandler;
    document.onclick = mouseHandler;
}