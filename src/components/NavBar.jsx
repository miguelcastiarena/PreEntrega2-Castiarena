import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { database } from './services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const NavBar = () => {
    const [secciones, setSecciones] = useState([])

    useEffect(()=>{

         const collectionCat = collection(database, 'secciones')
        getDocs(collectionCat)
            .then((res)=>{
                const categorias = res.docs.map((cat)=>{
                    return {
                        id: cat.id,
                        ...cat.data( )
                    }
                })
                setSecciones(categorias)
            })
            .catch((error)=>{
                console.log(error)
            })
    },[])

    return (
        <nav className="nav">
            <Link to='/'>La Bolsa del Deporte</Link>
            <ul className="listaNav">
                {secciones.map((cat) => (
                    <NavLink key={cat.id} to={`/seccion/${cat.path}`}>{cat.name}</NavLink>
                ))}        
            </ul>
            <Link to='/carrito'>
                <CartWidget />
            </Link>
            
        </nav>
        )
}

export default NavBar;