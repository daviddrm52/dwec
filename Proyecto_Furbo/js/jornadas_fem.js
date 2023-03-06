let primeraFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R. Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

let repetidorQuiniela = document.getElementById("partidosQuiniela");

for (let i = 0; i < 4; i++) {
    const aleatorioFemLocal = primeraFem[Math.floor(Math.random() * primeraFem.length)];
    const aleatorioFemVisitante = primeraFem[Math.floor(Math.random() * primeraFem.length)];

    repetidorQuiniela.innerHTML += '<tr> <td> '+(i+1)+' </td> <td>'+aleatorioFemLocal+' vs '+aleatorioFemVisitante+'</td> <td> 1<input type="radio" id="" name="quiniela-'+(i+1)+'" value="1"> X<input type="radio" id="" name="quiniela-'+(i+1)+'" value="x"> 2<input type="radio" id="" name="quiniela-'+(i+1)+'" value="2"> </td> <td> N/A </td> </tr>';
}
