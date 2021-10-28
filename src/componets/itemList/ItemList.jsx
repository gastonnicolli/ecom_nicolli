import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstra';
import { promises } from '../../helpers/promises';
import "./ItemList.css"

const ItemList = ({products}) => {
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
            <h1>Promises</h1>
            <h3 className={isSuccess ? "successMessage" : "successError"}>{message}</h3>
            {isLoading && <h2>Loading ....</h2>}
            {isFinished && <h2>Se ha finalizado la repuesta</h2>}
            <Container fluid>
                {currentProducts.map((product) => (
                    <Item key={products.id} {...product} />
                ))}
            </Container>
        </div>
    )
}

export default ItemList