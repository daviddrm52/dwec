window.onload = inicio;

function inicio(){
    document.querySelector(".iniciar").addEventListener("click",cronometro);
    document.querySelector(".pausar").addEventListener("click",pausar);
    document.querySelector(".reiniciar").addEventListener("click",reiniciar);
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById("cronometro").innerHTML="00:00:00";
}         
function cronometro(){
    registros();
    id = setInterval(registros,1000);
    document.querySelector(".inciar").removeEventListener("click",cronometro);
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
    document.getElementById("cronometro").innerHTML = horasAuxiliares + ':' + minutosAuxiliares + ':' + segundosAuxiliares; 
}

function pausar(){
    clearInterval(id);
    document.querySelector(".iniciar").addEventListener("click",cronometro);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("cronometro").innerHTML="00:00:00";
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.querySelector(".iniciar").addEventListener("click",cronometro);
}