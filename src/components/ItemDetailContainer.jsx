import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { productos } from './productos/productos';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const {id} = useParams();

useEffect (()=>{
    const cargarProducto = () => {
        return new Promise ((res,rej) => {
            let producto = productos.find((prod)=> prod.id === parseInt(id) )
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
}, [id])

    
    return (
        <div className="ItemDetailContainer">
            <ItemDetail item={item}/>
        </div>
        )
}

export default ItemDetailContainer;