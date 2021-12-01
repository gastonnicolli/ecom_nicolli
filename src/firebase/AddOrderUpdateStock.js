import { getFirestore } from "./firebase";
const db = getFirestore();
const batch = db.batch();
const orders = db.collection("orders");

const AddOrderUpdateStock = (buyer, items, total, setNewId) => {

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


  orders
  .add(newOrder)
  .then((response) => {
      items.forEach(element => {

      const docRef = db.collection("products").doc(element.item.id)
      batch.update(docRef, {
        stock: element.item.stock - element.count // no estoy seguro de la estructura de tus datos, capaz no funcione así
      })
    })
    setNewId(response.id);
    batch.commit();
  })
  .catch((error) => console.log(error));
}
export default AddOrderUpdateStock;