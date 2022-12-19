const equipo = document.getElementById("equipo");
const sugerencia = document.getElementById("sugerencia");

//Eventos
equipo.addEventListener("keyup",(e)=>{
    let str = e.target.value;
    if(str.length == 0){
        sugerencia.innerHTML = "";
        return;
    } else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if(e.target.readyState == 4 && e.target.status == 200){
                sugerencia.innerHTML = e.target.responseText;
            }
        };
        xmlhttp.open("GET", )
    }
});

//That sounds skill issue to me