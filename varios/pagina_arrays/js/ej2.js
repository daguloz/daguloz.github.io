window.onload = function() {

	var execute = document.getElementById('execute');

	execute.onclick = function()  {
		
		var rows_size = parseInt(document.getElementById('rows').value);
		var cols_size = parseInt(document.getElementById('cols').value);
		
		if (!isNaN(rows_size) && (rows_size > 0) && !isNaN(cols_size) && (cols_size > 0)) {
			var cols = new Array(cols_size);
			var result_content = '';
			var max = {val: -1, x: 0, y: 0 };
			var min = {val: 101, x: 0, y: 0};
			for (var i = 0; i < cols.length; i++) {
				cols[i] = new Array(rows_size);
				result_content += '[';
				for (var j = 0; j < cols[i].length; j++) {
					cols[i][j] = Math.ceil(Math.random() * 100);
					if (cols[i][j] > max.val) {
						max.val = cols[i][j];
						max.x = i;
						max.y = j;
					}
					if (cols[i][j] < min.val) {
						min.val = cols[i][j];
						min.x = i;
						min.y = j;
					}
					result_content += cols[i][j];
					if (j < cols[i].length - 1)
						result_content += ', ';
					else
						result_content += ']<br/>';
				};
			};

			result_content += '<br />Máximo: ' + max.val + ' (' + max.x + ', ' + max.y + ')';
			result_content += '<br />Mínimo: ' + min.val + ' (' + min.x + ', ' + min.y + ')';
			document.getElementById('result').innerHTML = result_content;
		}
		else {
			document.getElementById('result').innerHTML = 'Introduce un número válido.';
		}
	}
};
