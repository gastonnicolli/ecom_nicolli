import React, { useContext, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ItemCount from '../itemCount/ItemCount'
import Cereal from '../../Images/Cereal.png';

const total = (n1, n2) =>{
    let calc = (Number(n1) * Number(n2));
    return calc;
}

const ItemDetail = ({id, name, description, stock, price}) => {
    const [count, setCount] = useState(1);
    const {addItem}=useContext(CartContext);

    const handleAddItem = () => {
        const item = {name, description, price, id};
        addItem({item,count});
    }
    
    return (
        
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    Component Item
                </Card.Title>
                <Card.Img variant="top" src={ Cereal } alt="Avatar"/>
                <Card.Text><strong>ID: </strong>{id}</Card.Text>
                <Card.Text><strong>Name: </strong>{name}</Card.Text>
                <Card.Text><strong>Description: </strong>{description}</Card.Text>
                <Card.Text><strong>Stock: </strong>{stock}</Card.Text>
                <Card.Text><strong>Price: </strong>{price}</Card.Text>
                <ItemCount count={count} setCount={setCount} stock={stock}></ItemCount>
                <hr/>
                <div>
                    {(count>0) && <Card.Text><strong>Total: </strong> {total(count, price)}</Card.Text>}
                    {(count>0) && <Button variant="primary" onClick={handleAddItem} >Agregar a carrito</Button>}
                    {(count>0) && <Link to="/Cart"  >Ir a carrito</Link>}
                </div>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
