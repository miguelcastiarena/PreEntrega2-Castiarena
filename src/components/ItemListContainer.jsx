import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams  } from "react-router-dom"; 
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../components/services/firebaseConfig"


const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const [loader, setLoader] = useState(true)

    const {seccionElegida} = useParams();

useEffect (()=>{
                     
    const collectionProd = collection(database, "productos")
    const q = query(collectionProd, where("seccion", "==", seccionElegida || "" ))

    getDocs(seccionElegida ? q : collectionProd)
    .then((res)=>{
        const products = res.docs.map((prod)=>{
            return {
                id: prod.id,
                ...prod.data(),
            }
        })
        setItems(products)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        setLoader(false)
    })
    return () => setLoader(true) 

}, [seccionElegida])

    
    return (

        <main>
            {loader ? 
            <h1>Cargando...</h1>
            :
            <div className="itemListContainer">
                <ItemList items={items}/>
            </div>
            }
            
        </main>
        
        )
}

export default ItemListContainer;
