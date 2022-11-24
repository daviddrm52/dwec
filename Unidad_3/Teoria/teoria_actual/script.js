//FUNCIONES setTimeout() y setInterval();

/*
    - setTimeout(funcion, milisegundos);
        Ejecutará la funcion "funcion" transcurrido el tiempo indicado en "milisegundos".

    - setInterval(funcion, milisegundos);
        La funcion "funcion" de manera periodica segun los milisegundos introducidos en el segundo campo.

    - clearInterval(funcion_llamada_por_setInterval);
        Para la ejecucion de setInterval().

    - clearTimeout();
        Para la ejecucion iniciada de setTimeout().
*/

function relojUTC() {
    var miFecha = new Date();
    let horas = miFecha.getUTCHours();
    let minutos = miFecha.getUTCMinutes();
    let segundos = miFecha.getUTCSeconds();

    if(horas < 10){horas = '0' + horas; }
    if(minutos < 10){minutos = '0' + minutos; }
    if(segundos < 10){segundos = '0' + segundos; }
    
    let texto = document.getElementById('hora');

    texto.innerHTML = horas + ':' + minutos + ':' + segundos;
}

let elReloj;

window.onload = function() {
    elReloj = setInterval(relojUTC);
}

//getHours() -> Metodo que extrae las horas del objeto Date();
//getMinutes() -> Metodo que extrae los minutos del objeto Date();
//getSeconds() -> Metodo que extrae los segundos del objeto Date();