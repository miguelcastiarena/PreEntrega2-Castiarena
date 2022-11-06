import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { productos } from './productos/productos';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const [loader, setLoader] = useState(true)

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
    .finally(()=>{
        setLoader(false)
    })
    return ()=> setLoader(true)
}, [id])

    
    return (
        <div>
            {
                loader ? <h3>Cargando....</h3>
            :
            <div className="ItemDetailContainer">
                <ItemDetail item={item}/>
            </div>
            }
        </div>
        
        )
}

export default ItemDetailContainer;