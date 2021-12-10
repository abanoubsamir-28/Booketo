import author1 from "./../../assets/Landing/auth1.jfif"
import author2 from "./../../assets/Landing/auth2.jfif"
import author3 from "./../../assets/Landing/auth31.jpg"
import author4 from "./../../assets/Landing/auth4.jfif"
const Authors = () => {
    return (
        <div className="author mt-5">
            <div className="container p-5">
                <div className="author__title">
                    <h2 className=" ms-4 mb-5 text-center fw-bolder h1">Authors</h2>
                </div>
                <div className="row justify-content-center">
                    {/* start */}
                    <div className="col-lg-3 col-md-6 position-relative mt-3">
                        <div className="author__item position-relative">
                            <img src={author1} alt="author1" className="w-100 d-block" />
                            <div className="layer d-flex  justify-content-center align-items-end" >
                                <h5 className="bg-white w-75 mb-3 py-3 text-center">Agatha Christie </h5>
                            </div>
                        </div>
                    </div>
                    {/* start */}
                    <div className="col-lg-3 col-md-6 position-relative mt-3">
                        <div className="author__item position-relative">
                            <img src={author2} alt="author2" className="w-100 mb-4 d-block overflow-hidden" />
                            <div className="layer d-flex align-items-end justify-content-center" >
                                <h5 className="bg-white w-75 mb-3 py-3 text-center">Charles dickens</h5>
                            </div>
                        </div>
                    </div>
                    {/* start */}
                    <div className="col-lg-3 col-md-6 position-relative mt-3">
                        <div className="author__item position-relative">
                            <img src={author4} alt="author4" className="w-100" />
                            <div className="layer d-flex align-items-end justify-content-center" >
                                <h5 className="bg-white w-75 mb-3 py-3 text-center">Mark twain</h5>
                            </div>
                        </div>
                    </div>
                    {/* start */}
                    <div className=" col-lg-3 col-md-6 position-relative mt-3">
                        <div className="author__item position-relative">
                            <img src={author3} alt="author3" className="w-100 d-block " />
                            <div className="layer d-flex justify-content-center align-items-end " >
                                <h5 className="bg-white w-75 py-3 mb-3 text-center">Virginia woolf</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authors
