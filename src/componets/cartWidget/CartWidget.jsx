import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const cartEmpty = <FontAwesomeIcon icon={faShoppingCart} />
const cartFull = <FontAwesomeIcon icon={faCartPlus} />


const CartWidget = ({quantity}) => {
    const cart = (quantity > 0) ? cartFull : cartEmpty;

    return (
        <div className='d-inline-flex'>
            {cart}
            {(quantity > 0) ? <p>{quantity}</p> : null}
        </div>
    )
}

export default CartWidget
