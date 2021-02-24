import { FILTER_PIZZAS, CHANGE_FILTER_VALUE } from "../types"

const initialState = {
    category: ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'],
    filterValue: 0,
    arrayOfTypeSort: ['rating', 'price', 'name']
}

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_PIZZAS:
            return {
                ...state,
                category: action.payload
            }
        case CHANGE_FILTER_VALUE:
            return {
                ...state,
                filterValue: action.payload
            }
        default:
            return state
    }
}