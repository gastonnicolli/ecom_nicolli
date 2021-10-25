import React, {useState, useEffect} from 'react'
import { promises } from '../../helpers/promises';
import Item from '../item/Item';
import "./Promises.css"

const Promises = ({products}) => {
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
        <div>
            {/* <h1>Promises</h1> */}
            <h3 className={isSuccess ? "successMessage" : "successError"}>{message}</h3>
            {isLoading && <h2>Loading ....</h2>}
            {isFinished && <h2>Se ha finalizado la repuesta</h2>}
            {currentProducts.map((product) => (
                <Item key={products.id} {...product} />
            ))}
        </div>
    )
}

export default Promises
