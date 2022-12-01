//Variables
const form = document.getElementById('form');
const nombreUsuario = document.getElementById('nombreUsuario');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Funciones
function muestraError(input, mensaje){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const label = formcontrol.querySelector('label');
    const small = formcontrol.querySelector('small');
    small.innerText = label.innerText + ' ' +mensaje;
}

function muestraCorrecto(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control correcto';

}

function esEmailValido(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase()); //Devolvera true o false
}

function esObligatorio(inputArray){
    inputArray.forEach(function(input) {
        if(input.value.trim() === ''){
            muestraError(input, 'es obligatorio!')
        } else {
            muestraCorrecto(input);
        }
    });
}

//Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    esObligatorio([nombreUsuario, email, password, password2]);
});