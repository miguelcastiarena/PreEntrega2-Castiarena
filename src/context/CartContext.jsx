import { createContext, useState } from "react";


const CartContext = createContext();    

const Provider = (props) =>{
    const [carrito, setCarrito] = useState([])

    const addToCart = (item, cantidad) => {
        const producto = {...item, cantidad}
        if (isInCart(producto.id)) {

        } else {
            setCarrito([...carrito, producto])
        }

        
    }
    const isInCart = (id) => carrito.some((prod) => prod.id === id)

    const borrarCarrito = () => setCarrito([])

    return(
        <CartContext.Provider value={{carrito, addToCart, borrarCarrito}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider;