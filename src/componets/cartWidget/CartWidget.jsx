import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/cartContext'

const cartEmpty = <FontAwesomeIcon icon={faShoppingCart} />
const cartFull = <FontAwesomeIcon icon={faCartPlus} />


const CartWidget = () => {
    const {items} = useContext(CartContext)
    console.log('items que llegana a CartWidget', items)
    let quantity=0;

    Object.entries(items).forEach(([key, value]) => {
        quantity += parseInt(value.count);
    })

    const cart = (quantity > 0) ? cartEmpty : null;

    return (
        <div className='d-inline-flex'>
            <div className="icon" >{cart}</div>
            
            {(quantity > 0) ? <p>{quantity}</p> : null}
        </div>
    )
}

export default CartWidget
