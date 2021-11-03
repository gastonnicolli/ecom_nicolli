import React, { useContext } from 'react'
import {CartContext} from '../../context/cartContext'
import Cart from '../../componets/cart/Cart'

const CartContainer = () => {
    const {items}=useContext(CartContext);
    console.log('items',items)

    return (
        <div>
            <h1>CartContainer</h1>
            { (items.length > 0) ? <Cart items={items} /> : <h4>Cart sin Items</h4>}
        </div>
    )
}

export default CartContainer