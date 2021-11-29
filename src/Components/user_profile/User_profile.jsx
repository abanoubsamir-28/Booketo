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
      .get("https://dummyjson.com/users/45")
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
    setuser_posts([commentRef.current.value , ...user_posts ])
  }
  return (
    <>
      {postsData.loading === true ? (
        <Loader />
      ) : (
        busy && (
          <div className="user__profile">
            <div class="container mt-5">
              <div class="row">
                <div class="col-md-12">
                  <div class="user_card p-3 py-4">
                    <div class="text-center">
                      <img
                        src={user.image}
                        width="100"
                        class="rounded-circle"
                      />
                    </div>
                    <div class="text-center mt-3">
                      <span class="bg-secondary p-1 px-4 rounded text-white">
                        @{user.username}
                      </span>
                      <span class="bg-secondary p-1 px-4 rounded text-white mx-2">
                        {user.gender}
                      </span>
                      <span class="bg-secondary p-1 px-4 rounded text-white mx-2">
                        ID : {user.id}
                      </span>
                      <span class="bg-secondary p-1 px-4 rounded text-white mx-2 d-block w-25 mx-auto my-2">
                        {postsData.posts.data.total ? (
                          <span>
                            Total Posts : {postsData.posts.data.total}
                          </span>
                        ) : (
                          "Loading..."
                        )}
                      </span>
                      <h5 class="mt-2 mb-0 fs-1">
                        {user.first_name} {user.last_name}
                      </h5>
                      <p class="mt-2 mb-0">
                        Studied at {user.university} , {user.dept} Departement
                      </p>
                      <p class="mt-2 mb-0"> {user.website}</p>
                      <span className="fs-5">
                        {user.company.title} at {user.company.name}
                      </span>
                      <div class="px-4 mt-1">
                        <p class="fonts w-75 text-center mx-auto fs-6 fw-light text-muted">
                          {user.bio}
                        </p>
                        <div className="contact_info row mx-auto w-75">
                          <h5 class="col-md-6">
                            Birthday / <span>{user.birth_date}</span>
                          </h5>
                          <h5 class="col-md-6">
                            Age / <span>{user.age}</span>
                          </h5>
                          <h5 class="col-md-6">
                            Email / <span>{user.email}</span>
                          </h5>
                          <h5 class="col-md-6">
                            Residence / <span>{user.address.city}</span>
                          </h5>
                          <h5 class="col-md-6">
                            Phone / <span>{user.phone}</span>
                          </h5>
                          <h5 class="col-md-6">
                            Adress / <span>{user.address.address}</span>
                          </h5>
                        </div>
                      </div>
                      {/* <div class="buttons">
                    <button class="btn btn-outline-primary px-4">
                      Message
                    </button>
                    <button class="btn btn-primary px-4 ms-3">Contact</button>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <New_create_post user_id={user.id} /> */}
            <div class="panel d-flex justify-content-center align-items-center my-5">
      <form>
        {/* {console.log("from create", props.user_id)} */}
        <textarea
          placeholder="Whats in your mind today?"
          rows="4"
          cols="100"
          class="form-control input-lg p-text-area w-100"
          ref={commentRef}
        ></textarea>
      </form>
      <footer class="panel-footer mx-3">
        <button class="btn pull-right text-white" onClick={addPost}>
          Post
        </button>
      </footer>
    </div>
            <div className="w-75 mx-auto">
            {user_posts.length !==0 &&
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
                      postID={1}
                    />
                  );
                })}

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
