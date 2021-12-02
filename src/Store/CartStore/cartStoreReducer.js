import {
    ADD_TO_CART,
    DECREASE,
    INCREASE,
    REMOVE_FROM_CART,
} from "./cartStoreTypes";

const initialState = {
    cartItem: [],
    CartQuantity: 0,
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
                const newBook = {...action.payload, quantity: 1 };
                return {
                    ...state,
                    cartItem: [...state.cartItem, newBook],
                    CartQuantity: state.CartQuantity + 1,
                    c: console.log(state.cartItem),
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItem: [...state.cartItem.filter((item) => action.payload.id !== item.id)],
                v: console.log(action.payload.quantity),
                CartQuantity: state.CartQuantity - action.payload.quantity
            }

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
                // updating the cart quantity also by 1 to be updated in navbar.
                CartQuantity: state.CartQuantity + 1,
            };

        case DECREASE:
            return {
                ...state,
                cartItem: state.cartItem.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                        };
                    } else {
                        return item;
                    }
                }),
                // updating the cart quantity also by 1 to be updated in navbar.
                CartQuantity: state.CartQuantity > 0 ? state.CartQuantity - 1 : 0,
            };
        default:
            return state;
    }
}