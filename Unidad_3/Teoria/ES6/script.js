/*const nombres = [];
console.log(nombres);

nombres.push('Fimosis');

console.log(nombres[0]);
console.log(nombres);

const ultimoNombre = nombres.pop();
console.log(ultimoNombre);
console.log(nombres);

const otrosNombres = [];*/

//Desestructuracion

const  personaje = ['Ahri', 'Akali', 'Evelynn', 'Kai\'Sa', 'Seraphine'];
const [zorra_de_nueve_colas, la_espadachin, la_demonia_sucubo, la_hija_del_vacio, la_cantante] = personaje;
/*console.log(personaje);
console.log(zorra_de_nueve_colas);
console.log(la_hija_del_vacio);*/

const masPersonajes = {
    nombre: 'Mordekaiser',
    apodo: 'El señor de la Muerte',
    edad: 3000,
    armas: ['Ocaso', 'Brujeria nigromantica', 'Reino de la muerte']
};
/*const{nombre,apodo,armas}=masPersonajes;
console.log(nombre);
console.log(armas);
const [principal, secundaria, definitiva] = armas;
console.log(definitiva);*/

const nombrePersonaje = 'Kai\'Sa';
const razaPersonaje = 'Humana, tocada por el Vacío';
const armasPersonaje = [{tipo: 'Misiles de Vacío', cantidad: 12},{tipo: 'Energia del Vacío', cantidad: 3}];
const requetePersonaje = {
    nombre: nombrePersonaje,
    raza: razaPersonaje,
    armas: armasPersonaje,
    edad: 20
}

//console.log(requetePersonaje);

const requetePersonaje2 = {
    nombrePersonaje,
    razaPersonaje,
    armasPersonaje,
    edad: 20
}

console.log(requetePersonaje2);
