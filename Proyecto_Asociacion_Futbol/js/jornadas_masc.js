let primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];

var arrayEnfrentamientos = new Array(2);

let repetidorQuiniela = document.getElementById("partidosQuiniela");

for (let i = 0; i < 10; i++) {
    const aleatorioMascLocal = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
    const aleatorioMascVisitante = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]

    repetidorQuiniela.innerHTML += '<tr> <td> '+(i+1)+' </td> <td>'+aleatorioMascLocal+' vs '+aleatorioMascVisitante+'</td> <td><input type="radio" id="" name="quiniela-'+(i+1)+'" value="1"></td><td><input type="radio" id="" name="quiniela-'+(i+1)+'" value="x"></td><td><input type="radio" id="" name="quiniela-'+(i+1)+'" value="2"></td> <td id=quiniela-'+(i+1)+'> </td> </tr>';
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
    }
}