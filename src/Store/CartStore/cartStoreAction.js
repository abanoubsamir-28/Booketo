import { ADD_TO_CART, DECREASE, INCREASE, REMOVE_FROM_CART } from "./cartStoreTypes"
export const cartStoreAction = (payload) => {
    return {
        type: ADD_TO_CART,
        payload,
    };
};
export const cartStoreActionRemove = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload,
    }
}
export const cartActionInc = (payload) => {
    return {
        type: INCREASE,
        payload,
    }
}
export const cartActionDec = (payload) => {
    return {
        type: DECREASE,
        payload,
    }
}