function Ahorcado() {
    let intentos = 5;
    let mensajeInicial;
    let palabras = [
        ["ordenador"],
        ["aeropuerto"],
        ["silla"],
        ["supermercado"],
        ["zarandear"],
        ["melocoton"],
        ["xpeke"]
    ];

    const aleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    console.log(palabras);
    console.log(aleatoria);
    do{
        mensajeInicial = prompt("Introduce una palabra, y te dire si es correcta ☆*: .｡. o(≧▽≦)o .｡.:*☆");
        if(mensajeInicial == aleatoria){
            alert("Palabra correcta, saliendo del programa");
        } else{
            --intentos;
            alert("No es correcto, te quedan "+intentos+" intentos restantes");
        }
    } while(intentos >= 1 || mensajeInicial===aleatoria);
}

Ahorcado();