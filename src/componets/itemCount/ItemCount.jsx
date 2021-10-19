import { useState } from "react";
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
      <div className="App">
        <button onClick={increment}> + </button>
        <p>{count}</p>
        <button onClick={decrement}> - </button>
      </div>
    );
}

export default ItemCount;
