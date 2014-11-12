window.onload = function() {

	var execute = document.getElementById('execute');

	execute.onclick = function()  {
		
		var m = parseInt(document.getElementById('m').value);
		var n = parseInt(document.getElementById('n').value);
		var o = parseInt(document.getElementById('o').value);
		
		if (isValidNumber(m, n, o)) {
			var matrix = [];
			matrix.push(createMatrix(m, n));
			matrix.push(createMatrix(n, o));

			// Incompleto
			//var product = new Array(m);
			//for (var i = 0; i < product.length; i++) {
			//	product[i] = new Array(n);
			//	for (var j = 0; j < product[i].length; j++) {
			//		product[i][j] = ;
			//	};
			//};

			var result_content = '<strong>Matriz A:</strong><br/>' + getMatrixString(matrix[0]) + '<br/>';
			result_content += '<strong>Matriz B:</strong><br/>' + getMatrixString(matrix[1]) + '<br/>';
			result_content += '<strong>Matriz producto:</strong><br/>' + getMatrixString(product) + '<br/>';

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