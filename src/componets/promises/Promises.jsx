import React, {useState} from 'react'
import "./Promises.css"

const Promises = () => {
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const task = new Promise((resolve, reject) => {
        //Synchronous code
        //resolve(true);
        reject("This petition is rejected");
    });

    task
    .then(
        (result) => {
            console.log(`Result is correct ${result}`);
            setMessage(`Result is correct ${result}`);
            setIsSuccess(true);
        }
        // (error) => {
        //     console.log(`Error: ${error}`);
        //     setMessage(`Error: ${error}`);
        //     setIsSuccess(false);
        // }
    )
    .catch((error) => {
        console.log(`Error in progress ${error}`);
        setMessage(`Error: ${error}`);
        setIsSuccess(false);
    })
    .finally(() => {
        setIsFinished(true);
        setIsLoading(false);
    })

    return (
        <div>
            <h1>Promises</h1>
            <h3 className={isSuccess ? "successMessage" : "successError"}>{message}</h3>
            {isLoading && <h2>Loading ....</h2>}
            {isFinished && <h2>Se ha finalizado la repuesta</h2>}
        </div>
    )
}

export default Promises
