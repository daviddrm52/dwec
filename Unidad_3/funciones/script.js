
/*function suma(a,b){
    return a+b;
}*/

/*let suma = new Function("a","b", "return a + b");

let c = suma(4,6);
console.log(c);

function factorial(numero){
    if(numero==0){
        return 1;
    } else{
        return(numero * factorial(numero - 1));
    }
}

console.log(factorial(5));

function fibonosequienesetioitaliano(num){
    return num < 1 ? 0
        :num <= 2 ? 1
        :fibonosequienesetioitaliano(num-1)+fibonosequienesetioitaliano(num-2)
}

console.log(fibonosequienesetioitaliano(4));

function unaFuncion(a,b){
    console.log(a);
    console.log(a+b)
}

unaFuncion("Fimosis");*/

/*let objetoVacio = {}
//console.log(objetoVacio);

let unCliente = {
    nombre: 'Capitan Fimosis',
    'dirección del cliente': 'Calle de Las Nieves nº98',
    '+-+-+-+-+-': 'pero que coño?',
    pagos: {
        tipo: 'Visa',
        'numero de la tarjeta': 7772817572,
        'fecha de caducidad': 'nunca'
    }
};

console.log(unCliente['dirección del cliente']);

let estudiante = {
    id: 2,
    nombre: 'Jose',
    diHola: () => 'Hola!'
};

console.log(estudiante.nombre);
console.log(estudiante.diHola());

//muestraCamposYValores(unCliente);*/

let factura = {
    descripcion: 'Factura de ejemplo',
    precio: 100.00,
    iva: 21.00,
    subTotal: () => this.precio,
    total: function() {
        return this.precio + ((this.precio * this.iva) / 100);
    }
}; 

console.log(factura);
console.log(factura.total());

//Funciones auxiliares
function muestraCamposYValores(miObjeto){
    for(campo in miObjeto){
        if(typeof(miObjeto[campo]) == 'object'){
            muestraCamposYValores(miObjeto[campo]);
        } else{
            console.log(campo + ':  ' + miObjeto[campo]);
        }
    }
}