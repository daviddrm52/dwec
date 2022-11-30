
function Ahorcado() {
    let intentos = 5;
    let nombreUsuario;
    let palabras = [
        ["ordenador"],
        ["aeropuerto"],
        ["silla"],
        ["supermercado"],
        ["zarandear"],
        ["melocoton"],
        ["xpeke"],
        ["spoiler"],
        ["pista"],
        ["ramen"]
    ];
    nombreUsuario = prompt("Introduce tu nombre para la partida: ☆*: .｡. o(≧▽≦)o .｡.:*☆");
    if (nombreUsuario != null){
        document.getElementById("nombreUsuario").innerHTML=nombreUsuario;
    }
    //document.querySelector("#btn-revision").addEventListener("click",verificar);
    const aleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    document.getElementById("intentosRestantes").innerHTML=intentos;
    document.getElementById("aleatoria").innerHTML=aleatoria;
    /*do{

    } while(intentos >= 1 || mensajeInicial===aleatoria);*/
}

function VerificarPalabra(){
    
}

Ahorcado();

/*
AHORCADO, que debe contener

1 reloj cuenta toda la partida
1 reloj cada 10 segundos te resta un intento si no haces nada
guardar records usando LocalStorage: llave que sera la palabra, tiempo que ha llevado resolverlo, y numero de fallos (tiene que estar guardado como record de errores)

*/


//RELOJ DE LA PARTIDA
window.onload = cronometro;
       
function cronometro(){
    setTimeout(1000);
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById("tiempoPartida").innerHTML="00:00:00";
    registros();
    id = setInterval(registros,1000);
}

function registros(){
    var horasAuxiliares, minutosAuxiliares, segundosAuxiliares;
    segundos++;
    if (segundos > 59){
        minutos++;
        segundos = 0;
    }
    if (minutos > 59){
        horas++;
        minutos = 0;
    }
    if (horas > 24){
        horas = 0;
    }
    if (segundos < 10){
        segundosAuxiliares= '0' + segundos;
    } else {
        segundosAuxiliares = segundos;
    }
    if (minutos < 10){
        minutosAuxiliares = '0' + minutos;
    } else {
        minutosAuxiliares = minutos;
    }
    if (horas < 10){
        horasAuxiliares = '0' + horas;
    } else {
        horasAuxiliares = horas;
    }
    document.getElementById("tiempoPartida").innerHTML = horasAuxiliares + ':' + minutosAuxiliares + ':' + segundosAuxiliares; 
}
