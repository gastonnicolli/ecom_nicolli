import { getFirestore } from "../firebase/firebase";

export const GetProducts =(
    setMessage,
    setIsSuccess, 
    setIsFinished, 
    setIsLoading, 
    setProducts, 
    categoryId,
    ) =>{
        const db = getFirestore();
        let fetchData;
        if (!categoryId) {
            fetchData = db.collection("products");
        } else {
            fetchData = db.collection("products").where("categoryId", "==", categoryId);
        }
        fetchData
        .get()
        .then( querySnapshot => {
            // console.log('querySnapshot:  ', querySnapshot)
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
                }))
                );
                setIsSuccess(true);
            }
        })
        .catch(error => {
            setMessage('Error en getProducts: ', error)
        })
        .finally(() => {
            setIsFinished(true);
            setIsLoading(false);
        });
    }

// const productsByCategory = fetchData.where("categoryId", "==", categoryId) 
// productsByCategory
//     .get()
//     .then( querySnapshot => {
//         if(querySnapshot.size === 0)
//         {
//             console.log('No hay Items');
//             setProducts([]);
//             return
//         }
//         else{
//             setProducts(querySnapshot.docs.map(document => ({
//                 id: document.id,
//                 ...document.data()
//             })));
//             setIsSuccess(true);
//         }
//     })
//     .catch(error => {
//         setMessage('Error en getProducts: ', error)
//     })
//     .finally(() => {
//         setIsFinished(true);
//         setIsLoading(false);
//     })
// }