let crear = document.getElementById('crear');
let mostrar = document.getElementById('mostrar');
let eliminar = document.getElementById('eliminar');
let misCookies = document.getElementById('misCookies');

//Funciones
function crearCookie() {
    let aerolineaCookie = "All_Nippon_Airways";
    document.cookie = "airline="+ encodeURIComponent(aerolineaCookie)+";expires=31 Oct 2022, 00:00:00Z";
    document.cookie = "aircraft=B763;expires=31 Oct 2022, 00:00:00Z";
    document.cookie = "registration=JA601A;expires=31 Oct 2022, 00:00:00Z";
    document.cookie = "status=active;expires=31 Oct 2022, 00:00:00Z";
}

function mostrarCookies(){
    misCookies.innerHTML = document.cookie;
}

function EliminaCookies(){
    document.cookie = "airline=; max-age=0";
    document.cookie = "aircraft=; max-age=0";
    document.cookie = "registration=; max-age=0";
    document.cookie = "status=; max-age=0";

}
//Eventos
crear.addEventListener('click', crearCookie, false);
mostrar.addEventListener('click', mostrarCookies, false);
eliminar.addEventListener('click', EliminaCookies, false);
