import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const cartEmpty = <FontAwesomeIcon
    className="super-crazy-colors"
    size="2x"
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    icon={faShoppingCart} />


const CartWidget = () => {
    const {items} = useContext(CartContext)
    let quantity=0;

    Object.entries(items).forEach(([key, value]) => {
        quantity += parseInt(value.count);
    })

    const cart = (quantity > 0) ? cartEmpty : null;

    return (
        <div className='d-inline-flex'>
            <div className="icon" ><Link to="/Cart" className="align-items-end">{cart}</Link></div>
            {(quantity > 0) ?
                <span className="cart_menu_num" >{quantity}</span>
             : null}
        </div>
    )
}

export default CartWidget
