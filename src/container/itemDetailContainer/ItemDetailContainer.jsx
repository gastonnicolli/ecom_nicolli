import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import ItemDetail from '../../componets/itemDetail/ItemDetail';
import Spinner from '../../componets/spinner/Spinner'
import { GetProductById } from '../../firebase/getProductById';


const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct]=useState([])

useEffect(() => {
        GetProductById(itemId,setMessage ,setIsSuccess, setIsFinished, setIsLoading, setProduct )
}, [itemId])

    return (
        <div className='custom-container'>
            <h3 className={isSuccess ? "successMessage" : "successError"}>{message}</h3>
            {isLoading && <Spinner />}
            
            <ItemDetail key={product.id} {...product}/>

        </div>
    )
}

export default ItemDetailContainer
