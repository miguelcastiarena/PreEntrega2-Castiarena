import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { productos } from './productos/productos';
import { useParams  } from "react-router-dom"; 

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const {seccionElegida} = useParams();

useEffect (()=>{
    const cargarProductos = () => {
        return new Promise ((res,rej) => {
            const prodFiltrados = productos.filter((prod)=> prod.seccion === seccionElegida)
            setTimeout(() => {
                res(seccionElegida ? prodFiltrados : productos)
            }, 400);
            
        })
    }
    cargarProductos()
    .then((res)=>{
        setItems(res)
    })
    .catch((error)=>{
        console.log(error)
    })
}, [seccionElegida])

    
    return (
        <main>
            <div className="itemListContainer">
                <ItemList items={items}/>
            </div>
        </main>
        
        )
}

export default ItemListContainer;