import axios from "axios";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "./new_create_post.css";
import { createPost } from "../../../../Store/createPost/createPostActions";
const New_create_post = (props) => {
  // Component States
  const commentRef = useRef(null);
  const sharePost = useDispatch();

  // Post Request to api and fire action
  const sendPost = () => {
    const body = JSON.stringify({
      body: commentRef.current.value,
      userId: props.user_id,
    });
    const headers = {
      "Content-Type": "application/json",
    };
    if (commentRef.current.value.length !== 0) {
      axios
        .post("https://dummyjson.com/posts/add", body, { headers })
        .then((res) => {
          sharePost(createPost(res.data.body));
        });
    } else {
      commentRef.current.placeholder = "Can't share Empty post , try again";
    }
  };
  return (
    <div class="panel d-flex justify-content-center align-items-center my-5">
      <form>

        <textarea
          placeholder="Whats in your mind today?"
          rows="4"
          cols="100"
          class="form-control input-lg p-text-area w-100"
          ref={commentRef}
        ></textarea>
      </form>
      <footer class="panel-footer mx-3">
        <button class="btn btn-trans rounded-pill" onClick={sendPost}>
          Post
        </button>
      </footer>
    </div>
  );
};

export default New_create_post;