import { ADD_PIZZA_TO_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM } from "../types";

const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART: {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id] ?
                    [action.payload] : [...state.items[action.payload.id], action.payload]
            }
            return {
                ...state,
                items: newItems,
                totalCount: [].concat.apply([], Object.values(newItems)).length,
                totalPrice: [].concat.apply([], Object.values(newItems)).reduce((sum, obj) => obj.price + sum, 0)
            }
        }
        case CLEAR_CART: {
            return {
                items: {},
                totalCount: 0,
                totalPrice: 0,
            }
        }
        case REMOVE_CART_ITEM: {
            const newItem = { ...state.items }
            delete newItem[action.payload.id]
            return {
                ...state,
                items: newItem,
                totalCount: action.payload.totalCount - action.payload.count,
                totalPrice: action.payload.totalPrice - (action.payload.price * action.payload.count)
            }
        }
        case MINUS_CART_ITEM: {
            const newItem = {
                ...state.items,
                [action.payload]: [...state.items[action.payload]].slice(1),

            }
            return {
                ...state,
                items: newItem,
                totalCount: [].concat.apply([], Object.values(newItem)).length,
                totalPrice: [].concat.apply([], Object.values(newItem)).reduce((sum, obj) => obj.price + sum, 0)
            }
        }
        case PLUS_CART_ITEM: {

            const newItem = {
                ...state.items,
                [action.payload]: [...state.items[action.payload]].concat(state.items[action.payload][0])
            }

            return {
                ...state,
                items: newItem,
                totalCount: [].concat.apply([], Object.values(newItem)).length,
                totalPrice: [].concat.apply([], Object.values(newItem)).reduce((sum, obj) => obj.price + sum, 0)
            }
        }
        default:
            return state
    }
}