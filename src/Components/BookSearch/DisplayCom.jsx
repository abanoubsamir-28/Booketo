import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import Reviews from '../bookProfile/Reviews';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { cartStoreAction } from '../../Store/CartStore/cartStoreAction';
function DisplayCom({ match }) {
    const display = useDispatch();
    const [res, setResult] = useState([]);
    useEffect(() => {
        getSingleProduct()
    }, [])
    const getSingleProduct = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${match.params.details_id}?key=AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E`)
        .then((res) => {
                let arr=[]
                // setResult(res)
                // res.data.map((el) => {
                    var q = Object.assign({},res);
                    q.quant =1;
                    // console.log(q);//one obj+quna
                    arr.push(q)
                    setResult(arr)
            
            }).catch((error) => { return error })
            // console.log("res,",res[0]);
    }


    const handleAddtoCart = (res) => {
        display(cartStoreAction(res))
    }
    return (
        <>
            {res[0]?.data ?
                (
                    <section className="bookProfile">
                        <div>[console.log(res[0]);]</div>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="bookProfile__img col-4">
                                    {res[0].data?.volumeInfo !== undefined ?
                                        <img src={res[0].data?.volumeInfo?.imageLinks.thumbnail} alt="book img" className="mt-3 mb-3" />
                                        : <img src="https://via.placeholder.com/150" className="mb-3" alt="book img placeholder" />}
                                </div>
                                <div className="bookData.bookProfile__content col-md-6">
                                    <h2 className="text-danger fw-bold">{res[0].data?.volumeInfo?.title}</h2>
                                    {res[0].data?.volumeInfo?.authors !== undefined ?
                                        <h5 className="my-3 text-black ms-2">By "{res[0].data?.volumeInfo?.authors}"</h5>
                                        : ""}
                                    {res[0].data?.volumeInfo?.categories !== undefined ?
                                        <p className="ms-2"><strong>Category : </strong>{res[0].data?.volumeInfo?.categories}</p>
                                        : ""}
                                    {res[0].data?.volumeInfo?.description !== undefined ?
                                        <p className="ms-2">{res[0].data?.volumeInfo?.description}</p>
                                        : ""}
                                    {res[0].data?.volumeInfo?.averageRating !== undefined ?
                                        <div className="ms-2">
                                            <ReactStars
                                                count={5}
                                                edit={false}
                                                value={res.data?.volumeInfo?.averageRating}
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
                                    {res[0].data?.volumeInfo !== undefined ?
                                        <p className="ms-3"><strong>Pages :</strong> {res[0].data?.volumeInfo?.pageCount} page</p>
                                        : ""}
                                    {res[0].data?.saleInfo.listPrice !== null ?
                                        <p className="ms-3"><strong>Price : </strong>{res[0].data?.saleInfo.listPrice?.amount} EGP</p>
                                        : <p><strong>Price</strong> 50 EGP</p>
                                    }
                                    <button onClick={() => handleAddtoCart(res)} className="wishBtn btn mx-3" type="button">
                                        <span className="fs-5"></span> <AiOutlineShoppingCart /> Add to cart</button>

                                    <button className="cartBtn btn text-black" type="button"><span className="fs-5">
                                    </span> <AiOutlineHeart /> Add to wishlist</button>
                                </div>
                            </div>
                        </div>
                        <Reviews />
                    </section >
                )
                : (<div className="d-flex justify-content-center mt-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>)}
        </>
    )
}
export default DisplayCom
