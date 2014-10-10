/*
 * 
 * Autor: Daniel Gutiérrez
 * 06/10/2014
 *
 * A partir de la página web proporcionada, completar el código JavaScript para
 * que:
 *
 * - Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * - Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa
 *   sección de contenidos
 * - Completar el resto de enlaces de la página para que su comportamiento sea
 *   idéntico al del primer enlace
 * - Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado
 *   (pista: propiedad innerHTML)
 *
 */

function toggleShow() {
	// Get id from <a> (enlace_1 -> 1), and then the related <p> element
	pId = this.id.split('_')[1];
	var paragraph = document.getElementById('contenidos_' + pId)

	if (paragraph.style.display == 'none') {
		paragraph.style.display = 'block';
		this.innerHTML = 'Mostrar contenidos';
	}
	else {
		paragraph.style.display = 'none';
		this.innerHTML = 'Mostrar contenidos';
	}
}

window.onload = function() {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = toggleShow;
	};
}