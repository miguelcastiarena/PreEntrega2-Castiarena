import Contador from "./Contador";

const Item = ({prod}) => {
    console.log(prod)
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
            </div>
            
        </div>
    )
}

export default Item;