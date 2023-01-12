import './App.css';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  /* 
  const titulo = "Bienvenidos al Blog de DWEC";
  var links = ["https://www.youtube.com/watch?v=-zqDzCT41l0",
                "https://www.google.com/?safe=active&ssui=on",
                "https://en.scpslgame.com/index.php?title=Main_Page",
                "https://www.jetphotos.com/photo/10834173"]; */
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <div className="contenido">
        <h1>App Component</h1>
      </div>
      {/* <ul>
        {
          links.map((value, index) => {
            return <li key={ index }>{ index+1 } - <a href={ value }>{value}</a></li>
          })
        }
      </ul> */}

    </div>
  );
}

export default App;
