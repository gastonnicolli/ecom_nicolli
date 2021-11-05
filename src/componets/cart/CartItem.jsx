import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/cartContext'

const CartItem = ({id, name, description, price, count}) => {
    const {removeItem} = useContext(CartContext)

    const handleRemoveItem = (idItem) => {
        removeItem(idItem);
    }

    return (
        <div className="row">
            <div className="col-1">{id}</div>
            <div className="col-2">{name}</div>
            <div className="col-2">{description}</div>
            <div className="col-2">{price}</div>
            <div className="col-1">{count}</div>
            <div className="col-1">
                <Button variant="primary" onClick={() => handleRemoveItem(id)}>Eliminar</Button>
            </div>
        </div>
    )
}

export default CartItem
