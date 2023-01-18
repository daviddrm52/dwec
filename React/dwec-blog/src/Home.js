import {useState} from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {titulo: 'Mi nueva web LowEffortGaming', body: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHH", autor: "Fimosis", id: 1 },
        {titulo: 'Zona de recogida de basuras', body: "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", autor: "Huberto", id: 2 },
        {titulo: 'Los moyai de las Islas de Pascua', body: "MOOOOOOOOOOOOOOAAAAAAAAAAAAAIIIIIIIII", autor: "Kesante", id: 3 },
    ]);

    //Jitterclick de mierda low effort
    const [click, setJitter] = useState(0);
    const handleJitter = () => {
        setJitter(click+1);
    }

    return ( 
        <div className="home">
            <h1>Pagina de Inicio</h1>
            <h1>¡Bienvenido!</h1>

            <h2>Blogs disponbles</h2>
            { blogs.map((blog) => (
                <div className="blogPreview" key={blog.id}>
                    <h3>{ blog.titulo} </h3>
                    <p> Escrito por { blog.autor} </p>
                </div>
            ))}

            <br />
            <div title="Low effort jitterclick">
                <p> Has realizado { click } clicks </p>
                <button onClick={handleJitter}><b>click</b></button>
            </div>
        </div>
     );
}
 
export default Home;