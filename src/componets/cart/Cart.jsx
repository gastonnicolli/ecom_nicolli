import CartItem from './CartItem'

const Cart = ({items}) => {

    return (
        <>
        <div>
            <h1>Carrito Compra</h1>
            <p>Items in Cart: {items.length.toString()}</p>
            <div className="row">
            <div className="col-1">Name</div>
            <div className="col-2">Description</div>
            <div className="col-2">Price</div>
            <div className="col-1">Quantity</div>
            {items.map((currentItem) =>
                <CartItem name={currentItem.item.name}
                        description={currentItem.item.description}
                        price={currentItem.item.price}
                        count={currentItem.count}/>
                )}
            </div>
        </div>
        <div className="row">
            <p>Total Compra: </p>
        </div>
        </>
    )
}

export default Cart