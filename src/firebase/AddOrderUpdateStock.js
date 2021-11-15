import { getFirestore } from "./firebase";
const db = getFirestore();
const batch = db.batch();
const orders = db.collection("orders");

const AddOrderUpdateStock = (buyer, items, total, setNewId) => {

  console.log('items en Add:  ', items);

  const itemsOrder = items.forEach((element) => ({
    id: element.id,
    name: element.name,
    price: element.price,
    count: element.count,
  }));

  let newOrder = {
    user: buyer,
    items: items,
    total: total,
    // date: Date.now(),
};

  
  console.log('items en newOrder en Add:  ', newOrder.items);
  console.log("newOrder en add: ", newOrder);

  orders
  .add(newOrder)
  .then((response) => {
      items.forEach(element => {

      const docRef = db.collection("products").doc(element.item.id)
      console.log('docRef: ', docRef)
      console.log('id??? : ', element.item.id)
      batch.update(docRef, {
        stock: element.item.stock - element.count // no estoy seguro de la estructura de tus datos, capaz no funcione así
      })
    })
    batch.commit();
    setNewId(response.id);
  })
  .catch((error) => console.log(error));
}
export default AddOrderUpdateStock;