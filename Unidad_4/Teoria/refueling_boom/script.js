const comprueba = document.getElementById("comprueba");
const mensaje = document.getElementById("mensaje");
const aqui = document.getElementById("aqui");

comprueba.addEventListener("click", (e) => {
    mensaje.innerHTML = "";
    let x = aqui.value;
    try {
        if(x == "") throw "¡Esta vacio!";
        if(isNaN(x)) throw "¡No es un numero!";
        if(x < 5) throw "¡Es un valor muy pequeño!";
        if(x > 10) throw "¡Es un valor demasiado grande!";
    } catch (error) {
        mensaje.innerHTML = "Ha ocurrido un error: "+error;
    }
}, false);