import mobile from "./../../assets/Landing/Group238.webp"
import logo from "./../../assets/Landing/svg (1).svg"
import apple from "./../../assets/Landing/apple-black-shape-logo-with-a-bite-hole.svg"
import googleStore from "./../../assets/Landing/play-store.svg"
import "./storeShop.css"
const StoreShop = () => {
    return (
        <div className="storeShop my-5 p-5 ">
            <div className="container">
                <div class="mb-3">
                    <div class="row g-0">
                        <div className="storeShop__content row align-items-center">
                            <div class="col-md-7 mt-5">
                                <img src={logo} alt="logo" className="store__logo ms-sm-2" />
                                <div class="card-body">
                                    <h2 className="text-uppercase mt-3">
                                        shop faster on your mobile
                                    </h2>
                                    {/* buttons */}
                                    <div className="storeShop__btn">
                                        <div className="row">
                                            <div className="col-xl-4  mt-3">
                                                <div className="store_btn  bg-white">
                                                    <div className="row align-items-center ">
                                                        <div className="col-2 offset-1">
                                                            <img src={googleStore} alt="apple logo" />
                                                        </div>
                                                        <div className="col-9">
                                                            <p className="mb-1">Download on the</p>
                                                            <h5 className="mt-0 ">App store</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4  mt-3">
                                                <div className="store_btn  bg-white ">
                                                    <div className="row align-items-center">
                                                        <div className="col-2 offset-1">
                                                            <img src={apple} alt="apple logo" />
                                                        </div>
                                                        <div className="col-9">
                                                            <p className="mb-1">Get it on</p>
                                                            <h5 className="mt-0">Google Play</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="storeShop__img col-md-5">
                                <img src={mobile} class="img-fluid" alt="mobile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreShop
