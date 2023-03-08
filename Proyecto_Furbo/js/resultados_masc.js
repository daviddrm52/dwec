let repetidorQuiniela = document.getElementById("partidosQuiniela");

let valoresResultados = [0,1,2,3,4,5]

for (let i = 0; i < 10; i++) {
    const numAleatorioLocal = valoresResultados[Math.floor(Math.random() * valoresResultados.length)];
    const numAleatorioVisitante = valoresResultados[Math.floor(Math.random() * valoresResultados.length)];

    repetidorQuiniela.innerHTML += '<tr> <td> '+(i+1)+' </td> <td>A vs B</td> <td> '+numAleatorioLocal+'-'+numAleatorioVisitante+' </td> </tr>';
}
