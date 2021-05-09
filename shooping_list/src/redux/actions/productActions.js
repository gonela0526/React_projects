import {ActionTypes} from "../contants/action_types.js";
export const setProducts  = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,

    }
}

export const selectProduct  = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,

    }
}
export const removeSelectedProduct  = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        

    }
}