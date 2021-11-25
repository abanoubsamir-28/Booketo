import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Newfeedaside from "../NewsfeedAside/Newfeedaside";
import Postitem from "../../SharedComponents/Postitem/Postitem";
import Readingchallenge from '../../SharedComponents/Readingchallenge/Readingchallenge'
import Loader from "../../SharedComponents/Loader/Loader";
import Createpost from '../../SharedComponents/createpost/Createpost'
import QuoteMachine from '../../../Services/QuoteMachine'
import Wishlist from '../../SharedComponents/wishlist/Wishlist'
// import Readingchallenge from '../../SharedComponents/Readingchallenge/Readingchallenge'
import { useSelector } from "react-redux";
const Newsfeed = () => {
    const [posts, setposts] = useState(null);
    const UserPost = useSelector(state => {
        const post = {
            body: state.createPost.post,
            id: "",
            title: "",
            userID: ""
        }
        return (
            post.body == "" ? "" : <Postitem post={post} />
        )
    })
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((incomingPosts) => {
                setposts(incomingPosts.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            {posts === null ? (
                <Loader />
            ) : (
                <div className="overflow-hidden container-fluid">
                    <QuoteMachine />
                    <div className="w-75 my-2 mx-auto">
                        <div>
                            <Createpost />
                        </div>
                    </div>
                    <div className="row justify-content-center my-3">
                        <div className="col-md-3">
                            <Readingchallenge />
                        </div>
                        <div className="col-md-5">
                            {UserPost}
                            {posts.slice(0, 3).map((postItem) => {
                                return <Postitem post={postItem} />
                            })}
                        </div>
                        <div className="col-md-3">
                            <Wishlist />
                        </div>

                    </div>
                </div>
            )
            }
        </>
    );
};

export default Newsfeed;

{/* <QuoteMachine />
<div className="w-50 mx-auto my-5">
    <Createpost />
</div>
<div className="row justify-content-center">
    <Newfeedaside />
    <div className="col-md-8 ms-auto">
        {UserPost}
        {posts.map((postItem) => {
            return <Postitem post={postItem} />
        })}
    </div>
</div> */}
