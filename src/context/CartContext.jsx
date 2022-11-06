import { createContext, useState } from "react";


export const CartContext = createContext();    

const Provider = (props) =>{
    const [carrito, setCarrito] = useState([])

    const addToCart = (item, cantidad) => {
        const producto = {...item, cantidad}
        if (isInCart(producto.id)) {
            sumarCantidad(producto)
        } else {
            setCarrito([...carrito, producto])
        }

        
    }
const sumarCantidad = (prodAgregado) => {
    const carritoActualizado = carrito.map((prodDelCarrito) => {
        if (prodDelCarrito.id === prodAgregado.id)  {
            const prodActualizado = {
                ...prodDelCarrito, 
                cantidad: prodAgregado.cantidad,
            };
            return prodActualizado;
        } else {
            return prodDelCarrito
        }
    })
    setCarrito(carritoActualizado);
}

    ;

    const isInCart = (id) => carrito.some((prod) => prod.id === id)

    const borrarCarrito = () => setCarrito([])

    const borrarUno = (id) => {
        const prodFiltrados = carrito.filter((prod)=>prod.id !== id)
        setCarrito(prodFiltrados)
    }

    const totalUnidades = () =>{
        let num = 0
        const carrito2 = [...carrito]
        carrito2.forEach((prod) => {
            num = num + prod.cantidad
        });
        return num
    }

    const precioTotal = () => {
        let num = 0
        const carrito2 = [...carrito]
        carrito2.forEach((prod)=> {
            num = num + prod.precio * prod.cantidad
        })
        return num
        }

        
    const prodCantidad = (id) => {
        const producto = carrito.find((prod)=>prod.id === id)
        return producto?.cantidad
    }

    

    return(
        <CartContext.Provider value={{carrito, addToCart, borrarCarrito, borrarUno, totalUnidades, prodCantidad, precioTotal}}>
            {props.children}
        </CartContext.Provider>
    )
}


export default Provider;