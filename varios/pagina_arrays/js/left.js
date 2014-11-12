window.onload = function() {

	var arrays_link = document.getElementById('arrays_link');
	var exercises_link = document.getElementById('exercises_link');
	var added = false;
	var exercises = ['Notas', 'Tabla Decimales', 'Secuencia', 'Suma Matrices', 'Multiplica Matrices']
	exercises_link.onclick = function() {
		
		// Obtain ul elements
		var list = document.getElementsByTagName('ul');
		
		// Add the submenu
		if (added === false) {
			var ul_element = document.createElement('ol');
			var list_content;
			var list_element;
			var list_link;
			var links_array = [];
			for (var i = 1; i <= 5; i++) {

				list_text = document.createTextNode(exercises[i - 1]);				
				list_link = document.createElement('a');
				list_link.appendChild(list_text);
				list_link.href = "#";
				list_link.id = 'sub' + i;

				links_array.push(list_link);

				list_element = document.createElement('li');
				list_element.appendChild(list_link);

				ul_element.appendChild(list_element);
			};

			// Update frames when generated links are clicked
			links_array.forEach(function(element, index){
				element.onclick = function() {
					window.parent.frames[1].location = 'ejercicios/ejercicio' + element.id.substr(-1) +'.html';
				};
			});

			list[0].appendChild(ul_element);
			added = true;
		}

		// Remove the submenu
		else {
			list[1].parentNode.removeChild(list[1]);
			added = false;
			links_array = undefined;
		}
	};

	arrays_link.onclick = function() {
		window.parent.frames[1].location = 'arrays.html';
	};

}