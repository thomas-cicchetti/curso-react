import { app } from './firebase.js'
import { getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc, serverTimestamp } from 'firebase/firestore'

export const getProducts = () => {

    const db = getFirestore(app)
    const productCollection = collection(db, 'products')
    const query = getDocs(productCollection)

    return query
        .then((res) => {
            const products = res.docs.map((doc) => {
                const product = doc.data()
                product.id = doc.id
                return product
            })
            return products
        })
        .catch((error) => { console.log('error') })

}

export const getProductDetail = (id) => {
    const db = getFirestore(app)
    const productCollection = collection(db, 'products')
    const filter = doc(productCollection, id)
    const query = getDoc(filter)

    return query
        .then((res) => {
            const product = res.data()
            return product

        })
        .catch((error) => { console.log('error') })
}

export const getProductsByCategory = (category) => {
    const db = getFirestore(app)
    const productCollection = collection(db, 'products')
    const filter = query(productCollection, where('category', '==', category))
    const cons = getDocs(filter)

    return cons
        .then((res) => {
            const products = res.docs.map((doc) => {
                const product = doc.data()
                product.id = doc.id
                return product
            })
            return products
        })
        .catch((error) => { console.log('error') })

}

export const createSale = (items, user, total) => {
    const db = getFirestore(app)
    const salesCollection = collection(db, 'ventas')
    const venta = {
        items: items,
        user: user,
        buyDate: serverTimestamp(),
        total: total
    }
    const query = addDoc(salesCollection, venta)

    return query
        .then((res) => {
            return res.id
        })
        .catch((error) => { 
            console.log(error);
            throw error;
        });
}