import { ADD_TO_WISHLIST, DELETE_FROM_WISHLIST } from "./WishListTypes";

const initialState = {
    wishList: [],
    // isFound: false
}

export const WishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:

            const bookFound = state.wishList.filter(
                (elem) => elem.id === action.payload.id
            );
            //found books in array
            if (bookFound.length > 0) {
                return {
                    ...state,
                    //same book
                    wishList: state.wishList.map((item) => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,

                            };
                        }
                        //diffrent book
                        else {
                            return item;
                        }
                    }),
                    // CartQuantity: state.CartQuantity + 1,
                };
            }
            //no books in array 
            else {
                // if not found will add add to the object coming from payload quantity key with initial value 1
                const newBook = { ...action.payload };
                return {
                    ...state,
                    wishList: [...state.wishList, newBook],
                    // CartQuantity: state.CartQuantity + 1,
                    // l: console.log(state.isFound),
                    // isFound:state.isFound === true ? state.isFound = false : state.isFound = true,
                    c: console.log(state.wishList),
                };
            }
        case DELETE_FROM_WISHLIST:
            return {
                ...state,
                wishList: [...state.wishList.filter((item) => action.payload.id !== item.id)],
            }

        default:
            return state
    }
}