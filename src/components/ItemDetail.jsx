import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Contador from "./Contador";
import CartContext from "../context/CartContext"

const ItemDetail = ({ item }) => {
  const [unidades, setUnidades] = useState(0);

  const { addToCart } = useContext(CartContext)

  const prueba = (numero) => {
    setUnidades(numero)
    addToCart( item, numero)
  }

  return (
    <div className="detailContainer">
      <img src={item.imagen} alt={item.nombre} className="imgDetail" />
      <div>
        <h2>{item.nombre}</h2>
        <h3>Categoría: {item.seccion}</h3>
        <h4>Precio: ${item.precio}</h4>
        <h4>Stock: {item.stock}</h4>

        <p>
          Descripcion general del producto. Estado: {item.estado}
        </p>
        {
          unidades === 0 ? (
            <Contador prueba={prueba} stock={item.stock}/>
          ) : (
            <Link to="/carrito">Ir al carrito</Link>
          )

        }
        

      </div>
      
    </div>
  );
};

export default ItemDetail;
