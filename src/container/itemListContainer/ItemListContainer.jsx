import React from 'react'
import ItemCount from '../../componets/itemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p>{greeting}</p>
            <ItemCount></ItemCount>
        </div>
    )
}

export default ItemListContainer