import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { database } from "../services/firebaseConfig";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [loading, setLoading] = useState(false)

  const [orderId, setOrderId] = useState('')

  const {carrito, precioTotal, borrarCarrito} = useContext(CartContext)

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    const order = {
      buyer: {nombre,apellido},
      items: carrito ,
      total: precioTotal(),
      date: serverTimestamp(),
    }
    const ordersCollection = collection(database,'orders')
    addDoc(ordersCollection, order)
    .then((res)=> {
      setOrderId(res.id);
      borrarCarrito();
    })
    .catch((error)=> {
      console.log(error)
    })
    .finally(()=> setLoading(false))
  };

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleChangeApellido = (e) => {
    setApellido(e.target.value);
  };
 

  if (orderId) {
    return (
      <div>
        <h2>Tu compra a sido realizada exitosamente, </h2>
        <h2>Tu codigo de seguimiento es ${orderId}</h2>
      </div>
    ) 
  } else {
    return (
    <div className="form">
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChangeNombre}
          value={nombre}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChangeApellido}
          value={apellido}
        />
        <button>{loading ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </div>
  );
  }
  
};

export default Form;
