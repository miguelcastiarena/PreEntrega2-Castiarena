import { useContext } from "react";
import CartContext from "../context/CartContext"



const Carrito =()=>{
    const { carrito } = useContext(CartContext);

    return(
        <div>
            <h2>Soy el Carrito</h2>
            {
                carrito.map((prod) =>(
                    <div key={prod.id}> 
                        <img src={prod.imagen} alt={prod.nombre} />
                        <div>
                            <h2>{prod.nombre}</h2>
                            <h3>${prod.precio}</h3>
                            <h3>Cantidad: {prod.cantidad}</h3>
                            <h3>Subtotal: {prod.precio * prod.cantidad}</h3>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Carrito;