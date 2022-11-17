const contenedor = document.querySelector('.contenedor');
const asientos = document.querySelectorAll('.fila .asiento:not(.ocupado)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');
let precioTicket = +peliculaSelect.value;

rellenarUI();

/* FUNCIONES */

function actualizaSeleccionAsientos(){
    const asientosSeleccionados = document.querySelectorAll('.fila .asiento.seleccionado');
    const asientosIndex = [...asientosSeleccionados].map((asiento) => [...asientos].indexOf(asiento));
    localStorage.setItem('asientosSeleccionados', JSON.stringify(asientosIndex));
    const contadorAsientosSeleccionados = asientosSeleccionados.length;
    contador.innerText = contadorAsientosSeleccionados;
    total.innerText = contadorAsientosSeleccionados * precioTicket;
}

function guardaInfoPelicula(indexPelicula, precioPelicula){
    localStorage.setItem('indexPeliculaSeleccionada', indexPelicula);
    localStorage.setItem('precioPeliculaSeleccionada', precioPelicula);
}


//Recupera la informacion del localStorage y rellena la IU
function rellenarUI() {
    const asientosSeleccionados = JSON.parse(localStorage.getItem('asientosSeleccionados'));
    if(asientosSeleccionados != null && asientosSeleccionados.length > 0){
        asientos.forEach((asiento, index) => {
            if(asientosSeleccionados.indexOf(index) > -1){
                asiento.classList.add('seleccionado');
            }
        });
    } 
    const indexPeliculaSeleccionada = localStorage.getItem('indexPeliculaSeleccionada');
    if(indexPeliculaSeleccionada !== null){
        peliculaSelect.selectedIndex = indexPeliculaSeleccionada;
    }
    const precioPeliculaSeleccionada = localStorage.getItem('precioPeliculaSeleccionada');
    if(precioPeliculaSeleccionada !== null){
        precioTicket = +precioPeliculaSeleccionada;
    }
}

/* EVENTOS */

contenedor.addEventListener('click', (e) => {
    if(e.target.classList.contains('asiento') && !e.target.classList.contains('ocupado')){
        e.target.classList.toggle('seleccionado');
        actualizaSeleccionAsientos();
    }
});

peliculaSelect.addEventListener('change', (e) => {
    precioTicket = +e.target.value;
    guardaInfoPelicula(e.target.selectedIndex, e.target.value);
    actualizaSeleccionAsientos();
});

actualizaSeleccionAsientos();