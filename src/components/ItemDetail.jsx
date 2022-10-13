import Contador from "./Contador";

const ItemDetail = ({ item }) => {
  return (
    <div className="detailContainer">
      <img src={item.imagen} alt={item.nombre} className="imgDetail" />
      <h2>{item.nombre}</h2>
      <h3>{item.seccion}</h3>
      <h4>${item.precio}</h4>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sed nisi
        iure. Cupiditate voluptatum fuga placeat sed mollitia, autem quos
        necessitatibus vitae debitis nobis, distinctio quis alias error? Amet,
        in!
      </p>
      <Contador />
    </div>
  );
};

export default ItemDetail;
