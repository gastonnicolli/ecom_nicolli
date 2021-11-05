import {createContext, useState} from "react";

export const CartContext = createContext([]);

const initialUser={
    id:1,
    name:'Gaston Nicolli'
  }

export const CartProvider = ({defaultValue = [], children}) =>{
    const [items, setItems] = useState(defaultValue)
    const [user, setUser]=useState(initialUser)

    const addItem = (currentItem) => {
        
        if(items.some(({item}) => item.id === currentItem.item.id)){
            return;
        }
        setItems([...items, currentItem])

        // if(!isInCart(currentItem.item.id))
        // {
            
        // }
    }

    const removeItem = (itemId) => {
        const itemsFilter = items.filter((element) => 
            element.item.id !== itemId);
        setItems(itemsFilter);
    }

    const clear = () => {
        setItems(defaultValue)
    }

    const isInCart = (itemId) => {
        // const flag = false;
        // const filter = items.filter((element) => {
        //     if(element.item.id === itemId){ flag = true}
        // })
        // return flag;
    }

    const login = () =>{
    setUser(initialUser)
    }

    const logout = () =>{
        setUser(null)
    }

    const data = {user, login, logout}

    return <CartContext.Provider value={{
            items, 
            data,
            addItem, 
            removeItem, 
            isInCart, 
            clear}}>
                
            {children} {/* Esta sentencia renderiza todos los children que 
            tenga CartContex.Provider envueltos*/}
        </CartContext.Provider>
}