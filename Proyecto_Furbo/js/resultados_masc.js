let repetidorQuiniela = document.getElementById("partidosQuiniela");

for (let i = 0; i < 10; i++) {
    repetidorQuiniela.innerHTML += '<tr> <td> '+(i+1)+' </td> <td>'+aleatorioMascLocal+' vs '+aleatorioMascVisitante+'</td> <td> 1<input type="radio" id="" name="quiniela-'+(i+1)+'" value="1"> X<input type="radio" id="" name="quiniela-'+(i+1)+'" value="x"> 2<input type="radio" id="" name="quiniela-'+(i+1)+'" value="2"> </td> <td> N/A </td> </tr>';
}
