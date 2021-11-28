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
                // itemIndex: state.cartItem.find((item) => console.log(item.id === action.payload.id)),
                ...state,
                cartItem: [...state.cartItem, action.payload],
                CartQuantity: state.CartQuantity + 1,

                // ************************** error below *********************************

                // itemQuantity: state.cartItem.filter(
                //     (productId) => (action.payload !== productId.data.id) ? state.itemQuantity : state.itemQuantity++),
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
                const arr = []
                if (item.data.id === action.payload) {
                    arr.push(item.data)
                    console.log(arr.length)
                    return arr.length += 1
                    // console.log("in if")
                    // state.itemQuantity += 1
                    // console.log("inc", state.itemQuantity)
                    // return { ...state, itemQuantity: state.itemQuantity++ };
                }

            });
            return {
                ...state
                , tempcart
                // ...state,
                // itemQuantity: state.itemQuantity

            }

        case DECREASE:
            let newtempcart = state.cartItem.map((item) => {
                if (item.data.id === action.payload) {
                    console.log("in if")
                    state.itemQuantity -= 1
                    // return { ...state, itemQuantity: state.itemQuantity -= 1 };
                    console.log("dec", state.itemQuantity)
                }
                console.log("item.data.id: ", item.data.id, "action.payload: ", action.payload)
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
