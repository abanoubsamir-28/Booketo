import { CREATE_POST } from "./createPostTypes";

const initState = {
  post: "",
};

const CreatePostReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_POST:
      console.log("Create Post Action Fired", action.payload);
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};

export default CreatePostReducer;
