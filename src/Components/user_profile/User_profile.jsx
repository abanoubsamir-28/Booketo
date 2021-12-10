// Edit Post Border (Bootstrap)
// Comment Button (from 3)

import "./user_profile.css";
import React, { useEffect, useState, useRef } from "react";
import { fetchPosts } from "../../Store/getPosts/getPostsActions";
import axios from "axios";
import { connect } from "react-redux";
import Loader from "../SharedComponents/Loader/Loader";
import New_create_post from "../SharedComponents/posts/new_create_post/New_create_post";
import { useSelector } from "react-redux";
import Postitem from "../SharedComponents/Postitem/Postitem";
import New_post_item from "../SharedComponents/posts/new_post_item/New_post_item";
import Wishlist from "../SharedComponents/wishlist/Wishlist";
import { Link } from "react-router-dom";
import SliderBook from '../SharedComponents/slider/SliderBook'
const User_profile = ({ postsData, fetchPosts }) => {
  const [busy, setbusy] = useState(false);
  const [user, setuser] = useState({
    id: "",
    image: "",
    first_name: "",
    last_name: "",
    address: {
      address: "",
      city: "",
    },
    birth_date: "",
    company: {
      name: "",
      title: "",
    },
    email: "",
    gender: "",
    university: "",
    username: "",
    website: "",
    age: "",
    dept: "",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Ratione labore dolore praesentium, maxime incidunt id abcorporis quibusdam fugiat veniam accusamus pariatur aperiam,excepturi perspiciatis. Assumenda officiis culpa illovoluptatem!",
  });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/6")
      .then((res) => {
        fetchPosts(res.data.id);
        setuser({
          ...user,
          id: res.data.id,
          image: res.data.image,
          first_name: res.data.firstName,
          last_name: res.data.lastName,
          address: {
            address: res.data.address.address,
            city: res.data.address.city,
          },
          birth_date: res.data.birthDate,
          company: {
            name: res.data.company.name,
            title: res.data.company.title,
          },
          email: res.data.email,
          gender: res.data.gender,
          university: res.data.university,
          username: res.data.username,
          website: res.data.domain,
          age: res.data.age,
          phone: res.data.phone,
          dept: res.data.company.department,
        });
        setbusy(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const commentRef = useRef(null);
  const [user_posts, setuser_posts] = useState([])
  const addPost = () => {
    if (commentRef.current.value == "") {
      commentRef.current.placeholder = "Write Something....."
    } else {

      setuser_posts([commentRef.current.value, ...user_posts])
    }
  }
  return (
    <>

      {postsData.loading === true ? (
        <Loader />
      ) : (
        busy && (
          <div className="user__profile row justify-content-center">
            <Wishlist />
            <div className="user_posts_all col-md-7">
              <div class="panel d-flex justify-content-center align-items-center my-5 flex-column">
                <form className="d-flex flex-column">
                  <textarea
                    placeholder="Whats in your mind today?"
                    rows="4"
                    cols="100"
                    class="form-control input-lg p-text-area w-100"
                    ref={commentRef}
                  ></textarea>
                </form>
                <footer class="panel-footer d-inline w-50 d-flex justify-content-center">
                  <button className="btn-borde btn mx-auto my-3" onClick={addPost}>Share</button>
                </footer>
              </div>
              <div className="w-75 mx-auto">
                {user_posts.length !== 0 &&
                  user_posts.map((post) => {
                    console.log(post);
                    return (
                      <New_post_item
                        firstName={user.first_name}
                        lastName={user.last_name}
                        image={user.image}
                        username={user.username}
                        postBody={post}
                        postReactions={0}
                        postID={131}
                      />
                    );
                  })}
                {/* <SliderBook />   */}
                {busy &&
                  postsData.posts.data.posts?.map((post) => {
                    return (
                      <New_post_item
                        firstName={user.first_name}
                        lastName={user.last_name}
                        image={user.image}
                        username={user.username}
                        postBody={post.body}
                        postReactions={post.reactions}
                        postID={post.id}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="user__card col-md-3 h-50 my-5 d-flex flex-column justify-content-center">
              <figure className="user__profile__image d-flex justify-content-center mt-5">
                <img src={user.image} className="w-25 rounded-circle  " />
              </figure>
              <h5 class="text-center">
                {user.first_name} {user.last_name}
              </h5>
              <span className="text-center mb-2">
                @{user.username}
              </span>
              <span className="text-center  text-uppercase fw-bold">
                {user.gender}
              </span>
              <span class=" mx-2 text-center">
                {postsData.posts.data.total ? (
                  <span>
                    <h4 className="d-inline">{postsData.posts.data.total} </h4>
                    <span>Posts</span>
                  </span>
                ) : (
                  "Loading..."
                )}
              </span>
              <span className="mx-auto">{user.email}</span>
              <Link to="/settings" className=" btn mx-auto my-3 w-75 btn-trans" >Edit Profile</Link>
              <span className="p-3 text-center mx-auto  text-muted">
                {user.first_name} studied at {user.university} in the {user.dept} departement and working as
                {user.company.title} at {user.company.name}
              </span>
              <span className="mx-auto fw-bold">{user.address.city} City</span>

            </div>
          </div>
        )
      )}
    </>
  );
};

const mapStateToprops = (state) => {
  return {
    postsData: state.getPosts,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    fetchPosts: (user_id) => {
      return dispatch(fetchPosts(user_id));
    },
  };
};

export default connect(mapStateToprops, mapDispatchToprops)(User_profile);














