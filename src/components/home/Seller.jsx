import book1 from "./../../assets/Landing/book1.jfif"
import book2 from "./../../assets/Landing/book2.jfif"
import book3 from "./../../assets/Landing/book3.jfif"
import book4 from "./../../assets/Landing/book4.jfif"
import ReactStars from "react-rating-stars-component";

const Seller = () => {
    return (
        <div className="seller p-5 my-5">
            <div className="container ">
                <div className="seller__header text-center">
                    <h2 className="h1 mb-4 fw-bold">Best seller</h2>
                </div>
                <div className="seller__item row align-items-between px-lg-5 text-center">
                    {/* start */}
                    <div className="col-md-3 text-center">
                        <figure className="mt-3">
                            <img src={book1} alt="book1" className="w-75" />
                            <figcaption className="text-center mt-3">
                                <h5 className="">Science Fiction and ...</h5>
                                <div className='my-2 text-center d-flex justify-content-center'>
                                    <ReactStars
                                        value={1}
                                        count={5}
                                        size={24}
                                        isHalf={true}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <div className="">
                                    <h6 className=" fw-bold">87 EGP</h6>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    {/* start */}
                    <div className=" col-md-3 ">
                        <figure className="mt-3">
                            <img src={book2} alt="book2" className="w-75" />
                            <figcaption className="text-center mt-3">
                                <h5>The Science of Scie...</h5>
                                <div className='my-2 text-center d-flex justify-content-center'>
                                    <ReactStars
                                        value={4}
                                        count={5}
                                        size={24}
                                        isHalf={true}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                    <h6 className="fw-bold">223 EGP</h6>
                            </figcaption>
                        </figure>
                    </div>
                    {/* start */}
                    <div className=" col-md-3 ">
                        <figure className="mt-3">
                            <img src={book3} alt="book3" className="w-75 overflow-hidden" />
                            <figcaption className="text-center mt-3">
                                <h5>Creators of Science ...</h5>
                                <div className='my-2 text-center d-flex justify-content-center'>
                                    <ReactStars
                                        value={2}
                                        count={5}
                                        size={24}
                                        isHalf={true}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                    <h6 className="fw-bold">160 EGP</h6>
                            </figcaption>
                        </figure>
                    </div>
                    {/* start */}
                    <div className=" col-md-3 ">
                        <figure className="mt-3">
                            <img src={book4} alt="book4" className="w-75" />
                            <figcaption className="text-center mt-3">
                                <h5>Science Fiction by...</h5>
                                <div className='my-2 text-center d-flex justify-content-center'>
                                    <ReactStars
                                        value={3.5}
                                        count={5}
                                        size={24}
                                        isHalf={true}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                    <h6 className="fw-bold">46 EGP</h6>
                            </figcaption>
                        </figure>
                        {/* <div className="seller__contnent ">
                            <div className="row mt-2">
                                <div className="col-8 text-start">
                                    <h6>Jennifer Weiner</h6>
                                </div>
                                <div className="col">
                                    <img src={emptyHeart} alt="emptyHeart" />
                                </div>
                            </div>
                            <p className=" text-start">Mrs. Everything</p>
                            <div className="row mt-2">
                                <figure className="col-6 text-start">
                                    <img src={star} alt="star" />
                                    <span className=""> 4.6</span>
                                </figure>
                                <div className="col-6">
                                    <p className="seller__price ms-3 fw-bold fs-5">
                                        00$
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Seller
