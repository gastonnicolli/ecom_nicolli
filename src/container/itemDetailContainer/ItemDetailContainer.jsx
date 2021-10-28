import React from 'react'
import ItemDetail from '../../componets/itemDetail/ItemDetail'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemDetailContainer = ({product}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <ItemDetail key={product.id} {... product}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer
