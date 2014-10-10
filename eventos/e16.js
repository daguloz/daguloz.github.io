/*
 * 
 * Autor: Daniel Gutiérrez
 * 06/10/2014
 *
 * Crear un script que informe al usuario en que zona de la pantalla ha pulsado
 * el ratón. Las zonas definidas son las siguientes: izquierda arriba, izquierda
 * abajo, derecha arriba y derecha abajo. Para determinar el tamaño de la
 * ventana del navegador, utilizar la función tamanoVentanaNavegador()
 * proporcionada.
 *
 */

function showInfo(event) {

	var size = getBrowserWindowSize()

	// Determine the position clicked
	if (event.clientX < (size[0]/2))
		var horizontal = 'izquierda';
	else
		var horizontal = 'derecha';

	if (event.clientY < (size[1]/2))
		var vertical = 'arriba';
	else
		var vertical = 'abajo';

	document.getElementById("info").innerHTML = '<h1>' + 'Raton' +'</h1>';
	document.getElementById("info").innerHTML += '<p>[' + horizontal + ', ' + vertical + ']</p>';
}

window.onload = function() {
    document.onclick = showInfo;
}

function getBrowserWindowSize(){
	// Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
	var dimensiones = [];
	
	if(typeof(window.innerWidth) == 'number') {
		// No es IE
		dimensiones = [window.innerWidth, window.innerHeight];
	} else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		//IE 6 en modo estandar (no quirks)
		dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
	} else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
		//IE en modo quirks
		dimensiones = [document.body.clientWidth, document.body.clientHeight];
	}
	
	return dimensiones;
}