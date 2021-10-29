import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../itemCount/ItemCount'
import Cereal from '../../Images/Cereal.png';

const total = (n1, n2) =>{
    let calc = (Number(n1) * Number(n2));
    return calc;
}

const ItemDetail = ({id, name, description, stock, price}) => {


    const [count, setCount] = useState(1);
    return (
        <>
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
                        {(count>0) && <Button variant="primary"  >Agregar a carrito</Button>}
                        {(count>0) && <Card.Text><strong>Total: </strong> {total(count, price)}</Card.Text>}
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail
