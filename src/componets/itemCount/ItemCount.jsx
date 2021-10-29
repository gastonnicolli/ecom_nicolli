import { useState } from "react";
import "./itemCount.css";


const ItemCount = ({count, setCount, stock}) => {

    const increment = () => {
      setCount((c) =>(c === stock) ? c=stock : (c + 1));
    };
    
    const decrement = () => {
      setCount((c) =>(c === 0) ? c=0 :  (c - 1));
    };  
    return (
      <div className="counter-container">
        <button onClick={increment}> + </button>
        <h4>Cantidad: {count}</h4>
        <button onClick={decrement}> - </button>
      </div>
    );
}

export default ItemCount;
