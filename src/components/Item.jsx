import Contador from "./Contador";
import { Link } from "react-router-dom";

const Item = ({prod}) => {
    
    return (
        
        <div className="card">
            <div>
                <img src={prod.imagen} alt={prod.nombre} className="img"/>
            </div>
            <div className="cardInfo">
                <h2>{prod.nombre}</h2>
                <h4>${prod.precio}</h4>
                <h5>#{prod.seccion}</h5>
                <Contador stock={prod.stock}/>
                <Link to={`/item/${prod.id}`}>Ver Producto</Link>
            </div>
            
        </div>
    )
}

export default Item;