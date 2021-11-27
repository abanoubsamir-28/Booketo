import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartStoreTypes"
// export const ADD_TO_CART = "ADD_TO_CART"
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
// export default cartStoreAction