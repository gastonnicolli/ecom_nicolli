import React, { useContext } from 'react'
import {CartContext} from '../../context/cartContext'
import Cart from '../../componets/cart/Cart'
import { Container } from 'react-bootstrap';

const CartContainer = () => {
    const {items}=useContext(CartContext);

    return (
        <Container>
            <h1>CartContainer</h1>
            
            { (items.length > 0) ? <Cart items={items} /> : <h4>Cart sin Items</h4> }
        </Container>
    )
}

export default CartContainer