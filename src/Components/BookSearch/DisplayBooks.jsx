import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Reviews from "../bookProfile/Reviews";
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartStoreAction } from "../../Store/CartStore/cartStoreAction";
import Loader from "../SharedComponents/Loader/Loader";
import { addToWishList, removeFromWishList } from "../../Store/wishList/WishListAction";
import Wishlist from "../SharedComponents/wishlist/Wishlist";
import './bookdetailes.css'
import { ToastContainer } from "react-toastify";
function DisplayCom({ match }) {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [found, setfound] = useState(true)

  useEffect(() => {
    getSingleProduct();

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getSingleProduct = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${match.params.details_id}?key=AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        return error;
      });
  };


  const handleAddtoCart = (bookItem) => {
    dispatch(cartStoreAction(bookItem));
  };
  // add to wishList 
  const handleAddtowishList = (book) => {
    dispatch(addToWishList(book))
    setfound(false)
  }
  const handleRemoveFromWishlist = (book) => {
    dispatch(removeFromWishList(book))
    setfound(true)
  }
  return (
    <>   {data ? (
      <>
        <Wishlist />
        <section className="bookProfile">
          <div className="container mt-5">
            <div className="row">
              <div className="bookProfile__img col-4">
                <img src={data?.volumeInfo?.imageLinks !== undefined ? data?.volumeInfo?.imageLinks.thumbnail : "https://via.placeholder.com/150"} alt={data?.title} />
              </div>
              <div className="bookData.bookProfile__content col-md-8 col-lg-6">
                <h2 className=" fw-bold ms-1">
                  {data.volumeInfo?.title}
                </h2>
                {data.volumeInfo?.authors !== undefined ? (
                  <h5 className="my-3 text-black ms-2">
                    By "{data.volumeInfo?.authors}"
                  </h5>
                ) : (
                  ""
                )}
                {data.volumeInfo?.categories !== undefined ? (
                  <p className="ms-2">
                    <strong>Category : </strong>
                    {data.volumeInfo?.categories}
                  </p>
                ) : (
                  ""
                )}
                {data.volumeInfo?.description !== undefined ? (
                  <p className="ms-2">{data.volumeInfo?.description}</p>
                ) : (
                  ""
                )}
                {data.volumeInfo?.averageRating !== undefined ? (
                  <div className="ms-2">
                    <ReactStars
                      count={5}
                      edit={false}
                      value={data?.volumeInfo?.averageRating}
                      size={26}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </div>
                ) : (
                  <div className="ms-2">
                    <ReactStars
                      count={5}
                      edit={false}
                      size={26}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ccc"
                    />
                  </div>
                )}
                {data.volumeInfo !== undefined ? (
                  <p className="ms-3 mt-2">
                    <strong>Pages :</strong> {data.volumeInfo?.pageCount} page
                  </p>
                ) : (
                  ""
                )}
                {data?.saleInfo?.listPrice !== undefined ? (
                  <p className="ms-3">
                    <strong>Price : </strong>
                    {data?.saleInfo?.listPrice?.amount} EGP
                  </p>
                ) : (
                  <p className="ms-3">
                    <strong>Price :</strong> 50 EGP
                  </p>
                )}
                <button
                  onClick={() => handleAddtoCart(data)}
                  className="btn-borde rounded-pill btn mx-3 "
                  type="button"

                >
                  <span className="fs-5"></span> <AiOutlineShoppingCart /> Add
                  to cart
                </button>

                {found ?
                  <button
                    onClick={() => handleAddtowishList(data)}
                    className="btn-borde btn rounded-pill"
                    type="button"
                  >
                    <span className="fs-5 "></span> <AiOutlineHeart className="me-2 fs-4" />
                    Add to wishlist
                  </button>
                  :
                  <button
                    onClick={() => handleRemoveFromWishlist(data)}
                    className="btn-borde btn rounded-pill "
                    type="button"
                  >
                    <span className="fs-5 ms-2"></span> <AiFillHeart className="me-2 fs-4" />
                    Remove From
                    wishlist
                  </button>
                }
              </div>
            </div>
          </div>
          <Reviews />



        </section>
        <ToastContainer autoClose={2000} />
      </>
    )
      : (
        <Loader />
      )}
    </>
  );
}
export default DisplayCom;
