let primeraFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R. Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

var listaPartidos = document.getElementById("listaPartidos");

for (let i = 0; i < 4; i++) {
    const aleatorioFemLocal = primeraFem[Math.floor(Math.random() * primeraFem.length)];
    const aleatorioFemVisitante = primeraFem[Math.floor(Math.random() * primeraFem.length)]

    listaPartidos.innerHTML += "<h3> Jornada "+(i+1)+" <span>"+aleatorioFemLocal+"</span> - <span>"+aleatorioFemVisitante+"</span> </h3>"
}
