import personas from './jotason.json' assert {type:'json'};

const texto = '[{"nombre":"Pedro", "ciudad":"Mahón"}, {"nombre":"Antonio", "ciudad":"Ciudadela"}, {"nombre":"Jesus", "ciudad":"Cadiz"}]';
const obj = JSON.parse(texto);
const ejemplo = document.getElementById("ejemplo");

console.log(personas.avion[0]);

for(let i=0; i < obj.length; i++){
    ejemplo.innerHTML += obj[i].nombre + "<br>" + obj[i].ciudad + "<br>";
}
