import { ADD_TO_WISHLIST, DELETE_FROM_WISHLIST } from './WishListTypes'


export const addToWishList = (payload) => {
    return {
        type: ADD_TO_WISHLIST,
        payload,
    };
};

export const removeFromWishList = (payload) => {
    return {
        type: DELETE_FROM_WISHLIST,
        payload
    }
}