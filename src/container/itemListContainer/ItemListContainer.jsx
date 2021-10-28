import React from 'react'
import {ItemList} from '../../componets/itemList/ItemList'
import {Promises} from './componets/promises/Promises';
import {products} from './data/products'

const ItemListContainer = ({greeting}) => {
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentProducts, setcurrentProducts] = useState([])

    useEffect(() => {
        if(products){
            Promises(products,setMessage ,setIsSuccess, setIsFinished, setIsLoading, setcurrentProducts )
        }
    }, [products])

    return (
        <div>
            <p>{greeting}</p>
            <ItemList currentProducts></ItemList>
        </div>
    )
}

export default ItemListContainer
