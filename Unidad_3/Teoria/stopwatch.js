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

    function cronoInicio() {
        let hora = 00;
        let minuto = 00;
        let segundo = 00;

        segundo = segundo + 1;
    
        let tiempoReal = document.getElementById('reloj');
        tiempoReal.innerHTML = hora + ':' + minuto + ':' + segundo;
    }
    let inicioStopwatch;
    inicioStopwatch = setInterval(cronoInicio);


function final(){
    var horaActual = new Date();
    let hora = '';
    let minuto = '';
    let segundo = '';

    let tiempoReal = document.getElementById('watch');
    tiempoReal.innerHTML = hora + ':' + minuto + ':' + segundo;

    let inicioStopwatch;
    inicioStopwatch = clearInterval(final);
}




//getHours() -> Metodo que extrae las horas del objeto Date();
//getMinutes() -> Metodo que extrae los minutos del objeto Date();
//getSeconds() -> Metodo que extrae los segundos del objeto Date();