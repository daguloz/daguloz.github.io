/*
 * 
 * Autor: Daniel Gutiérrez
 * 26/10/2014
 *
 * Implementa OrdenaTres que pida tres números y los muestre ordenados
 * de menor a mayor.
 *
 */

var btn_check;
var info;
var num1;
var num2;
var num3;

var big;
var mid;
var low;

window.onload = function() {

	info = document.getElementById('info');
	btn_check = document.getElementById('btn_check');

	btn_check.onclick = function() {
		num1 = parseInt(document.getElementById('num1').value);
		num2 = parseInt(document.getElementById('num2').value);
		num3 = parseInt(document.getElementById('num3').value);

		big = Math.max(num1, num2, num3);
		low = Math.min(num1, num2, num3);

		mid = num1;
		if ((num2 < big) && (num2 > low))
			mid = num2;
		if ((num3 < big) && (num3 > low))
			mid = num3;


		info.innerHTML = 'Números ordenados: ' + big + ', ' + mid + ', ' + low;

	}
};