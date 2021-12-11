import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Readingchallenge from '../../SharedComponents/Readingchallenge/Readingchallenge'
import Loader from "../../SharedComponents/Loader/Loader";
import QuoteMachine from '../../../Services/QuoteMachine'
import Wishlist from '../../SharedComponents/wishlist/Wishlist'
import New_post_item from "../../SharedComponents/posts/new_post_item/New_post_item"
import userIco from '../../../assets/user.ico'
import NavBar from '../../SharedComponents/NavBar'
const Newsfeed = () => {
  const [isFree, setIsFree] = useState(false);
  // eslint-disable-next-line
  const [isFreeUser, setIsFreeUser] = useState(false);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((incomingPosts) => {
        setposts(incomingPosts.data.posts);
        setIsFree(true);
      })
      .catch((err) => {
        return err;
      });
  }, []);
  const [user_posts, setuser_posts] = useState([])
  const [posts, setposts] = useState(null);
  // eslint-disable-next-line
  const [userData, setUserDta] = useState(null)


  const addPost = () => {
    if (commentRef.current.value === "") {
      commentRef.current.placeholder = "Write Something....."
    } else {
      setuser_posts([commentRef.current.value, ...user_posts])
      commentRef.current.value = ""
    }
  }
  const commentRef = useRef(null);
// eslint-disable-next-line
  const getUser = (id) => {
    axios.get(`https://dummyjson.com/users/${id}`).then(user => {
      setUserDta(user.data)
      setIsFreeUser(true)
    })
  }
  return (
    <>
      <NavBar />
      {posts === null ? (
        <Loader />
      ) : (isFree &&
        <>
          <div className="overflow-hidden container-fluid py-2">
            <div className="w-75 my-2 mx-auto">
              <div>
                <form>
                  <textarea
                    placeholder="Whats in your mind today?"
                    rows="4"
                    cols="70"
                    class="form-control  p-text-area w-75 mx-auto"
                    ref={commentRef}
                  ></textarea>
                </form>
                <footer class="panel-footer my-4 mx-auto d-flex justify-content-center align-items-center ">
                  <button class="btn btn-trans rounded-pill" onClick={addPost}>
                    Post
                  </button>
                </footer>
              </div>
            </div>

            <div className="row justify-content-center my-3">


              <div className="col-md-5">
                {user_posts.length !== 0 &&
                  user_posts.map((post) => {
                    return (
                      // eslint-disable-next-line
                      <New_post_item
                        firstName={"Matthew"}
                        lastName={"John"}
                        image={userIco}
                        username={"username"}
                        postBody={post}
                        postReactions={0}
                        postID={131}
                      />
                    );
                  })}
                {posts.map((postItem) => {
                  // eslint-disable-next-line
                  return <New_post_item
                    firstName={"Matthew"}
                    lastName={"John"}
                    image={userIco}
                    username={"username"}
                    postBody={postItem.body}
                    postReactions={postItem.reactions}
                    postID={postItem.id}
                  />
                })}
              </div>
              <div className="col-md-3">
                <Readingchallenge />
                <QuoteMachine />
                <Wishlist />
              </div>
            </div>
          </div>
        </>

      )
      }
    </>
  );
};

export default Newsfeed;

