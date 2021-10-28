import { useState } from "react";
import "./ItemCount.css";

const stock = 25;

const ItemCount = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
      setCount((c) =>(c === stock) ? c=stock : (c + 1));
    };
    
    const decrement = () => {
      setCount((c) =>(c === 0) ? c=0 :  (c - 1));
    };  
    return (
      <div className="counter-container">
        <button onClick={increment}> + </button>
        <h4>Cantidad seleccionada: {count}</h4>
        <button onClick={decrement}> - </button>
      </div>
    );
}

export default ItemCount;
