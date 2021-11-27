import { combineReducers } from 'redux'
import CreatePostReducer from './createPost/createPostReducer'
import cartStoreReducer from './CartStore/cartStoreReducer'
const rootReducer = combineReducers({
    createPost: CreatePostReducer,
    cartStore: cartStoreReducer
})

export default rootReducer;