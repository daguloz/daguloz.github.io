window.onload = function() {

	var execute = document.getElementById('execute');

	execute.onclick = function()  {
		
		var m = parseInt(document.getElementById('m').value);
		var n = parseInt(document.getElementById('n').value);
		

		if (isValidNumber(m,n)) {
			var matrix = [];
			matrix.push(createMatrix(m, n));
			matrix.push(createMatrix(m, n));

			var suma = new Array(m);
			for (var i = 0; i < suma.length; i++) {
				suma[i] = new Array(n);
				for (var j = 0; j < suma[i].length; j++) {
					suma[i][j] = matrix[0][i][j] + matrix[1][i][j];
				};
			};

			var result_content = '<strong>Matriz A:</strong><br/>' + getMatrixString(matrix[0]) + '<br/>';
			result_content += '<strong>Matriz B:</strong><br/>' + getMatrixString(matrix[1]) + '<br/>';
			result_content += '<strong>Matriz suma:</strong><br/>' + getMatrixString(suma) + '<br/>';

			document.getElementById('result').innerHTML = result_content;
		}
		else {
			document.getElementById('result').innerHTML = 'Introduce un número válido.';
		}
	}
};

isValidNumber = function() {
	var ret = true;
	for (var i = 0; i < arguments.length; i++) {
		if (isNaN(arguments[i]))
			ret = false;
		else if (arguments[i] < 0)
			ret = false;
	};

	return ret;
}

createMatrix = function(m, n) {
	var matrix = new Array(m);
	for (var i = 0; i < matrix.length; i++) {
		matrix[i] = new Array(n);
		for (var j = 0; j < matrix[i].length; j++) {
			matrix[i][j] = Math.ceil(Math.random() * 10);
		};
	};
	return matrix;
};

getMatrixString = function(matrix) {
	var ret = '';
	for (var i = 0; i < matrix.length; i++) {
		ret += '[' + matrix[i].join(', ') + ']<br/>';
	};

	return ret;
}