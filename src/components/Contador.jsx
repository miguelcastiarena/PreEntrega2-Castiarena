import React, { useState } from "react"

const Contador = (props) => {
    let [counter, setCounter] = useState(0)

    const sumar = () => {
        counter < props.stock && setCounter(counter +1)
    }

    const restar = () => {
        counter > 0 && setCounter(counter -1)
    }
    return (
        <div className="contador">
            <button onClick={sumar} className="btn-contador">+</button>
            <button className="btn-contador" disabled>{counter}</button>
            <button onClick={restar} className="btn-contador">-</button>
            {counter > 0 
            && 
            (<button onClick={()=>props.prueba({counter})}>Agregar al carrito</button>) 
            }
        </div>
        
        
      
    );
  }
  
  export default Contador;