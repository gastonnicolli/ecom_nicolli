import React from 'react'
import Item from '../item/Item'
import "./ItemList.css"


const ItemList = ({products}) => {
    return (
        <div className='container'>
            <div className='row'>
                {products.map((product) => (
                    <div className='col-md-4 m-2'>
                        <Item key={product.id} {...product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList