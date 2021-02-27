import axios from "axios"
import { CHANGE_FILTER_VALUE, FETCH_PIZZAS } from "../types"


export const createPizzas = async () => {

    const response = await axios.get('/db.json')

    return dispatch => {
        dispatch(fetchPizzas(response.data.pizzas))
    }
}

export const fetchPizzas = response => {
    return {
        type: FETCH_PIZZAS,
        payload: response
    }
}

export const changeFilterValue = index => {
    return {
        type: CHANGE_FILTER_VALUE,
        payload: index
    }
}