import React, { useEffect, useState } from 'react'
import avatar from "./../../assets/bookProfile/Mask Group 1@2x.webp"
import axios from "axios"
import './reviews.css'
const Reviews = () => {
    const [post, setPost] = useState('')
    const [review, setReview] = useState('')
    const [title, setTitle] = useState('')
    useEffect(() => {
        getOnePost()
    }, [])
    const getOnePost = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPost(response.data.slice(3, 6))
            })
    }
    const inputReview = (e) => {
        setReview(e.target.value);
    }
    const inputTitle = (e) => {
        setTitle(e.target.value)
    }
    const handelsubmit = (e) => {
        e.preventDefault();
        addReview({ review, title })
        setReview("")
        setTitle('')
    }
    const addReview = (oneReview) => {
        setPost([...post, oneReview])
    }

    return (
        <>
            {post ?
                (<div className="reviews mt-5" >
                    <div className="container">
                        <h3 className="fs-2">Reviews</h3>
                        {post.map((ele, i) => {
                            return (
                                <div key={i} className="row col-lg-6 col-9 mt-4">
                                    <div className="col-sm-3">
                                        <img src={avatar} alt="avatar" className="w-75"/>
                                        <h5 className="mt-2 ms-3">user name</h5>
                                    </div>
                                    <div className="col-sm-9 ">
                                        <h5>{ele.title}</h5>
                                        <p className="">{ele.body}</p>
                                        <p className=" input_text">{ele.review}</p>
                                    </div>
                                </div>)
                        })}
                        <h4 className="m-2 mt-5">Review this book</h4>
                        <form onSubmit={handelsubmit}>
                            <input type="text" placeholder="write title" value={title} onChange={inputTitle}
                                className="d-block mb-3 ms-2 form-control w-75" />

                            <textarea className="ms-2 me-5 form-control w-75"
                                value={review}
                                cols="50" rows="5"
                                onChange={inputReview}
                                placeholder="Write your review here">
                            </textarea>
                            <button type="submit" className="reviewBtn btn ms-2 mt-3" >Add Review</button>
                        </form>
                    </div>
                </div >)
                : ''
            }
        </>
    )
}

export default Reviews
