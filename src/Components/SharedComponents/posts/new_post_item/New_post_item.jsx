import React, { useEffect, useRef, useState } from "react";

// Import Icons
import { BsFilePerson } from "react-icons/bs";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiCommentEdit } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BiMessageAdd } from "react-icons/bi";
import { FaUserCircle, FaCommentAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaShare } from "react-icons/fa";
import "./newpostitem.css";
import axios from "axios";
const New_post_item = (props) => {
  // States
  const [commentsTotal, setCommentsTotal] = useState(0);
  const [comments, setComments] = useState({});
  const [isComment , setIsComment] = useState(false);
  const [isFree, setIsFree] = useState(false);


  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${props.postID}/comments`)
      .then((res) => {
        setCommentsTotal(res.data.total);
        if(commentsTotal > 0) {
          setIsComment(true);
        }
        setComments(res.data.comments);
        setIsFree(true)
      });
  }, []);

  const [liked, setliked] = useState(false);
  const [addLike, setAddLike] = useState(props.postReactions);
  const [userComments, setUserComments] = useState([]);
  const commentRef = useRef("");
  const addComment = () => {
    setUserComments([commentRef.current.value, ...userComments])
    setCommentsTotal(commentsTotal+1)
  }
  return (
    isFree &&
    <div class="new_post_item_card text-left my-2 mx-auto rounded-3">
      <div class="card-header d-flex align-items-center">
        {/* <FaUserCircle className="mx-3 fs-3" /> */}
        <img src={props.image} alt="" />
        <span className="text-uppercase fw-bold">
          {props.firstName} {props.lastName}
        </span>
      </div>
      <div class="card-body">
        <p class="card-text">{props.postBody}</p>
        <div className="d-flex justify-content-center">
          {liked ? (
            <AiFillLike
              className="mx-2 fs-3"
              onClick={() => {
                setliked(!liked);
                setAddLike(addLike - 1);
              }}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <AiOutlineLike
              className="mx-2 fs-3 post-icon"
              onClick={() => {
                setliked(!liked);
                setAddLike(addLike + 1);
              }}
            />
          )}
          <BiCommentEdit className="mx-2 fs-3 post-icon" onClick={()=>{
            setIsComment(!isComment)
          }} />
          <RiShareForwardLine className="mx-2 fs-3 post-icon" />
        </div>
      </div>
      <div class="card-footer d-flex justify-content-between row">
        <p className="text-muted fw-bold col-md-3">{addLike} Reactions</p>
        <p className="text-muted fw-bold col-md-3">{commentsTotal} Comments</p>
        <p className="text-muted fw-bold col-md-3">@{props.username}</p>
      </div>
      <div>
        <div className="comment__input d-flex my-1">
          <input type="text" className="form-control w-75 mx-3" ref={commentRef} />
          <button className="btn btn-primary w-25 mx-3 " onClick={addComment}>POST</button>
        </div>
        {isComment &&         <div className="comments">
        {userComments.map((comment) => {
          return (
            <div class="comment_card my-1">
              <div class="card-body d-flex align-items-center py-1">
                <img src={props.image}/>
                <div className="commentdata mx-3">
                  <sup className="text-primary">@{props.username}</sup>
                  <p>{comment}</p>
                </div>
              </div>
            </div>
          );
        })}
        {comments.map((comment) => {
          return (
            <div class="comment_card my-1">
              <div class="card-body d-flex align-items-center py-1">
                <FaUserCircle className="fs-2" />
                <div className="commentdata mx-3">
                  <sup className="text-primary">@{comment.user.username}</sup>
                  <p>{comment.body}</p>
                </div>
              </div>
            </div>
          );
        })}
        </div>}


      </div>
    </div>

  );
};

export default New_post_item;
