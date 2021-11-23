// import React, { useEffect } from 'react'
// import { getData } from '../../Store/bookProfile/BookAction'
// import { connect } from 'react-redux'
// import { Spinner } from 'react-bootstrap';
// import ReactStars from 'react-rating-stars-component';
// import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
// import Reviews from './Reviews';
// import './bookprofile.css'


// const BookProfile = ({ getData, bookData }) => {
//     useEffect(() => {
//         getData()
//     }, [])
//     return (
//         <>
//             {bookData.book ?
//                 (<section className="bookProfile">
//                     <div className="container mt-5">
//                         <div className="row">
//                             <div className="bookProfile__img col-4">
//                                 {bookData.book.volumeInfo.imageLinks !== undefined ?
//                                     <img src={bookData.book.volumeInfo.imageLinks.thumbnail} alt="book img" className="mt-3 mb-3" />
//                                     : <img src="https://via.placeholder.com/150" className="mb-3" alt="book img placeholder" />}
//                             </div>
//                             <div className="bookData.bookProfile__content col-md-6">
//                                 <h2 className="text-danger fw-bold">{bookData.book.volumeInfo.title}</h2>
//                                 {bookData.book.volumeInfo.authors !== undefined ?
//                                     <h5 className="my-3 text-black ms-2">By "{bookData.book.volumeInfo.authors}"</h5>
//                                     : ""}
//                                 {bookData.book.volumeInfo.categories !== undefined ?
//                                     <p className="ms-2"><strong>Category : </strong>{bookData.book.volumeInfo.categories}</p>
//                                     : ""}
//                                 {bookData.book.volumeInfo.description !== undefined ?
//                                     <p className="ms-2">{bookData.book.volumeInfo.description}</p>
//                                     : ""}
//                                 {bookData.book.volumeInfo.averageRating !== undefined ?
//                                     <div className="ms-2">
//                                         <ReactStars
//                                             count={5}
//                                             edit={false}
//                                             value={bookData.book.volumeInfo.averageRating}
//                                             size={26}
//                                             isHalf={true}
//                                             emptyIcon={<i className="far fa-star"></i>}
//                                             halfIcon={<i className="fa fa-star-half-alt"></i>}
//                                             fullIcon={<i className="fa fa-star"></i>}
//                                             activeColor="#ffd700"
//                                         />
//                                     </div>
//                                     : ""}
//                                 {bookData.book.volumeInfo.pageCount !== undefined ?
//                                     <p className="ms-3"><strong>Pages :</strong> {bookData.book.volumeInfo.pageCount} page</p>
//                                     : ""}
//                                 {bookData.book.saleInfo.listPrice !== null ?
//                                     <p className="ms-3"><strong>Price : </strong>{bookData.book.saleInfo.listPrice.amount} EGP</p>
//                                     : <p><strong>Price</strong> 50 EGP</p>
//                                 }
//                                 <button className="wishBtn btn mx-3" type="button">
//                                     <span className="fs-5"><AiOutlineShoppingCart /></span> Add to cart</button>
//                                 <button className="cartBtn btn text-black" type="button"><span className="fs-5"><AiOutlineHeart /></span> Add to wishlist</button>
//                             </div>
//                         </div>
//                     </div>
//                     <Reviews />
//                 </section >)
//                 :
//                 (<div className="d-flex justify-content-center mt-5">
//                     <Spinner animation="border" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                     </Spinner>
//                 </div>)
//             }
//         </>)
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         getData: () => dispatch(getData())
//     }
// }
// const mapStateToProps = state => {
//     // console.log("state", state);
//     return {
//         bookData: state.book
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BookProfile)
