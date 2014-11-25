/*
 * Autor: Daniel Gutiérrez
 * 18/11/2014
 *
 * Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el
 * usuario. Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un
 * peso. Cada vez que crees un objeto gato aparecerá una ventana nueva con una
 * imagen que cambiará en función de su estado (comiendo, durmiendo y jugando,
 * que es su estado habitual). El usuario podrá averiguar la edad del gato
 * partiendo de un evento.
 *
 * - Evita las cajas de texto
 * - No puedes usar ni alert ni prompt
 * - Hazlo lo más dinámico posible.
 * - Utiliza prototype para los métodos
 *
 */

window.onload = function () {

    'use strict';

    var img, msg;

    if (typeof cat === 'undefined') {
        img = document.getElementById('catImage');
        img.style.background = 'url(\'./images/cat_dead.jpg\')';
        img.style.backgroundSize = "100% 100%";
        msg = document.getElementById('catMsg');
        msg.innerHTML = 'Tu gato ha muerto en circunstancias extrañas :(';
    }

};