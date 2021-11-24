import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from '../../../Store/createPost/createPostActions'
import "./createpost.css";
const Createpost = () => {
    const sharePost = useDispatch();
    const postRef = useRef("");
    const create_post = () => {
        sharePost(createPost(postRef.current.value))
    }
    return (
        <>
            <div class="input-group input-group-lg w-100">
                <textarea
                    type="text"
                    className="w-100 post-share-input p-3 shadow rounded-3"
                    placeholder="What's on your mind ? "
                    ref={postRef}
                />
            </div>
            <button className="btn post-share-button" onClick={create_post}>Share
            </button>
        </>
    );
};

export default Createpost;
