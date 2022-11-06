import React, { useEffect, useState } from "react"

const Contador = ({stock, initial = 1, onAdd}) => {
    let [counter, setCounter] = useState(0)

    const sumar = () => {
        counter < stock && setCounter(counter +1)
    }

    const restar = () => {
        counter > 1 && setCounter(counter -1)
    }

useEffect(()=>{
    setCounter(initial)
}, [initial])

    return (
        <div className="contador">
            <button onClick={sumar} className="btn-contador">+</button>
            <button className="btn-contador" disabled>{counter}</button>
            <button onClick={restar} className="btn-contador">-</button>
            {counter > 0 
            && 
            (<button onClick={()=>onAdd(counter)}>Agregar al carrito</button>) 
            }
        </div>
        
        
      
    );
  }
  
  export default Contador;