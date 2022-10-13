import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="nav">
            <h1>La Bolsa del Deporte</h1>
            <ul className="listaNav">
                <li>Escalada</li>
                <li>Esquí y Snowboard</li>
                <li>Bicicletas</li>
                <CartWidget />
            </ul>
            
            
        </nav>
        )
}

export default NavBar;