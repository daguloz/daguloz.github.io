/*
 * Autor: Daniel Gutiérrez
 * 27/11/2014
 *
 * Crea un formulario con todos los tipos de controles y realiza todas las 
 * validaciones posibles mediante JavaScript. Utiliza todos los eventos posibles,
 * aunque pueda resultarle tedioso al usuario (al salir de una lista con el 
 * tabulador, al pulsar un botón...). 
 * Utiliza el modelo de registro avanzado de eventos según W3C, así como las 
 * expresiones regulares.
 * Asegúrate de validar lo siguiente:
 *
 * - Obligatoriedad (campo de texto, opción seleccionada (checkbox, radio button y selección)
 * - Tipo de dato introducido (numérico...)
 * - Dirección de correo válida
 * - Número de DNI válido
 * - Fecha válida
 * - Número de teléfono
 * - Número de cuenta corriente
 * - URL
 */

window.onload = function () {
    'use strict';

    var blockToggleLink, cookieCheckButton, cookieDeleteButton, form, elem, i, inputs, labels, newWin, pos, result;

    function cookieRead() {
        var cookies, data, cookieData = {};

        if (document.cookie === "") {
            return false;
        }

        cookies = document.cookie.split(';');
        for (i = 0; i < cookies.length; i += 1) {
            data = cookies[i].split('=');
            cookieData[data[0]] = data[1];
        }
        return cookieData;
    }

    function cookieCheck() {
        var content = "", cookieData, property;

        cookieData = cookieRead();

        if (cookieData === false) {
            content = "No hay Información guardada en cookies";
        } else {
            content += '<ul>';
            // Delete each cookie
            for (property in cookieData) {
                if (cookieData.hasOwnProperty(property)) {
                    content += '<li><strong>' + property + ':</strong> ' + cookieData[property] + '</li>';
                }
            }
            content += '</ul>';
        }

        newWin = window.open('', '', 'width=300,height=200');
        newWin.document.open();
        newWin.document.write('<!DOCTYPE html><html lang="es"><head>' +
                                '<meta charset="UTF-8">' +
                                '<title>Información de Cookies</title>' +
                                '</head><body>' +
                                content +
                                '</body></html>');
        newWin.document.close();
    }


    function cookieDelete() {
        var cookieData, property;
        cookieData = cookieRead();

        if (cookieData !== false) {
            // Delete each cookie
            for (property in cookieData) {
                if (cookieData.hasOwnProperty(property)) {
                    document.cookie = property + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                }
            }

            newWin = window.open('', '', 'width=300,height=200');
            newWin.document.open();
            newWin.document.write('<!DOCTYPE html><html lang="es"><head>' +
                                    '<meta charset="UTF-8">' +
                                    '<title>Información de Cookies</title>' +
                                    '</head><body>Las cookies han sido borradas.' +
                                    '</body></html>');
            newWin.document.close();
        }
    }

    function toggleBlock(link, block) {
        if (block.style.display === 'block') {
            link.innerHTML = 'Enunciado &darr;';
            block.style.display = 'none';
        } else {
            link.innerHTML = 'Enunciado &uarr;';
            block.style.display = 'block';
        }
    }


    /*
    * Validates a bank account
    *
    * Example values:
    * 12349876610123456789
    * 1234-9876-610123456789
    * ES24 1234 9876 610123456789
    *
    */
    function validateAccount(value) {
        if (/^(?:(?:[a-zA-Z]{2}[0-9]{2}[.-\s]?)?[0-9]{4}[.-\s]?){2}[0-9]{2}[.-\s]?[0-9]{10}$/.test(value)) {
            return true;
        }
        return false;
    }

    /*
    * Validates a date with the format DD/MM/YYYY
    *
    * Example values:
    * 22/12/1990
    * 02/02/99
    *
    */
    function validateDate(value) {
        if (/^(?:[0-3][0-9]|[1-9])\/(?:[01]?[0-9]|[1-9])\/(?:[0-9]{2}){1,2}$/.test(value)) {
            return true;
        }
        return false;
    }

    /*
    * Validates a DNI (spanish personal document identifier);
    *
    * Example value:
    * 12345678F
    *
    */
    function validateDNI(value) {
        if (/^([1-9]{1}[0-9]{6,7})+[a-zA-Z]{1}$/.test(value)) {
            return true;
        }
        return false;
    }

    /*
    * Validates an email, with up to 2 subdomains
    *
    * Example values:
    * abc.def@zxy.com
    * abc@cda.com.es
    *
    */
    function validateEmail(value) {
        if (/^[a-zA-Z.0-9\-]+@[a-zA-Z]+(?:\.[a-zA-Z]+){1,2}$/.test(value)) {
            return true;
        }
        return false;
    }

    /*
    * Validates a spanish phone
    *
    * Example values:
    * +34 600123456
    * 600123456
    * 910 001122
    * 800 334 455
    */
    function validatePhone(value) {
        if (/^(?:\+34)?\s?[6-9]{1}[0-9]{2}\s?(?:[0-9]{3}\s?){2}$/.test(value)) {
            return true;
        }
        return false;
    }

    /*
    * Validates an URL
    *
    * Example values:
    * file:///home/file.html
    * http://www.google.com
    */
    function validateURL(value) {
        if (/^[a-zA-Z]+:\/{2}\S+$/.test(value)) {
            return true;
        }
        return false;
    }


    function validate(input) {

        if (input.value === null || input.value.length === 0 || /^\s+$/.test(input.value)) {
            result = false;
        } else {
            // Calls the proper validation function
            switch (input.name) {

            case 'account':
                result = validateAccount(input.value);
                break;

            case 'date':
                result = validateDate(input.value);
                break;

            case 'dni':
                result = validateDNI(input.value);
                break;

            case 'email':
                result = validateEmail(input.value);
                break;

            case 'phone':
                result = validatePhone(input.value);
                break;

            case 'url':
                result = validateURL(input.value);
                break;



            }
        }
        // Adds a class to the label based on validation result
        if (result === true) {
            return true;
        }
        return false;
    }

    function validateEvent(event) {
        if (validate(event.target) === true) {
            document.cookie = event.target.name + '=' + event.target.value;
            event.target.label.className = 'ok';
            event.target.style.border = '2px solid #118811';
        } else {
            event.target.label.className = 'error';
            event.target.style.border = '2px solid #cc1111';
        }
    }
    function validateInput(input) {
        if (validate(input) === true) {
            document.cookie = input.name + '=' + input.value;
            input.label.className = 'ok';
            input.style.border = '2px solid #118811';
        } else {
            input.label.className = 'error';
            input.style.border = '2px solid #cc1111';

            // Scroll to first invalid input
            if (pos === null) {
                pos = input.getBoundingClientRect();
                window.scrollBy(pos.x, pos.y);
            }
        }
    }

    function validateAllInputs(event) {
        pos = null;
        for (i = 0; i < inputs.length; i += 1) {
            validateInput(inputs[i]);
        }
        event.preventDefault();
    }

    // Toggle description block
    blockToggleLink = document.getElementById('toggleDesc');
    blockToggleLink.addEventListener('click', function () {
        toggleBlock(blockToggleLink, document.getElementById('description'));
    }, false);

    // Obtain all input and label elements for use in validation
    labels = document.getElementsByTagName('label');
    inputs = [];
    for (i = 0; i < labels.length; i += 1) {
        if (labels[i].htmlFor !== '') {
            elem = document.getElementById(labels[i].htmlFor);
            if (elem) {
                elem.label = labels[i];
                elem.addEventListener('blur', validateEvent, false);
                inputs.push(elem);
            }
        }
    }

    // Click event for submit buttons in forms
    form = document.getElementsByTagName('form');
    for (i = 0; i < form.length; i += 1) {
        form[i].addEventListener('submit', validateAllInputs, false);
    }

    cookieCheckButton = document.getElementById('cookie_check');
    cookieCheckButton.addEventListener('click', cookieCheck, false);

    cookieDeleteButton = document.getElementById('cookie_delete');
    cookieDeleteButton.addEventListener('click', cookieDelete, false);

};
