let primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];

var arrayEnfrentamientos = new Array(2);

let repetidorQuiniela = document.getElementById("partidosQuiniela");

for (let i = 0; i < 10; i++) {
    const aleatorioMascLocal = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
    const aleatorioMascVisitante = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]

    /*arrayEnfrentamientos[0+i][0+i]=aleatorioMascLocal;
    arrayEnfrentamientos[0+i][0+i+1]=aleatorioMascVisitante;

    console.log(arrayEnfrentamientos[i][i]);
    console.log(arrayEnfrentamientos[i][i+1]);*/

    repetidorQuiniela.innerHTML += '<tr> <td> '+(i+1)+' </td> <td>'+aleatorioMascLocal+' vs '+aleatorioMascVisitante+'</td> <td> 1<input type="radio" id="" name="quiniela-'+(i+1)+'" value="1"> X<input type="radio" id="" name="quiniela-'+(i+1)+'" value="x"> 2<input type="radio" id="" name="quiniela-'+(i+1)+'" value="2"> </td> <td> N/A </td> </tr>';
}
