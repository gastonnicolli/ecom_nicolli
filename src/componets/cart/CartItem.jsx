import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/cartContext'

const CartItem = ({id, name, description, price, count, stock}) => {
    const {removeItem} = useContext(CartContext)

    const handleRemoveItem = (idItem) => {
        removeItem(idItem);
    }

    return (
        <div className="row m-2">
            <div className="col-2">{id}</div>
            <div className="col-2">{name}</div>
            {/* <div className="col-2">{description}</div> */}
            <div className="col-2">{price}</div>
            <div className="col-1">{count}</div>
            <div className="col-1">
                <Button className="btn btn-danger" onClick={() => handleRemoveItem(id)}>Eliminar</Button>
            </div>
        </div>
    )
}

export default CartItem
