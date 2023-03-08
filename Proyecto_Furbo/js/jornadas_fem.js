let primeraFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R. Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

var arrayEnfrentamientos = new Array(2);

let repetidorQuiniela = document.getElementById("partidosQuiniela");

for (let i = 0; i < 4; i++) {
    const aleatorioFemLocal = primeraFem[Math.floor(Math.random() * primeraFem.length)];
    const aleatorioFemVisitante = primeraFem[Math.floor(Math.random() * primeraFem.length)]

    repetidorQuiniela.innerHTML += '<tr> <td> '+(i+1)+' </td> <td>'+aleatorioFemLocal+' vs '+aleatorioFemVisitante+'</td> <td><input type="radio" id="" name="quiniela-'+(i+1)+'" value="1"></td><td><input type="radio" id="" name="quiniela-'+(i+1)+'" value="x"></td><td><input type="radio" id="" name="quiniela-'+(i+1)+'" value="2"></td> <td id=quiniela-'+(i+1)+'>  </td> </tr>';
}

function verificarQuiniela() {
    let valoresResultados = [0,1,2,3,4,5];

    for (let i = 1; i <= 4; i++) {
        const numAleatorioLocal = valoresResultados[Math.floor(Math.random() * valoresResultados.length)];
        const numAleatorioVisitante = valoresResultados[Math.floor(Math.random() * valoresResultados.length)];

        console.log('quiniela-'+i);
        document.getElementById('quiniela-'+i).innerHTML = +numAleatorioLocal+' - '+numAleatorioVisitante;
    }
}