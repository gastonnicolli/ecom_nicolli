import React, {useState, useEffect} from 'react'
import ItemList from '../../componets/itemList/ItemList'
import {getProducts} from '../../helpers/getProducts';
import {products} from '../../data/products'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentProducts, setcurrentProducts] = useState([])

    useEffect(() => {
        if(products){
            getProducts(products,setMessage ,setIsSuccess, setIsFinished, setIsLoading, setcurrentProducts )
        }
    }, [products])

    return (
        <div >
            <h1>Lista de productos</h1>
            <h3 className={isSuccess ? "successMessage" : "successError"}>{message}</h3>
            {isLoading && <h2>Loading ....</h2>}
            <div className='custom-container'>
                <ItemList products={currentProducts}></ItemList>
            </div>
        </div>
    )
}

export default ItemListContainer
