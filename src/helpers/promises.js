export const promises = (products,setMessage ,setIsSuccess, setIsFinished, setIsLoading, setcurrentProducts) =>{
    const productsResponse = new Promise((resolve, reject) => {
        //Synchronous code
        setTimeout(() => {
            resolve(products);
        }, 2000);
        
        // reject("This petition is rejected");
    });

    productsResponse
    .then((result) => {
        console.log(result);
        setMessage(`Result is correct ${JSON.stringify(result)}`);
        setIsSuccess(true);
        setcurrentProducts(result);
        }
    )
    .catch((error) => {
        console.log(`Error in progress ${error}`);
        setMessage(`Error: ${error}`);
        setIsSuccess(false);
    })
    .finally(() => {
        setIsFinished(true);
        setIsLoading(false);
    });
}