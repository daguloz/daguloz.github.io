
var respuestas = [];

function extraeValor(){
	for (i = 0; i < window.frames[1].document.f1.respuesta.length; i++){
		if (window.frames[1].document.f1.respuesta[i].checked)
		return window.frames[1].document.f1.respuesta[i].value
	}
	return 0
}