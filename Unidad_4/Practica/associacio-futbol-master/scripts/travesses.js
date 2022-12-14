primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];    
segundaFem= ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R. Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

const aleatorioMascLocal = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
const aleatorioMascVisitante = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
const aleatorioFemLocal = segundaFem[Math.floor(Math.random() * segundaFem.length)];
const aleatorioFemVisitante = segundaFem[Math.floor(Math.random() * segundaFem.length)];

document.getElementById("jornadaMasculinaLocal").innerHTML=aleatorioMascLocal;
document.getElementById("jornadaFemeninaLocal").innerHTML=aleatorioFemLocal;
document.getElementById("jornadaMasculinaVisitante").innerHTML=aleatorioMascVisitante;
document.getElementById("jornadaFemeninaVisitante").innerHTML=aleatorioFemVisitante;
