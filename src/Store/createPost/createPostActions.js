import { CREATE_POST } from "./createPostTypes";

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};
