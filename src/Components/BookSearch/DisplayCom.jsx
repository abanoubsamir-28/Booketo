import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import Reviews from '../bookProfile/Reviews';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import Loader from '../SharedComponents/Loader/Loader';
function DisplayCom({ match }) {
    const [res, setResult] = useState([]);
    useEffect(() => {
        getSingleProduct()
    }, [])
    const getSingleProduct = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${match.params.details_id}?key=AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E`)
            .then((res) => {
                setResult(res)
            }).catch((error) => { return error })
    }
    return (
        <>
            {res.data ?
                (
                    <section className="bookProfile">
                        <div className="container mt-5">
                            <div className="row">
                                <div className="bookProfile__img col-4">
                                    {res.data?.volumeInfo.imageLinks !== undefined ?
                                        <img src={res.data.volumeInfo.imageLinks.thumbnail} alt="book img" className="mt-3 mb-3" />
                                        : <img src="https://via.placeholder.com/150" className="mb-3" alt="book img placeholder" />}
                                </div>
                                <div className="bookData.bookProfile__content col-md-6">
                                    <h2 className="text-danger fw-bold">{res.data.volumeInfo.title}</h2>
                                    {res.data.volumeInfo.authors !== undefined ?
                                        <h5 className="my-3 text-black ms-2">By "{res.data.volumeInfo.authors}"</h5>
                                        : ""}
                                    {res.data.volumeInfo.categories !== undefined ?
                                        <p className="ms-2"><strong>Category : </strong>{res.data.volumeInfo.categories}</p>
                                        : ""}
                                    {res.data.volumeInfo.description !== undefined ?
                                        <p className="ms-2">{res.data.volumeInfo.description}</p>
                                        : ""}
                                    {res.data.volumeInfo.averageRating !== undefined ?
                                        <div className="ms-2">
                                            <ReactStars
                                                count={5}
                                                edit={false}
                                                value={res.data.volumeInfo.averageRating}
                                                size={26}
                                                isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        :
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
                                    }
                                    {res.data.volumeInfo !== undefined ?
                                        <p className="ms-3"><strong>Pages :</strong> {res.data.volumeInfo.pageCount} page</p>
                                        : ""}
                                    {/* {res.data.saleInfo.listPrice !== null ?
                                        <p className="ms-3"><strong>Price : </strong>{res.data.saleInfo.listPrice.amount} EGP</p>
                                        : <p><strong>Price</strong> 50 EGP</p>
                                    } */}
                                    <button className="wishBtn btn mx-3" type="button">
                                        <span className="fs-5"></span> <AiOutlineShoppingCart /> Add to cart</button>
                                    <button className="cartBtn btn text-black" type="button"><span className="fs-5">
                                    </span> <AiOutlineHeart /> Add to wishlist</button>
                                </div>
                            </div>
                        </div>
                        <Reviews />
                    </section >
                )
                : (<Loader/>)}
        </>
    )
}
export default DisplayCom
