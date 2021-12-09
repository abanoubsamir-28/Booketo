
import { combineReducers } from 'redux'
import CreatePostReducer from './createPost/createPostReducer'
import cartStoreReducer from './CartStore/cartStoreReducer'
import { WishListReducer } from './wishList/WishListReducer';
import {getPostsReducer} from './getPosts/getPostsReducer'
const rootReducer = combineReducers({
    createPost: CreatePostReducer,
    cartStore: cartStoreReducer,
    wishList:WishListReducer,
    getPosts:getPostsReducer
})

export default rootReducer;
