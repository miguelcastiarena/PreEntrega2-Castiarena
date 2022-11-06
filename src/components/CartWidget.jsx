import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalUnidades } = useContext(CartContext)

  let total = totalUnidades()
  
  return (
    <div >
      <span className="material-symbols-outlined">shopping_cart</span> 
<span> {total > 0 && totalUnidades()}</span>
    </div>
  );
};

export default CartWidget;
