/*
RegExp

/patron/modificadores
*/

let patron = /dwec/i;
let cadena ="Hola crack dwec fiera mastodonte tifon numero 1";

//cadena = "drueda19365@iesjoanramis.org";
//patron = /\w/g;
//patron = /\d/g;
//patron = /\W/g;
//patron = /\S/g;
//patron = /a+/g;

cadena = "cada 100 o cada 1000 veces";
patron = /\d{3}/g;

let resultado = cadena.match(patron);

let posicion = cadena.search(patron);
console.log(posicion);
console.log(resultado);