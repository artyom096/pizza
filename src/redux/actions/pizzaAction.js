import axios from "axios"
import { FETCH_PIZZAS, LOADING_START, LOADING_FINISH } from "../types"

export const fetchPizzas = response => {
    return {
        type: FETCH_PIZZAS,
        payload: response
    }
}

export const LoadingStart = () => {
    return {
        type: LOADING_START,
    }
}

export const LoadingFinish = () => {
    return {
        type: LOADING_FINISH,
    }
}

export const addPizzas = (sort, filterValue, arrayOfTypeSort) => {
    return dispatch => {
        dispatch(LoadingStart())
        axios.get(`/pizzas?${filterValue === 0 ? '' : `category=${filterValue}`}&_sort=${arrayOfTypeSort[sort]}&_order=asc}`).then(response => {
            dispatch(fetchPizzas(response.data))
            dispatch(LoadingFinish())
        })

    }
}