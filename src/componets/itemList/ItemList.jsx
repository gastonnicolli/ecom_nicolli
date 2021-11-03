import React from 'react'
import Item from '../item/Item'
import "./ItemList.css"


const ItemList = ({products}) => {
    return (
        <div>
            {products.map((product) => (
                <Item key={product.id} {...product} />
            ))}
        </div>
    )
}

export default ItemList