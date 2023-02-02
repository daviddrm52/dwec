const Main = () => {
    return (
        <main>
            <div className="contenedor-pelicula">
                <label>Escoge una pelicula</label>
                <select id="pelicula">
                    <option value="10">JoJo's Bizzare Adventure: Stardust Crusaders(10€)</option>
                    <option value="12">Los renglones torcidos de Dios (12€)</option>
                    <option value="8">Smile (8€)</option>
                    <option value="9">Halloween: El final (9€)</option>
                </select>
            </div>
            <ul className="leyenda">
                <li>
                    <div className="asiento"></div>
                    <small>N/A</small>
                </li>
                <li>
                    <div className="asiento seleccionado"></div>
                    <small>Seleccionado</small>
                </li>
                <li>
                    <div className="asiento ocupado"></div>
                    <small>Ocupado</small>
                </li>
            </ul>

            <div className="contenedor">
                <div className="pantalla"></div>
                <div className="acomodamientos">
                    <div className="fila">
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                    </div>
                    <div className="fila">
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                    </div>
                    <div className="fila">
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                    </div>
                    <div className="fila">
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                    </div>
                    <div className="fila">
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                    </div>
                    <div className="fila">
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                    </div>
                    <div className="fila">
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                    </div>
                    <div className="fila">
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                        <div className="asiento"></div>
                    </div>
                </div>
            </div>
            <p className="texto"> Ha seleccionado <span id="contador">0</span> asientos por un precio de <span id="total">0</span>€</p>
        </main>
    );
}
 
export default Main;