let datos = [13, -5, -9, 0, 8, 2];
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

//Funcion filter
/*function natural(dato){
    return dato <= 5;
}
console.log(datos);
console.log(datos.filter(natural));*/

//Metodo find()
//console.log(datos.find(natural));

//Metodo forEach()
/*let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let texto = document.getElementById("texto");

function miTexto(item, index){
    texto.innerHTML += "index["+ index +"]: " + item + "<br\>"; 
}

dias.forEach(miTexto);*/

//Metodo includes()
/*let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
console.log(dias.includes("Martes"));
console.log(datos.includes(-5));*/

//Metodo indexOf() 
//console.log(datos.indexOf(0));

//Metodo lastIndexOf() //Consigue el ultimo indice
//console.log(datos.lastIndexOf(0));

//Metodo pop() //Quitar el ultimo elemento y poder guardarlo en una variable
/*let ultimo = datos.pop();
console.log(ultimo);
console.log(datos);*/

//Metodo push(); //Añade elementos al array
/*datos.push(52);
let datos2 = [100, 200, 300];
datos.push(...datos2);
console.log(datos);*/

//Metodo shift() //Quita el primer elemento del array
/*let primero = datos.shift();
console.log(datos);
console.log(primero);*/

//Metodo slice() //Permite seleccionar parte del array
/*let datos2 = datos.slice(2);
console.log("datos: "+datos)
console.log("datos2: "+datos2);*/

//Metodo sort() //Devuelve el array ordenado de menor a mayor
/*datos.push(52);
let datos2 = [100, 200, 300];
datos.push(...datos2);
console.log(datos.sort((a, b) => a - b));
console.log(dias.sort((a, b) => a - b));*/

let text = "Boquepasa Requete 123";

//console.log(text.slice(text.lastIndexOf(" "), text.length -1));
//console.log(text.substring(2, 5));
//console.log(text.replace("que", "muerete"));
//console.log(text.toLocaleUpperCase());
let prueba = ["sigue", "33", "Boeing 757-2AC(ER)"];
//console.log(text.concat(...prueba));
//console.log(text.split("e"));
//console.log(text);
//console.log(text.repeat(23));
