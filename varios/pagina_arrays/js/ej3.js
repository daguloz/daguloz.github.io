window.onload = function() {

	var execute = document.getElementById('execute');

	execute.onclick = function()  {
		
		var size = parseInt(document.getElementById('size').value);
		
		if (!isNaN(size) && (size > 0)) {
			var array = new Array(size);
			for (var i = 0; i < array.length; i++) {
				array[i] = Math.ceil(Math.random() * 10);
			};

			var maxSeqStart = 0;
			var maxSeqSize = 0;
			var seqStart = 0;
			var seqSize = 0;
			var seqPrev = -1;

			for (var i = 0; i < array.length; i++) {
				if ((seqStart == i) || seqPrev <= array[i]) {
					seqSize++
				}
				else {
					seqStart = i;
					seqSize = 1;
				}
				if (seqSize > maxSeqSize) {
					maxSeqSize = seqSize;
					maxSeqStart = seqStart;
				}
				seqPrev = array[i];
			};

			var result_content = '<strong>Array:</strong> ' + array.join(', ') + '<br />';

			var seq = [];
			for (var i = maxSeqStart; i <= (maxSeqStart + maxSeqSize - 1); i++) {
				seq.push(array[i]);
			};
			result_content += '<strong>Mayor secuencia: </strong>' + seq.join(', ') + '<br />';
			result_content += '<strong>Tamaño secuencia:</strong> ' + maxSeqSize + ' (Comienzo en posición ' + maxSeqStart + ')<br />';
			
			// no terminado
			document.getElementById('result').innerHTML = result_content;
		}
		else {
			document.getElementById('result').innerHTML = 'Introduce un número válido.';
		}
	}
};
