import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import AddOrderUpdateStock from '../../firebase/AddOrderUpdateStock';
import { FinishShopping } from '../finishShopping/FinishShopping';
import CartItem from './CartItem'
import { CartContext } from '../../context/cartContext'

const Cart = ({items}) => {
    const {setStateCart} = useContext(CartContext)
    const buyer = {
        name: 'Federico Delarosa',
        email: 'fdelarosa@email.com',
        phone: '+5493513458794',
    };
    const [buy, setbuy] = useState()
    const [newId, setNewId] = useState("") // newId despues lo mostras donde quieras
    let total=0;
    let cant =0;
    Object.entries(items).forEach(([key, value]) => {
        total += parseInt(value.count)  * value.item.price;
        cant += parseInt(value.count);
    })

    const handleComprar = () => {
        const finishShopping = {buyer, items, total}
        setbuy(finishShopping)
        AddOrderUpdateStock(buyer, items, total, setNewId)
        setStateCart(true)};
    return (
        <>
            <div>
                <h1>Carrito Compra</h1>
                <div className="row m-2">
                <div className="col-2 text-primary">Id</div>
                <div className="col-2 text-primary">Name</div>
                <div className="col-2 text-primary">Price</div>
                <div className="col-1 text-primary">Quantity</div>
                <hr />
                </div>
                {items.map((currentItem) =>
                    <CartItem key={currentItem.item.id} 
                            id={currentItem.item.id}
                            name={currentItem.item.name}
                            description={currentItem.item.description}
                            price={currentItem.item.price}
                            stock={currentItem.stock}
                            count={currentItem.count}/>
                    )}
                <hr />
                <div className="align-items-end">
                    <span>Products in Cart: {items.length.toString()}    -    </span>
                    <span>Items in Cart: {cant}</span>
                </div>
            </div>
            <div className="row mt-4">
                <h3>Total Compra: $ {total}</h3>
            </div>
            <div >
                <Button onClick={() => handleComprar()} variant='success'>Comprar</Button>
            </div>

            {buy && <FinishShopping buyer={buyer} items={items} total={total} cant={cant}/>}
        </>
    )
}

export default Cart