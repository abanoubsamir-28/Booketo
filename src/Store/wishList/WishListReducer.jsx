import { ADD_TO_WISHLIST, DELETE_FROM_WISHLIST } from "./WishListTypes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiInformationLine } from "react-icons/ri";


const initialState = {
    wishList: [],
}

export const WishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const bookFound = state.wishList.filter(
                (elem) => elem.id === action.payload.id
            );
            //found books in array
            if (bookFound.length > 0) {
                toast.error('You already added this item',{position:'top-right'})
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
                };
            }
            //no books in array 
            else {
                // if not found will add add to the object coming from payload quantity key with initial value 1
                const newBook = { ...action.payload };
                return {
                    ...state,
                    wishList: [...state.wishList, newBook],
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