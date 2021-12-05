import React from 'react'
import './postitem.css'
import { useState, useRef } from 'react'
import { BsFilePerson } from 'react-icons/bs'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { BiCommentEdit } from 'react-icons/bi'
import { RiShareForwardLine } from 'react-icons/ri'
import { BiMessageAdd } from 'react-icons/bi'
import { FaUserCircle, FaCommentAlt } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { FaShare } from 'react-icons/fa'

const Postitem = (props) => {
    const [shareCounter, setShareCounter] = useState(Math.floor(Math.random() * 100) + 1);
    const [writeComment, setWriteComment] = useState(false)
    const [isComment, setIscomment] = useState(false);
    const [comments, setComments] = useState([])
    const commentRef = useRef(null);
    const [liked, setliked] = useState(false);
    const [likeCounter, setLikeCounter] = useState(Math.floor(Math.random() * 100) + 1);
    const addLiked = () => {
        setLikeCounter(likeCounter + 1)
        setliked(!liked);
    }
    const removeLiked = () => {
        setLikeCounter(likeCounter - 1)
        setliked(!liked);
    }
    const writeCommentFunc = () => {
        setWriteComment(!writeComment);
    }
    const addComment = () => {
        if (commentRef.current.value.length !== 0) {
            setComments(commentArr => [...commentArr, commentRef.current.value]);
            setIscomment(true)
        }
    }
    const addShare = () => {
        setShareCounter(shareCounter + 1);
    }
    return (
        <div class="card py-3 align-self-center post-item shadow my-2">
            <div class="card-header">
                <BsFilePerson className="fs-2 mx-2 text-primary" />
                <h6 className="d-inline">User Name</h6>
            </div>
            <div class="card-body ">
                <p class="card-text">{props.post.body}</p>
            </div>
            <div className="post__controls d-flex align-items-center justify-content-between">
                <div className="post__controls__counter mx-1 d-flex align-items-center">
                    {likeCounter > 0 && <h3 className="d-flex align-items-center">
                        <FcLike className="fs-6" />
                        <p className="fs-6 my-1 mx-2">{likeCounter} Likes</p>
                    </h3>}
                    {comments.length > 0 && <h3 className="mx-3 d-flex align-items-center">
                        <FaCommentAlt className="text-primary fs-6" />
                        <p className="fs-6 my-1 mx-2">{comments.length} Comments</p>
                    </h3>}
                    {shareCounter > 0 && <h3 className="d-flex align-items-center">
                        <FaShare className="text-primary fs-6" />
                        <p className="fs-6 my-1 mx-2">{shareCounter} Shares</p>
                    </h3>}
                </div>
                <div className="post__controls__indicators">
                    {liked ?
                        (<button className="fs-3 post-icon" onClick={removeLiked}><AiFillLike className="filled" /></button>)
                        :
                        (<button className="fs-3 post-icon" onClick={addLiked}><AiOutlineLike /></button>)}
                    <button className="fs-3" onClick={writeCommentFunc}
                        style={{ color: writeComment ? '#D1314F' : '' }}
                    ><BiCommentEdit className="post-icon" /></button>
                    <button className="fs-3" onClick={addShare}><RiShareForwardLine className="post-icon" /></button>
                </div>

            </div>
            {
                writeComment && <div className="display-comments">
                    <div className="post-comment my-2">
                        <input type="text" className="mx-2" placeholder="Write a Comment ...." ref={commentRef} />
                        <button onClick={addComment}><BiMessageAdd className="fs-2 post-icon" /></button>
                    </div>
                    {isComment && <div className="card">
                        <div className="card-header">
                            Comments
                        </div>
                        <ul className="list-group list-group-flush">
                            {comments.map(comment => {
                                return (
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center my-3">
                                            <FaUserCircle className="fs-2" />
                                            <h6 className="mx-3">User</h6>
                                        </div>
                                        <div className="mx-3">
                                            {comment}
                                        </div>

                                    </li>
                                )
                            })}

                        </ul>
                    </div>}

                </div>
            }


        </div >
    )
}

export default Postitem
