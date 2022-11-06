import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Contador from "./Contador";
import {CartContext} from "../context/CartContext"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const ItemDetail = ({ item }) => {
  const [unidades, setUnidades] = useState(0);

  const { addToCart, prodCantidad } = useContext(CartContext)

  const onAdd = (numero) => {
    setUnidades(numero)
    addToCart( item, numero)
    toast.success(`Agregaste ${numero} productos al carrito`)
  }

  const cantidad = prodCantidad(item.id)

  return (
    <div className="detailContainer">
      <ToastContainer />
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
            <Contador onAdd={onAdd} stock={item.stock} initial={cantidad}/>
          ) : (
            <Link to="/carrito">Ir al carrito</Link>
          )

        }
        

      </div>
      
    </div>
  );
};

export default ItemDetail;
