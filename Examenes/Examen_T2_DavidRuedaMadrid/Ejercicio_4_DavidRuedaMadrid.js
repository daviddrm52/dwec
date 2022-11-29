//Declaración de variables
let nif = "";
let resto = "";

//Array de las letras
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let letraNIF = "";
let esCorrecto = false;

while(!esCorrecto){
    //
    esCorrecto = true;
    nif = prompt("Introduce tu numero del NIF sin la letra por favor...");

    if(isNaN(nif)){
        console.log("Inroduzca un valor numerico entre 0 y 99999999");
        //Bucle continue
        esCorrecto = false;
    } else {
        //Pasamos la cadena a numero
        nif = parseInt(nif);
        //
        if(nif < 0 || nif > 99999999){
            console.log("Introduce un valor correcto: entre 0 y 99999999");
            //El bucle continua
            esCorrecto = false;
        }
    }
}

//
resto = nif%23;

//Posicion que buscar en array
letraNIF = letras[resto];

console.log(nif + letraNIF);