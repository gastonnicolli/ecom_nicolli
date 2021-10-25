import React from 'react'
import Item from '../../componets/item/Item'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemDetailContainer = ({product}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Item key={product.id} {... product}/>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetailContainer
