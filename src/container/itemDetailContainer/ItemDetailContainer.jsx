import React, { useState, useEffect } from 'react';
// import { CartContext } from '../../context/cartContext';
import { useParams } from "react-router-dom";
import {getProduct} from '../../helpers/getProduct';
import {products} from '../../data/products'
import './ItemDetailContainer.css'
import ItemDetail from '../../componets/itemDetail/ItemDetail';
import Spinner from '../../componets/spinner/Spinner'


const ItemDetailContainer = ({id}) => {
    const { itemId } = useParams();
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentProduct, setCurrentProduct]=useState([])

    useEffect(() => {
        if(products){
            getProduct(products,itemId,setMessage ,setIsSuccess, setIsFinished, setIsLoading, setCurrentProduct )
        }
    }, [products])

    return (
        <div className='custom-container'>
            <h1>Detalle de Producto</h1>
            <h3 className={isSuccess ? "successMessage" : "successError"}>{message}</h3>
            {isLoading && <Spinner />}
            
            <ItemDetail key={currentProduct.id} {... currentProduct}/>

        </div>
    )
}

export default ItemDetailContainer
