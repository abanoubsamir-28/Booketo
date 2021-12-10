import React, { useEffect, useState } from 'react'
import avatar from "./../../assets/bookProfile/Mask Group 1@2x.webp"
import axios from "axios"
import './reviews.css'
import Loader from './../SharedComponents/Loader/Loader'
import AddReview from '../Forms/addReviews/AddReview'

const Reviews = ({ values }) => {
    const [post, setPost] = useState('')
    const [review, setReview] = useState('')
    const [title, setTitle] = useState('')
    useEffect(() => {
        getOnePost()
        console.log(values);

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
    const addReview = (values) => {
        setPost([...post, values])
        console.log(values);
    }

    return (
        <>
            {post ?
                (<div className="reviews mt-5" >
                    <div className="container">
                        <h3 className="fs-2">Reviews</h3>
                        {post.map((ele, i) => {
                            return (

                                <div key={i} className="row col-lg-6 col-9 mt-3 border border-2 p-3 shadow">
                                    <div className="col-sm-3">

                                        <img src={avatar} alt="avatar" />
                                        <h5 className="mt-2 ms-2 fw-bold text-capitalize">user name</h5>


                                    </div>
                                    <div className="col-sm-9 ">
                                        <h5 className="fw-bold text-capitalize">{ele.title}</h5>
                                        <p className="">{ele.body}</p>
                                        <p className=" input_text">{ele.review}</p>
                                    </div>
                                </div>)
                        })}
                        <h4 className="m-2 mt-5">Add Your Review</h4>
                        <form onSubmit={handelsubmit}>
                            <input type="text" placeholder="write title" value={title} onChange={inputTitle}
                                className="d-block mb-3 ms-2 form-control w-75" />

                            <textarea className="ms-2 me-5 form-control w-75"
                                value={review}
                                cols="50" rows="5"
                                onChange={inputReview}
                                placeholder="Write your review here">
                            </textarea>

                            <button type="submit" className="reviewBtn btn btn-trans mb-5 rounded-pill ms-2 mt-3" >Add Review</button>

                        </form>

                    </div>
                </div >)
                : <Loader />
            }
        </>
    )
}

export default Reviews
