import React, {useState, useEffect} from 'react'
import ItemList from '../../componets/itemList/ItemList'
import {promises} from '../../helpers/promises';
import {products} from '../../data/products'
import '../container.css'

const ItemListContainer = () => {
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentProducts, setcurrentProducts] = useState([])

    useEffect(() => {
        if(products){
            promises(products,setMessage ,setIsSuccess, setIsFinished, setIsLoading, setcurrentProducts )
        }
    }, [products])

    return (
        <div className='custom-container'>
            <h1>Lista de productos</h1>
            <h3 className={isSuccess ? "successMessage" : "successError"}>{message}</h3>
            {isLoading && <h2>Loading ....</h2>}
            <div>
                <ItemList products={currentProducts}></ItemList>
            </div>
        </div>
    )
}

export default ItemListContainer
