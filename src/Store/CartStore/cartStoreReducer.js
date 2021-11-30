import {
  ADD_TO_CART,
  DECREASE,
  INCREASE,
  REMOVE_FROM_CART,
} from "./cartStoreTypes";

// import { ADD_TO_CART } from "./cartStoreAction"
var initialState = {
  cartItem: [],
  CartQuantity: 0,
  itemQuantity: 1,
  cartTotalAmount: 0,
  newArr: [],
};

export default function cartStoreReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // Here we check if book found on cart or not
      // if yes then bookFound will be array length will not be 0
      // if not found bookFound length will remains 0
      const bookFound = state.cartItem.filter(
        (elem) => elem.id === action.payload.id
      );
      // if found is greater than 0 then will change the item quantity
      if (bookFound.length > 0) {
        return {
          ...state,
          cartItem: state.cartItem.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else {
              return item;
            }
          }),
          CartQuantity: state.CartQuantity + 1,
        };
      } else {
        // if not found will add add to the object coming from payload quantity key with initial value 1
        const newBook = { ...action.payload, quantity: 1 };
        return {
          ...state,
          cartItem: [...state.cartItem, newBook],
          CartQuantity: state.CartQuantity + 1,
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItem: [
          ...state.cartItem.filter(
            (productId) => action.payload[0].data.id !== productId.data.id
          ),
        ],
        CartQuantity: (state.CartQuantity -= 1),
      };
    case INCREASE:
      // Here we updating the item that has the same id quantity with +1 and if not the same id wil return the same item
      return {
        ...state,
        cartItem: state.cartItem.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        }),
        // and here updating the cart quantity also by 1 to be updated in navbar.
        CartQuantity: state.CartQuantity + 1,
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
      };
    default:
      return state;
  }
}
