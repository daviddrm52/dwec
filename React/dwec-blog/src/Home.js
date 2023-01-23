import {useState, useEffect} from "react";
import ListaBlogs from "./listaBlogs";

const Home = () => {
    
    
    {/*const [blogs, setBlogs] = useState([
        {titulo: 'Mi nueva web LowEffortGaming', body: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHH", autor: "Jesus", id: 1 },
        {titulo: 'Zona de recogida de basuras', body: "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", autor: "Huberto", id: 2 },
        {titulo: 'Los moyai de las Islas de Pascua', body: "MOOOOOOOOOOOOOOAAAAAAAAAAAAAIIIIIIIII", autor: "Kesante", id: 3 },
        {titulo: 'Los juegos indie del momento', body: "AAAAAAAAAAAAHHHhhhhhhhhhhhhhhhh, kirby", autor: "Ana Spelunky", id: 4 },
        {titulo: 'World in Chaos, 5 años con el SCP:SL', body: "Te imaginas que se muere WiC, imposible", autor: "Jesus", id: 5 },
    ]);*/}

    const [blogs, setBlogs] = useState(null);

    const [nombre, setNombre] = useState('Antonio');

    const handleEliminarBlog = (id) => {
        const blogsAux = blogs.filter(b => b.id != id);
        setBlogs(blogsAux);
    }

    useEffect(() => {
        console.log('useEffect disparado');
        fetch('http://localhost:8000/blogs')
        .then(res => {
            res.json();
        })
        .then(data => {
            console.log(data);
        })
    }, []);


    //Jitterclick de mierda low effort
    const [click, setJitter] = useState(0);
    const handleJitter = () => {
        setJitter(click+1);
    }

    return ( 
        <div className="home">
            {/* <ListaBlogs blogs={ blogs } titulo="Listado completo de blogs" handleEliminarBlog={handleEliminarBlog}/>
            <button onClick={() => setNombre('Huberto')}> Cambia nombre </button>
            <p> {nombre} </p> */}
            
            <div className="jitter" title="Low effort jitterclick">
                <h3>Prueba del ratón</h3>
                <p> Has realizado { click } clicks </p>
                <button className="jitterButton" onClick={handleJitter}><h2><b>🖱️</b></h2></button>
            </div>
        </div>
     );
}
 
export default Home;

{/*

ENDPOINTS

/blogs		GET		Devuelve todos los blogs
/blogs/{id}		GET		Devuelve el blog con esa id
/blogs/ 		POST		Añade un nuevo blog
/blogs/{id} 	DELETE	Elimina un blog

Comando para el JSON
npx json-server --watch data/db.json --port 8000

*/}