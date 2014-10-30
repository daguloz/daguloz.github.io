
var update_link;

window.onload = function() {

	update_link = document.getElementById('update');

	update.onclick = function () {
		window.parent.frames[1].location = "http://iesgrancapitan.org/";
		window.location = "http://moodle.iesgrancapitan.org/";
	}
}