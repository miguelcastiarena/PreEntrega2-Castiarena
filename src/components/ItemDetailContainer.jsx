import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { database } from "../components/services/firebaseConfig"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const [loader, setLoader] = useState(true)

    const {id} = useParams();

useEffect (()=>{

    const collectionProd = collection(database, "productos")
    const ref = doc(collectionProd,id)  
    getDoc(ref)
    .then((res)=> {
        setItem({
                id: res.id,
                ...res.data(),
        })
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        setLoader(false)
        })

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
