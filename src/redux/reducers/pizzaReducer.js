import { FETCH_PIZZAS, LOADING_START, LOADING_FINISH } from "../types";

const initialState = {
    value: [],
    isLoading: false
}

export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PIZZAS:
            return {
                ...state,
                value: action.payload,
            }
        case LOADING_START:
            return {
                ...state,
                isLoading: true
            }
        case LOADING_FINISH:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}