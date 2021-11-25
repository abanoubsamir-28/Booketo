import { combineReducers } from 'redux'
import CreatePostReducer from './createPost/createPostReducer'

const rootReducer = combineReducers({
    createPost: CreatePostReducer
})

export default rootReducer;