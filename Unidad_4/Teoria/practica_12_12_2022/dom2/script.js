const input = document.querySelector('input');
const parrafo = document.querySelector('p');
const boton = document.querySelector('button');
const color = document.querySelector('#color');

function colores() {
    document.querySelector('.ejemplo').style.backgroundColor = "red";
    document.querySelector('p').innerHTML = "rojo";
}

boton.addEventListener('click', (e) => {
    parrafo.innerHTML = eval(input.value);
});

color.addEventListener('click', (e) => {
    colores();
    const nuevoParrafo = document.createElement('p');
    const contenidoNuevoParrafo = document.createTextNode("Soy un parrafo nuevo UwU");

    const nuevoNuevoParrafo = document.createElement('p');
    const contenidoNuevoNuevoParrafo = document.createTextNode("Soy un parrafo creado de la nada ヾ(≧▽≦*)o");
    
    nuevoParrafo.appendChild(contenidoNuevoParrafo);
    document.body.appendChild(nuevoParrafo);

    nuevoNuevoParrafo.appendChild(contenidoNuevoNuevoParrafo);
    document.body.appendChild(nuevoNuevoParrafo);
});