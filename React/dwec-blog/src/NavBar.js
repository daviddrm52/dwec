const NavBar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <h1>El blog de DWEC</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/crear" style={miEstilo}>Nuevo Blog</a>
                </div>
            </div>
        </nav>
     );
}

const miEstilo = {
    color: '#fff',
    backgroundColor: '#ffa500',
    borderRadius: '8px'
}

export default NavBar;