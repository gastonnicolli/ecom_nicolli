import { getFirestore} from "../firebase/firebase";

export const GetProductById =
(itemId,setMessage ,setIsSuccess, setIsFinished, setIsLoading, setProduct) => {

    if(itemId){
        const db = getFirestore()
        const itemCollection = db.collection('products')
        const itemById = itemCollection.doc(itemId)
        console.log('itemById:  ', itemById)
        itemById
            .get()
            .then(document => {
                if(!document.exists){
                    console.log("No item");
                    return;
                }
                setProduct({ id: document.id, ...document.data() })
            }
            )
            .catch(error => {
                setMessage('Error: ', error)
            })
            .finally(() => {
                setIsFinished(true);
                setIsLoading(false);
            })
    }

}