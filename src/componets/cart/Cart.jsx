import { Button } from 'react-bootstrap';
import CartItem from './CartItem'

const Cart = ({items}) => {
    let total=0;
    let cant =0;
    Object.entries(items).forEach(([key, value]) => {
        total += parseInt(value.count)  * value.item.price;
        cant += parseInt(value.count);
    })

    return (
        <>
            <div>
                <h1>Carrito Compra</h1>
                <p>Products in Cart: {items.length.toString()}</p>
                <p>Items in Cart: {cant}</p>
                <div className="row">
                <div className="col-1 text-primary">Id</div>
                <div className="col-2 text-primary">Name</div>
                <div className="col-2 text-primary">Description</div>
                <div className="col-2 text-primary">Price</div>
                <div className="col-1 text-primary">Quantity</div>
                
                {items.map((currentItem) =>
                    <CartItem id={currentItem.item.id}
                            name={currentItem.item.name}
                            description={currentItem.item.description}
                            price={currentItem.item.price}
                            count={currentItem.count}/>
                    )}
                </div>
            </div>
            <div className="row">
                <h3>Total Compra: $ {total}</h3>
            </div>
            <div >
                <Button variant='success'>Comprar</Button>
            </div>
        </>
    )
}

export default Cart