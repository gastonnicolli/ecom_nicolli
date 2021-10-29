export const getProduct = (products,id, setMessage,setIsSuccess,setIsFinished,setIsLoading, setCurrentProduct) =>{
    const product = products.find(product => product.id === id);
    
    const productResponse = new Promise((resolve, reject) => {
        //Synchronous code
        setTimeout(() => {
            resolve(product);
        }, 2000);
    });

    productResponse
    .then((result) => {
        setIsSuccess(true);
        setCurrentProduct(result);
        }
    )
    .catch((error) => {
        setMessage(`Error: ${error}`);
        setIsSuccess(false);
    })
    .finally(() => {
        setIsFinished(true);
        setIsLoading(false);
    });
}
