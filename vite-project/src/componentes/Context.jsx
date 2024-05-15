import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const context = createContext();
const Provider = context.Provider;

function CartProvider(props) {

    const [cartQ, setCartQ] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cart, setCart] = useState([])
    const [orderId, setOrderId] = useState();


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
        toast.success("Articulo agregado al carrito")
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

        toast.warning('Articulo eliiminado del carrito')

    }

    const clearCart = () => {
        if (cartQ == 0) {
            toast.warning("No tiene articulos en el carrito")
        } else {
            setCartQ(0)
            setCart([])
            setTotalPrice(0)
            toast.error("Carrito vaciado con éxito")

        }

    }

    const buyConfirm = (orderId) => {
        setOrderId(orderId);
        setCartQ(0)
        setCart([])
        setTotalPrice(0)
        toast.success("Pago realizado con éxito")
        

        
        

    

    }

    const valorActual = {
        cartQ: cartQ,
        totalPrice: totalPrice,
        cart: cart,
        addToCart: addToCart,
        removeItem: removeItem,
        clearCart: clearCart,
        buyConfirm: buyConfirm,
        orderId: orderId
    }



    return (
        <Provider value={valorActual}>
            {props.children}
        </Provider>
    )
}

export default CartProvider