import { createContext, useEffect, useState } from "react";

export const context = createContext();
const Provider = context.Provider;

function CartProvider(props) {

    const [cartQ, setCartQ] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cart, setCart] = useState([])


    const addToCart = (quantity, item) => {
        //sumo la cantidad de articulos
        setCartQ((prevCartQ) => prevCartQ + quantity);
        //sumo el total de precio
        setTotalPrice((prevTotalPrice) => {
            const newTotalPrice = prevTotalPrice + (quantity * item.price);
            return newTotalPrice;
        });
        //Agrego la cantdad al objeto
        item.cant = quantity

        //condicional para saber si tengo o no el item en el carrito para no reescribirlo
        let itemAlreadyInCart = false

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === item.id) {
                cart[i].cant = cart[i].cant + quantity
                itemAlreadyInCart = true
                break;
            }
        }
        if (!itemAlreadyInCart) {
            const copy = [...cart]
            copy.push(item)
            setCart(copy)
        }
        alert("Articulo agregado con éxito")
    }



const removeItem = (id) => { 
    console.log("entro")
    console.log(cart)
    console.log(cart[0].id)
    console.log(id)
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            index = i;
            break;
        }
    }
    console.log(index)
    if (index !== -1) {
        setCartQ(prevCartQ => prevCartQ - cart[index].cant);
        setTotalPrice(prevTotalPrice => prevTotalPrice - (cart[index].price * cart[index].cant));
        const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
        setCart(updatedCart);
    }
    alert("Articulo eliminado con éxito")

}

const clearCart = () => {
    setCartQ(0)
    setCart([])
    setTotalPrice(0)
    alert("Carrito vaciado con éxito")
}

const valorActual = {
    cartQ: cartQ,
    totalPrice: totalPrice,
    cart: cart,
    addToCart: addToCart,
    removeItem: removeItem,
    clearCart: clearCart
}



return (
    <Provider value={valorActual}>
        {props.children}
    </Provider>
)
}

export default CartProvider