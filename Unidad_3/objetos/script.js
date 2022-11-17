function coche(marca, modelo, color, puertas, kms, combustible){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.puertas = puertas;
    this.kms = kms;
    this.combustible = combustible;
}

let miCoche = new coche("Mitsubishi","Evolution","gris",5,10000,"diesel");
let tuCoche = new coche("Ford","Mondeo","blanco",5,222000,"gasolina");

let otroCoche = miCoche;

console.log(miCoche);
console.log(tuCoche);

console.log(otroCoche);