import { ADD_TO_CART, DECREASE, INCREASE, REMOVE_FROM_CART } from "./cartStoreTypes"

// import { ADD_TO_CART } from "./cartStoreAction"
var initialState = {
    cartItem: [],
    CartQuantity: 0,
    itemQuantity: 1,
    cartTotalAmount: 0,
    newArr: []
}

export default function cartStoreReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:

            // const cc = Array.from(new Set(state.cartItem.filter((productId) => action.payload !== productId.data.id)))
            return {
                // itemIndex: state.cartItem.find((item) => console.log(item.id === action.payload.id)),

                ...state,
                cartItem: [...state.cartItem, action.payload],
                CartQuantity: state.CartQuantity + 1,

                // d: console.log(action.payload[0].data.id),
                g: console.log(state.cartItem)

                // f: console.log(state.cartItem[state.cartItem.length - 1])

                // ************************** error below *********************************

                // itemQuantity: state.cartItem.filter(
                //     (productId) => (action.payload !== productId.data.id) ? state.itemQuantity : state.itemQuantity++),
                // cartTotalAmount: state.cartTotalAmount,
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItem: [...state.cartItem.filter((productId) => action.payload[0].data.id !== productId.data.id)],
                CartQuantity: state.CartQuantity -= 1
            }
        case INCREASE:
            let tempcart = state.cartItem.map((item, i) => {
                if (item[i].data.id === action.payload) {
                    console.log("in if");
                    console.log(item[0].quant++);
                    // console.log(action.payload.quant++);
                    // return action.payload.data.quant++
                    console.log(action.payload);
                    return true
                }
                // اول مرة لف وقرا داتا تاني مرة لف وملقاش حاجة (undefined)
                //الاكشن بايلود ف الكتاب التاني مش موجود (undefined) 

            });

            return {
                ...state,
                tempcart,
            };

        case DECREASE:
            let newtempcart = state.cartItem.map((item, i) => {
                // if (item[i].data.id === action.payload.data.id) {
                //     console.log("in if dec")
                //         // return { ...state, itemQuantity: state.itemQuantity -= 1 };
                //     console.log("dec", action.payload)
                // }
                // state.itemQuantity -= 1
                // console.log("item.data.id: ", item[0].data.id, "action.payload: ", action.payload)
                // console.log(state.cartItem[action.payload][0].quant--);

                return null;
            });
            return {
                ...state,
                // itemQuantity: state.itemQuantity
            }
        default:
            return state;
    }
}