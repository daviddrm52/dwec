let primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];    

var listaPartidos = document.getElementById("listaPartidos");

for (let i = 0; i < 10; i++) {
    const aleatorioMascLocal = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
    const aleatorioMascVisitante = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]

    listaPartidos.innerHTML += '<div class="jornadas"> <h3> Jornada '+(i+1)+' <span>'+aleatorioMascLocal+'</span> - <span>'+aleatorioMascVisitante+'</span> </h3> </div>';
}
