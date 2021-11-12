import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ItemCount from '../itemCount/ItemCount'


const total = (n1, n2) =>{
    let calc = (Number(n1) * Number(n2));
    return calc;
}

const cartEmpty = <FontAwesomeIcon
    className="super-crazy-colors"
    size="2x"
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    icon={faShoppingCart} />

const ItemDetail = ({id, name, description, stock, price, imageUrl}) => {
    const [count, setCount] = useState(1);
    const {addItem}=useContext(CartContext);
    const handleAddItem = () => {
        const item = {name, description, price, id, imageUrl, stock};
        addItem({item,count});
    }
    
    return (
        
        <Card className="card border-primary mb-3" style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Header>
                    <strong>{name}</strong>
                </Card.Header>
                <Card.Title></Card.Title>
                <Card.Img variant="top" src={ imageUrl } alt="Avatar"/>
                <Card.Text><strong>ID: </strong>{id}</Card.Text>
                <Card.Text><strong>Description: </strong>{description}</Card.Text>
                <Card.Text><strong>Stock: </strong>{stock}</Card.Text>
                <Card.Text><strong>Price: </strong>{price}</Card.Text>
                <ItemCount count={count} setCount={setCount} stock={stock}></ItemCount>
                <hr/>
                <div id="secFooterCard">
                    {/* <div className="row">
                        {(count>0) && <Card.Text><strong>Total: </strong> {total(count, price)}</Card.Text>}
                    </div> */}
                    <div className="row">
                        <div className="col-md-9">
                            {(count>0) && <Button variant="primary" onClick={handleAddItem}>
                                Agregar a carrito</Button>}
                        </div>
                        <div className="col-md-3">
                            {(count>0) && <Link to="/Cart" className="align-items-end">
                                {cartEmpty}</Link>}
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
