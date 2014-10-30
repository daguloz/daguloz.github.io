var btn_answer;

window.onload = function() {

	btn_answer = document.getElementById('btn_answer');

	btn_answer.onclick = function () {
		console.log(window.parent);
		var valor = window.parent.extraeValor();
		if (valor == 0)
			alert ("Debe elegir una respuesta");
		else {
			window.parent.respuestas.push(valor);
			window.location = "pagina2.html";
		}
	}
}