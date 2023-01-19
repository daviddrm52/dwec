import {useState} from "react";
import ListaBlogs from "./listaBlogs";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {titulo: 'Mi nueva web LowEffortGaming', body: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHH", autor: "Fimosis", id: 1 },
        {titulo: 'Zona de recogida de basuras', body: "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", autor: "Huberto", id: 2 },
        {titulo: 'Los moyai de las Islas de Pascua', body: "MOOOOOOOOOOOOOOAAAAAAAAAAAAAIIIIIIIII", autor: "Kesante", id: 3 },
        {titulo: 'Los juegos indie del momento', body: "AAAAAAAAAAAAHHHhhhhhhhhhhhhhhhh, kirby", autor: "Ana Spelunky", id: 4 },
        {titulo: 'World in Chaos, 5 años con el SCP:SL', body: "Te imaginas que se muere WiC, imposible", autor: "Jesus", id: 5 },
    ]);

    //Jitterclick de mierda low effort
    const [click, setJitter] = useState(0);
    const handleJitter = () => {
        setJitter(click+1);
    }

    return ( 
        <div className="home">
            <ListaBlogs blogs={blogs}/>
            <div className="jitter" title="Low effort jitterclick">
                <h3>Prueba del ratón</h3>
                <p> Has realizado { click } clicks </p>
                <button className="jitterButton" onClick={handleJitter}><h2><b>🖱️</b></h2></button>
            </div>
        </div>
     );
}
 
export default Home;