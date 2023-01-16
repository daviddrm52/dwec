const Home = () => {

    const handleClick = () => {
        console.log("WARNING: UNAUTHORIZED ACCESS DETECTED, RELEASING MEMETIC KILL AGENT");
    }

    const handleClickAgain = () => {
        const nombre = ["David", "Aaron", "Jesus", "Adrian", "Miquel"];
        const nombreRandom = nombre[Math.floor(Math.random() * nombre.length)];
        //document.getElementsById("nombres").innerHTML=nombreRandom;
        console.log(nombreRandom);
    }


    return ( 
        <div className="home">
            <h2>Pagina de Inicio</h2>
            <h4>¡Bienvenido!</h4>
            <button onClick={handleClick}>Activar botón</button>
            <button onClick={handleClickAgain}>Activar botón otra vez</button>
            <div id="nombres">

            </div>
        </div>
     );
}
 
export default Home;