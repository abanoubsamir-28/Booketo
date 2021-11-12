import "./authors.css"
import author1 from "./../../assets/Landing/ORIGINALtolstoy5.webp"
import author2 from "./../../assets/Landing/566.webp"
import author3 from "./../../assets/Landing/J. K. Rowling.webp"
import author4 from "./../../assets/Landing/2831730-lewis.webp"
import author5 from "./../../assets/Landing/22393.webp"
const Authors = () => {
    return (
        <div className="author mt-5 p-5">
            <div className="container">
                <div className="author__title ps-5">
                    <h2 className="ps-5 ms-4 mb-5">AUTHORS</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <img src={author1} alt="author1" className="w-100" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <img src={author2} alt="author2" className="w-100 mb-4 " />
                    </div>
                    <div className="focuse col-lg-2 col-md-4 col-sm-12  ">
                        <img src={author3} alt="author3" className="w-100 p-2 " />
                        <h5 className=" text-center mt-5 ">J. K. Rowling</h5>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <img src={author4} alt="author4" className="w-100" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <img src={author5} alt="author5" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authors
