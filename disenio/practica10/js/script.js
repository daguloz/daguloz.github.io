

// Canvas Icon
var i, cxt;
var scale = 1;
var border = '#363732'
var color = '#f58f29';
var c = document.getElementsByName("comment_icon");

for (i = 0; i < c.length; i += 1) {
    cxt = c[i].getContext('2d');
    cxt.strokeStyle = border;
    cxt.fillStyle = color;

    cxt.beginPath();
    cxt.arc(scale * 8, scale * 8, scale * 4, Math.PI, Math.PI * 1.5, false);
    cxt.arc(scale * 24, scale * 8, scale * 4, Math.PI * 1.5, 0, false);
    cxt.arc(scale * 24, scale * 16, scale * 4, 0, Math.PI * 0.5, false);
    cxt.lineTo(16 * scale, 26 * scale);
    cxt.lineTo(16 * scale, 20 * scale);
    cxt.arc(scale * 8, scale * 16, scale * 4, Math.PI * 0.5, Math.PI * 1, false);
    cxt.closePath();
    cxt.fill();
    cxt.stroke();

}