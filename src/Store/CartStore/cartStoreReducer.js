import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartStoreTypes"
// import { ADD_TO_CART } from "./cartStoreAction"
const initialState = {
    cartItem: [],
    CartQuantity: 0,
    cartTotalAmount: 0
}
export default function cartStoreReducer(state = initialState, action) {
    const tempBook = { ...action.payload, CartQuantity: 1 }
    // if book id 
    // console.log(state.cartItem)
    // console.log(state.cartItem.map((ele) => { console.log(ele) }))
    switch (action.type) {
        case ADD_TO_CART:
            return {
                itemIndex: state.cartItem.find((item) => console.log(item.id === action.payload.id)),
                ...state,
                cartItem: [...state.cartItem, action.payload],
                CartQuantity: state.CartQuantity += 1,
                cartTotalAmount: state.cartTotalAmount,
            }
        case REMOVE_FROM_CART:
            return state.filter(item => item._id !== action.payload._id)
        // CartQuantity: state.CartQuantity -= 1,

        // console.log(action)
        // if (itemIndex >= 1) {
        //     state.cartItem[itemIndex].CartQuantity += 1
        // } else {
        //     return state.cartItem.push(tempBook)
        // }
        // break
        default:
            return state;
    }
}
