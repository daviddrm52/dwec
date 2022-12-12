const boton = document.getElementById("boton");

function cuantoQuemadoEstas(){
    let contador = 0;
    const formulario = document.forms["formulario"];
    const resultado = document.getElementById("resultado");
    const consejo = document.getElementById("consejo");
    let texto = "";
    let i;
    for(i = 0; i < formulario.length; i++){
        if(formulario.elements[i].checked) {
            contador++;
        }
    }
    if(contador == 0){
        resultado.innerHTML = "Bien hecho, sigue asi ☆*: .｡. o(≧▽≦)o .｡.:*☆"
    }
    if(contador > 3){
        resultado.innerHTML = "Deberias empezar a frenar un poco...";
    }
    if(contador > 5){
        resultado.innerHTML = "Si sigues asi te quedan dos telediarios";
    }
    if(contador > 7){
        resultado.innerHTML = "Your life is nothing, you serve zero purpose, you should kill yourself NOW, and give somebody else a piece of that oxygen in the ozone layer that's covered up so we can breathe inside of this blue trapped bubble. Like what are you even here for? To worship me? Kill yourself. and I mean that with a hundred percent, with a thousand percent.";
    }
    if(contador == 10){
        resultado.innerHTML = "Que haces por aqui, te ha revivido el SCP-049!?";
    }
}

boton.addEventListener("click", (e) => {
    e.preventDefault();
    cuantoQuemadoEstas();
});