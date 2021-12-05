
import { combineReducers } from 'redux'
import CreatePostReducer from './createPost/createPostReducer'
import cartStoreReducer from './CartStore/cartStoreReducer'
import { WishListReducer } from './wishList/WishListReducer';
const rootReducer = combineReducers({
    createPost: CreatePostReducer,
    cartStore: cartStoreReducer,
    wishList:WishListReducer
})

export default rootReducer;
