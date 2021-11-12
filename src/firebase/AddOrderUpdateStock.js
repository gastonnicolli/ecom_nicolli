import React,{ useState } from "react";
import { getFirestore} from "./firebase";

const db = getFirestore();
const batch = db.batch();
const orders = db.collection('orders');


const AddOrderUpdateStock = ({buyer,items,total}) => {
    let orderCreatedId = null;
    let newOrder = {
        user: buyer,
        items: items,
        total: total,
        // date: Date.now(),
    };

    console.log('newOrder en add: ', newOrder);

    orders
      .add(newOrder)
      .then((response) => {
            newOrder.items.forEach(({ item, count }) => {
            console.log('count en add:  ', count);
            console.log('item en add:  ', item);
            const docRef = db.collection("products").doc(item.id);
            batch.update(docRef, { stock: item.stock - count});
        });
        batch.commit();
        return response.id;
      })
      .catch((error) => console.log(error));
}

export default AddOrderUpdateStock;