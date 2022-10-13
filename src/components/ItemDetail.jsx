import Contador from "./Contador";

const ItemDetail = ({ item }) => {
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
        <Contador />
      </div>
      
    </div>
  );
};

export default ItemDetail;
