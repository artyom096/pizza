import { CHANGE_TYPE, CHANGE_SIZE } from '../types'

export const changeType = index => {
    return {
        type: CHANGE_TYPE,
        payload: index
    }
}

export const changeSize = item => {
    return {
        type: CHANGE_SIZE,
        payload: item
    }
}