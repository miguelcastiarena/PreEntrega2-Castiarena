import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { productos } from './productos/productos';

const ItemListContainer = () => {
    const [items, setItems] = useState([])

useEffect (()=>{
    const cargarProductos = () => {
        return new Promise ((res,rej) => {
            setTimeout(() => {
                res(productos)
            }, 1000);
            
        })
    }
    cargarProductos()
    .then((res)=>{
        setItems(res)
    })
    .catch((error)=>{
        console.log(error)
    })
}, [])

    
    return (
        <div className="ItemListContainer">
            <ItemList items={items}/>
        </div>
        )
}

export default ItemListContainer;