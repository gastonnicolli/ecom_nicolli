import "./itemCount.css";
import { Button } from "react-bootstrap";

const ItemCount = ({count, setCount, stock}) => {
    const increment = () => {
      setCount((c) =>(c === stock) ? c=stock : (c + 1));
    };
    const decrement = () => {
      setCount((c) =>(c === 0) ? c=0 :  (c - 1));
    };

    return (
      <div  className="d-flex flex-row justify-content-center alig-items-center ">
        <Button id="increment" onClick={increment}> + </Button>
        <h4>Cantidad: {count}</h4>
        <Button id="decrement" onClick={decrement}> - </Button>
      </div>
    );
}

export default ItemCount;
