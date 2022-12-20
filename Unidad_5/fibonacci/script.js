/* WEB WORKER */

const botones = document.getElementsByTagName("button");
const resultado = document.getElementById("resultado");

let w;

function startWebWorker() {
    if(typeof(Worker) !== "undefined"){
        if(typeof(w) == "undefined"){
            w = new Worker("trabajador.js");
        }
        w.onmessage = function (event) {
            resultado.innerHTML = event.data;
        };
    } else {
        resultado.innerHTML = "Fallo al ejecutar el Worker!";
    }
};

function stopWebWorker() {
    w.terminate();
    w = undefined;
};

//Eventos
botones[0].addEventListener("click", ()=> {
    console.log("b1");
    startWebWorker();
}, false);
botones[1].addEventListener("click", ()=> {
    console.log("b2");
    stopWebWorker();
}, false);

//Comprobación en equipo local