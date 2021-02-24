import { combineReducers } from "redux"
import { filtersReducer } from "./filtersReducer"
import { pizzaReducer } from "./pizzaReducer"
import { sortReducer } from "./sortReducer"
import { cartReducer } from "./cartReducer"


export const rootReducer = combineReducers({
    pizzas: pizzaReducer,
    filter: filtersReducer,
    sort: sortReducer,
    cart: cartReducer
})