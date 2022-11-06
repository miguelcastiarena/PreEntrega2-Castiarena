import { useContext } from "react";
import {CartContext} from "../context/CartContext"
import { Link } from 'react-router-dom';

const Carrito =()=>{
    const { carrito, borrarUno, precioTotal } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div>
                <h1>Aún no hay productos en el carrito</h1>
                <Link to="/">Ir a Inicio</Link>
            </div>
            
        )
    }

    return(
        <div>
            <h2>Carrito</h2>
            {
                carrito.map((prod) =>(
                    <div className="carrito" key={prod.id}> 
                        <img className="imgDetail" src={prod.imagen} alt={prod.nombre} />
                        <div>
                            <h2>{prod.nombre}</h2>
                            <h3>${prod.precio}</h3>
                            <h3>Cantidad: {prod.cantidad}</h3>
                            <h3>Subtotal: {prod.precio * prod.cantidad}</h3>
                            <button onClick={()=> borrarUno(prod.id)}>Quitar del carrito</button>
                        </div>
                        
                        
                    </div>
                ))
            }
            <h2>Valor total de la compra: {precioTotal()}</h2>
            <Link to='/form'>Finalizar la compra</Link>
        </div>
    )
}

export default Carrito;