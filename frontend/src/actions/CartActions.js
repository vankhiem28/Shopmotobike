import Axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstants"

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const {data} = await Axios.get(`/api/products/${productId}`)
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            name: data.name,
            image: data.image,
            price: data.price,
            image_left:data.image_left,
            image_bottom:data.image_bottom,
            image_right:data.image_right,
            countInStock: data.countInStock,
            product:data._id,
            qty,

        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type:CART_REMOVE_ITEM, payload:productId})
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}