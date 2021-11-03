import {createContext, useState} from "react";

export const CartContext = createContext([]);

export const CartProvider = ({defaultValue = [], children}) =>{
    const [items, setItems] = useState(defaultValue)

    const addItem = (currentItem) => {
        if(items.some(({item}) => item.id === currentItem.item.id)){
            return;
        }
        setItems([...items, currentItem])
    }

    const removeItem = (itemId) => {
        const itemsFilter = items.filter(element => 
            element.id != itemId);
        setItems(itemsFilter);
    }

    const clear = () => {
        setItems(defaultValue)
    }

    const isInCart = (itemId) => {
        
    }

    return <CartContext.Provider value={{
            items, 
            addItem, 
            removeItem, 
            isInCart, 
            clear}}>
                
            {children}
        </CartContext.Provider>
}