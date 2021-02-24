import { CHANGE_CLS, CHANGE_SORT } from "../types"

const initialState = {
    popup: ['популярности', 'цене', 'алфавиту'],
    sort: 0,
    cls: 'hide'
}

export const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SORT:
            return {
                ...state,
                sort: action.payload
            }
        case CHANGE_CLS:
            return {
                ...state,
                cls: action.payload
            }
        default:
            return state
    }
}