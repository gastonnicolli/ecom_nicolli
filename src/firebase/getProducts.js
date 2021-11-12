import React, { useEffect } from "react";
import { getFirestore } from "../firebase/firebase";

export const GetProducts =(setMessage ,setIsSuccess, setIsFinished, setIsLoading, setProducts, categoryId) =>{
const db = getFirestore();
const fetchData = db.collection("products");
if(!categoryId){
    fetchData
    .get()
    .then( querySnapshot => {
        console.log('querySnapshot:  ', querySnapshot)
        if(querySnapshot.size === 0)
        {
            console.log('No hay Items');
            setProducts([]);
            return
        }
        else{
            setProducts(querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            })));
            setIsSuccess(true);
        }
    })
    // .catch(error => {
    //     setMessage('Error en getProducts: ', error)
    // })
    .finally(() => {
        setIsFinished(true);
        setIsLoading(false);
    })
    return
}

const productsByCategory = fetchData.where("categoryId", "==", categoryId)
productsByCategory
    .get()
    .then( querySnapshot => {
        if(querySnapshot.size === 0)
        {
            console.log('No hay Items');
            setProducts([]);
            return
        }
        else{
            setProducts(querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            })));
            setIsSuccess(true);
        }
    })
    .catch(error => {
        setMessage('Error en getProducts: ', error)
    })
    .finally(() => {
        setIsFinished(true);
        setIsLoading(false);
    })
}