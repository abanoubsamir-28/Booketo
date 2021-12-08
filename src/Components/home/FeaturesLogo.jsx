
import { FaShippingFast } from 'react-icons/fa';
import { BsHeadset } from 'react-icons/bs'
import {  GiCash } from 'react-icons/gi'
const FeaturesLogo = () => {
    return (
        <div className='featureLogo my-5 p-xl-5 p-3'  style={{background:"#fbf8f3"}} >
            <div className="container">
                <h2 className="text-center my-5">OUR FEATURES</h2>
                <div className="row">
                    {/* start */}
                    <div className="col-md-6 col-lg-4">
                        <div className="feature__item text-center border p-5 shadow mt-4 bg-white" >
                            <div className="feature__item__img">
                                <FaShippingFast style={{ fontSize: "5rem" }} />
                            </div>
                            <div className="feature__item__content">
                                <h6 className="my-3">FREE SHIPPING WORLDWIDE</h6>
                                <p className="text-muted">We offer free shipping via Standard Shipping on orders over 200.00EGP</p>
                            </div>
                        </div>
                    </div>
                    {/* start */}
                    <div className="col-md-6 col-lg-4 m-auto">
                        <div className="feature__item text-center border p-5 shadow mt-4 bg-white">
                            <div className="feature__item__img ">
                                <BsHeadset style={{ fontSize: "5rem" }} />
                            </div>
                            <div className="feature__item__content">
                                <h6 className="my-3">ONLINE SUPPORT 24/7</h6>
                                <p className="text-muted">We offer free shipping via Standard Shipping on orders over 200.00EGP</p>
                            </div>
                        </div>
                    </div>
                    {/* start */}
                    <div className="col-md-6 col-lg-4 m-auto">
                        <div className="feature__item text-center border p-5 shadow mt-4 bg-white" >
                            <div className="feature__item__img ">
                                <GiCash className="" style={{ fontSize: "5rem" }} />
                            </div>
                            <div className="feature__item__content">
                                <h6 className="my-3">MONEY BACK GUARANTEE</h6>
                                <p className="text-muted">We offer free shipping via Standard Shipping on orders over 200.00EGP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesLogo
