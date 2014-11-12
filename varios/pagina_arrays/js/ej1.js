window.onload = function() {

	var execute = document.getElementById('execute');

	execute.onclick = function()  {
		var dimension = parseInt(document.getElementById('dimension').value);
		if (!isNaN(dimension) && (dimension > 0)) {
			var notas = new Array(dimension);
			var result_content = '';

			for (var i = 0; i < notas.length; i++) {
				notas[i] = Math.round(Math.random() * 10);
				result_content += notas[i];
				if (i < notas.length - 1)
					result_content += ', ';
			};

			document.getElementById('result').innerHTML = result_content;
		}
		else {
			document.getElementById('result').innerHTML = 'Introduce un número válido.';
		}
	}
};
