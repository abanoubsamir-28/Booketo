// import React, { useState } from "react";
// import { useEffect } from "react";
// import user from "../../assets/UserProfile/464-4641403_png-file-user-icon-circle-svg.png";
// import axios from "axios";
// // import "./userprofile.css";
// import Loader from "../SharedComponents/Loader/Loader";

// function UserProfile() {


//     useEffect(() => {
//         getsingleuser()

//     }, [])

//     const [userstate, setuserstate] = useState([])
//     // const [poststate, setpoststate] = useState([""])
//     const [counterstate, setcounterstate] = useState(2)
//     // const[emailstate,setemailstate]=useState(userstate.email)
//     // console.log(emailstate)
//     // const [imagestate, setimagestate] = useState()

//     function getsingleuser() {
//         return fetch('https://fakestoreapi.com/users/1')
//             .then(res => res.json())
//             .then(json => setuserstate(json))
//     }
//     function submitpost() {
//         setcounterstate(counterstate + 1)
//     }

//     // function imagefunction  (event)  {
//     //      console.log(event.target.files[0])
//     //  }

//     // function postcontent(e) {
//     //     setpoststate(e.target.value)
//     // }
//     // function addpost(task) {
//     //     setpoststate([...poststate, task])
//     //     console.log(poststate)
//     // }
//     // function submitpost() {
//     //     addpost()

//     // }

//     return (
//         <div className="container-fluid mt-5 pt-5 mainprofile">

//             <div className="text-center">
//                 <button className=" ms-5 mb-5 btn-border rounded-pill btn shadow">test1</button>
//             </div>
//             <div className="text-center">
//                 <button className="btn mt-5 mb-5 btn-trans rounded-pill">test 2frefrfre</button>
//             </div>
//             <div className="text-center">
//                 <button className="btn mt-5 mb-5 btn-borde rounded-pill">test 2frefrfre</button>
//             </div>
//             <div className="row">
//                 <img src={user} className="borderardius w-25 col-md-4 col-sm-12" />
//                 {/* <form className=" w-25 col-md-4 col-sm-12">
//                     <input type="file" onChange={imagefunction}/>
//                     <p>{imagestate}</p>
                 
//                 </form> */}
//                 <div className="mt-5 col-md-8 col-sm-12">
//                     <h1 className=" ms-5  username">{userstate.username} </h1>

//                     <div className="row container-fluid  mt-3">
//                         <h5 className="col-md-4 col-sm-12 ps-5 ">Followers </h5>
//                         <h5 className="col-md-4 col-sm-12 contentdata">250</h5>
//                     </div>
//                     <div className="row container-fluid  mt-2">
//                         <h5 className="col-md-4 col-sm-12 ps-5">Posts </h5>
//                         <h5 className="col-md-4 col-sm-12 contentdata">{counterstate}</h5>
//                     </div>
//                     <div className="row container-fluid mt-2">
//                         <h5 className="col-md-4 col-sm-12 ps-5">Email </h5>
//                         <h5 className="col-md-4 col-sm-12 contentdata">{userstate.email}</h5>
//                     </div>
//                     <div className="row container-fluid mt-2">
//                         <h5 className="col-md-4 col-sm-12 ps-5">Phone </h5>
//                         <h5 className="col-md-4 col-sm-12 contentdata">{userstate.phone}</h5>
//                     </div>
//                 </div>

//             </div>

// <<<<<<< HEAD
//             <div class="ps-5 input-group mb-3 mt-5 w-50">
//                 <input type="text" name="post" class="form-control" placeholder="Write New Post " aria-label="Recipient's username" aria-describedby="button-addon2" />
//                 <button onClick={submitpost} class=" username btn btn-outline-secondary" type="button" id="button-addon2">Post</button>
// ||||||| e346519
//             <div class="ps-5 input-group mb-3 mt-5 w-50">
//                 <input  type="text" name="post" class="form-control" placeholder="Write New Post " aria-label="Recipient's username" aria-describedby="button-addon2" />
//                 <button onClick={submitpost} class=" username btn btn-outline-secondary" type="button" id="button-addon2">Post</button>
// =======
//             <div className="ps-5 input-group mb-3 mt-5 w-50">
//                 <input  type="text" name="post" className="form-control" placeholder="Write New Post " aria-label="Recipient's username" aria-describedby="button-addon2" />
//                 <button onClick={submitpost} className=" username btn btn-outline-secondary" type="button" id="button-addon2">Post</button>
// >>>>>>> f8959348a61d0490efcd3f79ea84882855e85064
//             </div>
//             {/* <p>{poststate}</p> */}



//             <h4 className="username ms-3  mt-5 mypost">My Posts</h4>
//             {/* <div className="container-fluid mt-3 p-1 Post">
//                 <p className="p-2 contentdata"> {poststate}</p>
//             </div> */}
//             <div className="container-fluid mt-3 p-1 Post">
//                 <p className="p-2 contentdata">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nisi, cumque voluptatibus tenetur aliquam nesciunt porro illum assumenda ad recusandae nemo esse laborum. Quia aspernatur deleniti, vel repellendus sit ad.</p>
//             </div>
//             <div className="container-fluid mt-3 p-1 Post">
//                 <p className="p-2 contentdata">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nisi, cumque voluptatibus tenetur aliquam nesciunt porro illum assumenda ad recusandae nemo esse laborum. Quia aspernatur deleniti, vel repellendus sit ad.</p>
//             </div>

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/users/1")
//       .then((response) => {
//         setuserstate(response.data);
//       })
//       .catch((err) => console.log(err));
//     axios
//       .get("https://dummyjson.com/posts/user/5")
//       .then((posts) => {
//         setPosts(posts.data.posts);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const [userstate, setuserstate] = useState([]);
//   const [posts, setPosts] = useState(null);
//   const [counterstate, setcounterstate] = useState(0);

//   return (
//     <>
//       {posts === null ? (
//         <Loader />
//       ) : (
//         <div className="container-fluid mt-5 pt-5 mainprofile">
//           {posts.map((post) => {
//             console.log(post.id);
//           })}
//           <div className="row">
//             <img src={user} className="borderardius w-25 col-md-4 col-sm-12" />
//             <div className="mt-5 col-md-8 col-sm-12">
//               <h1 className=" ms-5  username">{userstate.username} </h1>

//               <div className="row container-fluid  mt-3">
//                 <h5 className="col-md-4 col-sm-12 ps-5 ">Followers </h5>
//                 <h5 className="col-md-4 col-sm-12 contentdata">250</h5>
//               </div>
//               <div className="row container-fluid  mt-2">
//                 <h5 className="col-md-4 col-sm-12 ps-5">Posts </h5>
//                 <h5 className="col-md-4 col-sm-12 contentdata">
//                   {counterstate}
//                 </h5>
//               </div>
//               <div className="row container-fluid mt-2">
//                 <h5 className="col-md-4 col-sm-12 ps-5">Email </h5>
//                 <h5 className="col-md-4 col-sm-12 contentdata">
//                   {userstate.email}
//                 </h5>
//               </div>
//               <div className="row container-fluid mt-2">
//                 <h5 className="col-md-4 col-sm-12 ps-5">Phone </h5>
//                 <h5 className="col-md-4 col-sm-12 contentdata">
//                   {userstate.phone}
//                 </h5>
//               </div>
//             </div>
//           </div>
//           <div class="ps-5 input-group mb-3 mt-5 w-50">
//             <input
//               type="text"
//               name="post"
//               class="form-control"
//               placeholder="Write New Post "
//               aria-label="Recipient's username"
//               aria-describedby="button-addon2"
//             />
//             {/* <button onClick={submitpost} class=" username btn btn-outline-secondary" type="button" id="button-addon2">Post</button> */}
//           </div>
//           <h4 className="username ms-3  mt-5 mypost">My Posts</h4>
//           <div className="container-fluid mt-3 p-1 Post">
//             <p className="p-2 contentdata">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nisi,
//               cumque voluptatibus tenetur aliquam nesciunt porro illum assumenda
//               ad recusandae nemo esse laborum. Quia aspernatur deleniti, vel
//               repellendus sit ad.
//             </p>
//           </div>
//           <div className="container-fluid mt-3 p-1 Post">
//             <p className="p-2 contentdata">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nisi,
//               cumque voluptatibus tenetur aliquam nesciunt porro illum assumenda
//               ad recusandae nemo esse laborum. Quia aspernatur deleniti, vel
//               repellendus sit ad.
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default UserProfile;
