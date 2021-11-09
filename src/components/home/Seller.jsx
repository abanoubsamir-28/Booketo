import "./seller.css"
import book1 from "./../../assets/Landing/5d09299723cf0905af7d54a4.webp"
import book2 from "./../../assets/Landing/5cdb17ae021b4c57092bdbc4.webp"
import book3 from "./../../assets/Landing/5d092c11b587c6081c087b16.webp"
import book4 from "./../../assets/Landing/5d0932e097ad76083c185b88.webp"
import emptyHeart from "./../../assets/Landing/like (1).svg"
import fillHeart from "./../../assets/Landing/like (2).svg"
import star from "./../../assets/Landing/star.svg"

const Seller = () => {
    return (
        <div className="seller p-5 my-5">
            <div className="container ">
                <h2 className="ms-2 mb-4">Best seller</h2>
                <div className="seller__item row align-items-between px-5">
                    {/* start */}
                    <div className=" col-sm-6 col-md-3 text-center">
                        <div className="seller__img position-relative">
                            <img src={book1} alt="book1" className="w-100" />
                            <div className="plus position-absolute text-white"><strong>+</strong></div>

                        </div>
                        <div className="seller__contnent">
                            <div className="row mt-2">
                                <div className="col-8 text-start">
                                    <h6>Elizabeth Gilbert</h6>
                                </div>
                                <div className="col">
                                    <img src={emptyHeart} alt="emptyHeart" />
                                </div>
                            </div>
                            <p className="text-start">City Of Girls</p>
                            <div className="row mt-2">
                                <div className="col-6 text-start">
                                    <img src={star} alt="star" />
                                    <span className="mt-5"> 4.6</span>
                                </div>
                                <div className="col-6">
                                    <p className="seller__price ms-3 fw-bold fs-5">
                                        00$
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* start */}
                    <div className="col-sm-6 col-md-3 text-center">
                        <div className="seller__img position-relative">
                            <img src={book2} alt="book2" className="w-100" />
                            <div className="plus position-absolute text-white"><strong>+</strong></div>

                        </div>
                        <div className="seller__contnent">
                            <div className="row mt-2">
                                <div className="col-8 text-start">
                                    <h6>Alex Michaelides</h6>
                                </div>
                                <div className="col ">
                                    <img src={fillHeart} alt="emptyHeart" />
                                </div>
                            </div>
                            <p className=" text-start">The Silent Patient</p>
                            <div className="row mt-2">
                                <div className="col-6 text-start">
                                    <img src={star} alt="star" />
                                    <span className="mt-5"> 4.6</span>
                                </div>
                                <div className="col-6">
                                    <p className="seller__price ms-3 fw-bold fs-5">
                                        00$
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* start */}
                    <div className="col-sm-6 col-md-3 text-center">
                        <div className="seller__img position-relative ">
                            <img src={book3} alt="book3" className="w-100 overflow-hidden" />
                            <div className="plus position-absolute text-white"><strong>+</strong></div>
                        </div>
                        <div className="seller__contnent ">
                            <div className="row mt-2">
                                <div className="col-8 text-start">
                                    <h6>Jayson Greene</h6>
                                </div>
                                <div className="col">
                                    <img src={emptyHeart} alt="emptyHeart" />
                                </div>
                            </div>
                            <p className="text-start">Once more we saw stars</p>
                            <div className="row mt-2">
                                <div className="col-6 text-start">
                                    <img src={star} alt="star" />
                                    <span className="mt-5"> 4.6</span>
                                </div>
                                <div className="col-6">
                                    <p className="seller__price ms-3 fw-bold fs-5">
                                        00$
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* start */}
                    <div className="col-sm-6 col-md-3 text-center">
                        <div className="seller__img position-relative">
                            <img src={book4} alt="book4" className="w-100" />
                            <div className="plus position-absolute text-white"><strong>+</strong></div>

                        </div>
                        <div className="seller__contnent ">
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
                                <div className="col-6 text-start">
                                    <img src={star} alt="star" />
                                    <span className=""> 4.6</span>
                                </div>
                                <div className="col-6">
                                    <p className="seller__price ms-3 fw-bold fs-5">
                                        00$
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Seller
