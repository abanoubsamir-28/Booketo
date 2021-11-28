import { combineReducers } from "redux";
import CreatePostReducer from "./createPost/createPostReducer";
import getPostsReducer from "./getPosts/getPostsReducer";
const rootReducer = combineReducers({
  createPost: CreatePostReducer,
  getPosts: getPostsReducer,
});

export default rootReducer;
