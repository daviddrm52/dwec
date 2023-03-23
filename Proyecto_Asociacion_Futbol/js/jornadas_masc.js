primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];

var arrayEnfrentamientos = new Array(2);

let repetidorQuiniela = document.getElementById("partidosQuiniela");

for (let i = 0; i < 10; i++) {
    const aleatorioMascLocal = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
    const aleatorioMascVisitante = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]

    repetidorQuiniela.innerHTML += '<tr> <td> '+(i+1)+' </td> <td>'+aleatorioMascLocal+' vs '+aleatorioMascVisitante+'</td> <td><input type="radio" id="1-quiniela-'+(i+1)+'" name="quiniela-'+(i+1)+'" value="1"></td><td><input type="radio" id="x-quiniela-'+(i+1)+'" name="quiniela-'+(i+1)+'" value="x"></td><td><input type="radio" id="2-quiniela-'+(i+1)+'" name="quiniela-'+(i+1)+'" value="2"></td> <td id=quiniela-'+(i+1)+'> </td> </tr>';
}

function verificarQuiniela() {
    let valoresResultados = [0,1,2,3,4,5];

    for (let i = 1; i <= 10; i++) {
        const numAleatorioLocal = valoresResultados[Math.floor(Math.random() * valoresResultados.length)];
        const numAleatorioVisitante = valoresResultados[Math.floor(Math.random() * valoresResultados.length)];

        console.log('quiniela-'+i);
        document.getElementById('quiniela-'+i).innerHTML = +numAleatorioLocal+' - '+numAleatorioVisitante;
        if(numAleatorioLocal > numAleatorioVisitante){
            document.getElementById('quiniela-'+i).style.backgroundColor = "#339933";
        } else if (numAleatorioLocal < numAleatorioVisitante){
            document.getElementById('quiniela-'+i).style.backgroundColor = "#ff6666";
        } else if (numAleatorioLocal == numAleatorioVisitante) {
            document.getElementById('quiniela-'+i).style.backgroundColor = "#33ccff";
        }

        document.getElementById('1-quiniela-'+i).disabled = true;
        document.getElementById('x-quiniela-'+i).disabled = true;
        document.getElementById('2-quiniela-'+i).disabled = true;
    }


    document.querySelector("#btnVerificar").disabled = true;
}

/*function scheduleMatchDays(){
    const numberOfMatchDays = this.primeraMasc.length - 1; //Num de jornadas
    const numberOfMatchesPerDay = this.primeraMasc.length / 2; //Num de partidos por jornada

    console.log(numberOfMatchDays);
    console.log(numberOfMatchesPerDay);

    for(let i = 0; i < numberOfMatchDays; i++){
        const matchDay = [];
        for (let j = 0; j < numberOfMatchesPerDay; j++){
            let match = {local: 'local', visitante: 'visitante'};
            matchDay.push(match);
            console.log(match);
        }
        this.matchDaySchedule.push(matchDay);
    };
};

function setAwayTeams(){
    const teamNames = this.primeraMasc.map (team => team.name);
    const maxAwayTeams = this.primeraMasc.length - 1;
    let teamIndex = this.primeraMasc.length -1 -1;
    this.matchDaySchedule.forEach(matchDay => {
        matchDay.forEach(function (match, index) {
            if (index === 0){
                match.away = teamNames[maxAwayTeams];
                match.away = teamNames[teamIndex];
                -teamIndex;
            };
        });
    });
};

//scheduleMatchDays();
setAwayTeams();*/