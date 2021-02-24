import { CHANGE_CLS, CHANGE_SORT } from '../types'

export const changeSort = index => {
    return {
        type: CHANGE_SORT,
        payload: index
    }
}

export const changeCls = payload => {
    return {
        type: CHANGE_CLS,
        payload
    }
}