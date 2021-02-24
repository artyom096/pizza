import { ADD_PIZZA_TO_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM } from '../types'

export const addPizzaToCart = objPizza => {
    return {
        type: ADD_PIZZA_TO_CART,
        payload: objPizza
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const removeCartItem = obj => {
    return {
        type: REMOVE_CART_ITEM,
        payload: obj
    }
}

export const minusCartItem = id => {
    return {
        type: MINUS_CART_ITEM,
        payload: id
    }
}

export const plusCartItem = id => {
    return {
        type: PLUS_CART_ITEM,
        payload: id
    }
}