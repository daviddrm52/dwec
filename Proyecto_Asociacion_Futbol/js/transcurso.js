let primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];    

var partMasc = document.getElementById("partidosMasculinos");

partMasc.innerHTML = "";
  
for (let i = 0; i < primeraMasc.length; i++) {
    partMasc.innerHTML += "<tr><td><b>"+primeraMasc[i]+"</b></td></tr>";

}


let segundaFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R. Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

var partFem = document.getElementById("partidosFemeninos");

partFem.innerHTML = "";

for (let i = 0; i < segundaFem.length; i++) {
    partFem.innerHTML += "<tr><td><b>"+segundaFem[i]+"</b></td></tr>";
}
