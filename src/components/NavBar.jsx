import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to='/'>La Bolsa del Deporte</Link>
            <ul className="listaNav">
                <NavLink to='/seccion/escalada'>Escalada</NavLink>
                <NavLink to='/seccion/esqui'>Esquí y Snowboard</NavLink>
                <NavLink to='/seccion/bicicletas'>Bicicletas</NavLink>
                <NavLink to='form'>Contacto</NavLink>
                <Link to='/carrito'>
                    <CartWidget />
                </Link>
                
            </ul>
            
            
        </nav>
        )
}

export default NavBar;