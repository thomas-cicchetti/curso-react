import { createContext, useEffect, useState } from "react";

export const context = createContext();
const Provider = context.Provider;

function CartProvider(props) {

    const [cartQ, setCartQ] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cart, setCart] = useState([])


    const addToCart = (quantity, item, id) => {
        console.log(quantity, item);
        setCartQ((prevCartQ) => prevCartQ + quantity);
        setTotalPrice((prevTotalPrice) => {
            const newTotalPrice = prevTotalPrice + (quantity * item.price);
            console.log("Nuevo total de precio:", newTotalPrice);
            return newTotalPrice;
        });

        item.cant=quantity
        console.log("el valor de item.cant es:", item.cant)

        const copy = [...cart];
        copy.push(item);
        setCart(copy);


    };

    useEffect(() => {
        console.log("El estado de cart se ha actualizado correctamente:", cart);
    }, [cart]);

    const removeFromCart = (id) => { }

    const clearCart = () => {
        setCartQ(0)
        setCart([])
    }

    const valorActual = {
        cartQ: cartQ,
        totalPrice: totalPrice,
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart
    }



    return (
        <Provider value={valorActual}>
            {props.children}
        </Provider>
    )
}

export default CartProvider