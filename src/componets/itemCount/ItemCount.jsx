import "./itemCount.css";
import { Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

const ItemCount = ({count, setCount, stock}) => {
    const increment = () => {
      setCount((c) =>(c === stock) ? c=stock : (c + 1));
    };
    
    const decrement = () => {
      setCount((c) =>(c === 0) ? c=0 :  (c - 1));
    };

    return (
      <div  className="d-flex flex-row justify-content-center alig-items-center ">
        <Button id="increment" onClick={increment}><FontAwesome
            className="super-crazy-colors"
            name="angle-up"
            size="2x"
            // spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></Button>
        <h4>Cantidad: {count}</h4>

        <Button id="decrement" onClick={decrement}>
          <FontAwesome
            className="super-crazy-colors"
            name="angle-down"
            size="2x"
            // spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
        </Button>
      </div>
    );
}

export default ItemCount;
