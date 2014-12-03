/*
 * Autor: Daniel Gutiérrez
 * 18/11/2014
 *
 * Modificar el ejercicio anterior del objeto Factura para crear una pseudoclase
 * llamada Factura y que permita crear objetos de ese tipo. Se deben utilizar 
 * las funciones constructoras y la propiedad prototype.
 * 
 * Para instanciar la clase, se debe utilizar la instrucción Factura(cliente, 
 * elementos), donde cliente también es una pseudoclase que guarda los datos del
 * cliente y elementos es un array simple que contiene las pseudoclases de todos
 * los elementos que forman la factura.
 *
 */

'use strict';

var Client, Element, Factura, client, elements;

function Cliente(name, address, phone, nif) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.nif = nif;
}

function Element(desc, qty, price) {
    this.desc = desc;
    this.qty = qty;
    this.price = price;
}

function Factura(client, elements) {
    this.elements = elements;
    this.client = client;
    this.info = {
        total: 0,
        iva: 21,
        payment: "efectivo"
    };
}

Factura.prototype.empresa = {
    name: "Empresa",
    address: "Direccion",
    phone: "910112233",
    nif: "1234F"
};

Factura.prototype.updateTotal = function() {
    this.info.total = 0;
    for (var i = 0; i < this.elements.length; i++) {
        this.info.total += this.elements[i].price * this.elements[i].qty;
    };
    this.info.total = this.info.total * this.info.iva / 100;
};

Factura.prototype.showTotal = function() {
    var result;
    this.updateTotal();
    result = document.getElementById('result');
    result.innerHTML = "Total: " + this.info.total;
};

client = new Cliente('Cliente', 'Direccion cliente', '600335577', '5789Z')
elements = [];
elements.push(new Element('item 1', 1, 100));
elements.push(new Element('item 2', 2, 72));
var testFactura = new Factura(client, elements);

testFactura.showTotal();
