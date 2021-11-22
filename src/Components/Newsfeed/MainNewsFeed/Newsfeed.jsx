import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Newfeedaside from "../NewsfeedAside/Newfeedaside";
import Postitem from "../../SharedComponents/Postitem/Postitem";
import Readingchallenge from '../../SharedComponents/Readingchallenge/Readingchallenge'
import Loader from "../../SharedComponents/Loader/Loader";
import Createpost from '../../SharedComponents/createpost/Createpost'
const Newsfeed = () => {
    const [posts, setposts] = useState(null);
    const createPostRef = useRef("")
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
                <div className="container-fluid">
                    <div className="w-50 mx-auto my-5">
                        <Createpost ref={createPostRef} />
                    </div>

                    <div className="row justify-content-center">
                        <Newfeedaside />
                        <div className="col-md-8 ms-auto">
                            {posts.map((postItem) => {
                                return <Postitem post={postItem} />
                            })}
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default Newsfeed;

{
    /* <div>
   {this.state.posts.map(postItem => (
    <div key={postItem.id}>
      <h1>{postItem.title}</h1>
    </div>
   )}
  </div> */
}
