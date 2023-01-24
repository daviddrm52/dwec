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
    const [cargando, setCargando] = useState(true);

    const handleEliminarBlog = (id) => {
        const blogsAux = blogs.filter(b => b.id != id);
        setBlogs(blogsAux);
    }

    useEffect(() => {
        setTimeout(() => {
            console.log('useEffect disparado');
            fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw Error('No se ha podido recuperar la información.');
                }
                return res.json();
            })
            .then(data => {
                //console.log(data);
                setBlogs(data);
                setCargando(false);
            })
            .catch(err => {
                console.log("Network error: "+err.message);
            })
        }, 3000);
    }, []);


    //Jitterclick de mierda low effort
    const [click, setJitter] = useState(0);
    const handleJitter = () => {
        setJitter(click+1);
    }

    return ( 
        <div className="home">
            { cargando && <div>Cargando...</div> }
            { blogs && <ListaBlogs blogs={ blogs } titulo="Listado completo de blogs" handleEliminarBlog={handleEliminarBlog}/> }
            
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