import axios from "axios";
import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./getPostsTypes.js";

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};
export const fetchPostsSuccess = (res) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: res,
  };
};
export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export const fetchPosts = (user_id) => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get(`https://dummyjson.com/users/${user_id}/posts`)
      .then((res) => {
        dispatch(fetchPostsSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchPostsFailure(err));
      });
  };
};
