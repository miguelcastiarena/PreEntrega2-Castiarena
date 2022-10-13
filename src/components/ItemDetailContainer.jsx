import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from './productos/productos';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

useEffect (()=>{
    const cargarProducto = () => {
        return new Promise ((res,rej) => {
            let producto = productos.find((prod)=> prod.id ===1)
            setTimeout(() => {
                res(producto)
            }, 1000);
            
        })
    }
    
    cargarProducto()
    .then((res)=>{
        setItem(res)
    })
    .catch((error)=>{
        console.log(error)
    })
}, [])

    
    return (
        <div className="ItemDetailContainer">
            <ItemDetail item={item}/>
        </div>
        )
}

export default ItemDetailContainer;