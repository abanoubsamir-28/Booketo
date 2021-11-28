import { ADD_TO_CART, DECREASE, INCREASE, REMOVE_FROM_CART } from "./cartStoreTypes"
// import { ADD_TO_CART } from "./cartStoreAction"
const initialState = {
    cartItem: [],
    CartQuantity: 0,
    itemQuantity: 0,
    cartTotalAmount: 0,
    newArr: []
}

export default function cartStoreReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                itemIndex: state.cartItem.find((item) => console.log(item.id === action.payload.id)),
                ...state,
                cartItem: [...state.cartItem, action.payload],
                CartQuantity: state.CartQuantity += 1,
                itemQuantity: state.cartItem.filter(
                    (productId) => (action.payload !== productId.data.id) ? state.itemQuantity += 1 : state.itemQuantity),
                cartTotalAmount: state.cartTotalAmount,
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItem: [...state.cartItem.filter((productId) => action.payload !== productId.data.id)],
                CartQuantity: state.CartQuantity -= 1
            }
        case INCREASE:
            let tempcart = state.cartItem.map((item) => {
                if (item.data.id === action.payload) {
                    console.log("in if")
                    // state.itemQuantity++
                    return { itemQuantity: state.itemQuantity++ };
                }
                console.log(state.itemQuantity)
                return state.itemQuantity
                // console.log("after dec")
            });
            console.log(tempcart);
            return {
                ...state,
                itemQuantity: state.itemQuantity
            }
        // case INCREASE:
        //     // let tempcart = state.cartItem.map((item) => {
        //     //     if (item.data.id === action.payload) {
        //     //         state.itemQuantity += 1
        //     //     }
        //     //     console.log(item)
        //     //     // return item;
        //     // });
        //     // console.log(tempcart.length);
        //     return {
        //         ...state,
        //         // itemQuantity: tempcart.length
        //         cartItem: [...state.cartItem.filter((productId) => action.payload !== productId.data.id)],
        //         itemQuantity: state.itemQuantity += 1,
        //         xx: console.log(state.itemQuantity)
        //     }

        case DECREASE:
            let newtempcart = state.cartItem.map((item) => {
                if (item.data.id === action.payload) {
                    console.log("in if")
                    state.itemQuantity--
                    // return { ...state, itemQuantity: state.itemQuantity -= 1 };
                }
                // console.log("after dec")
                console.log(state.itemQuantity)
                return null;
            });
            return {
                ...state,
                itemQuantity: state.itemQuantity
            }
        default:
            return state;
    }
}
