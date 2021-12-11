import "./header.css"
import { Link } from "react-router-dom";
import home1 from "./../../assets/Landing/Home1.jpg"
import home2 from "./../../assets/Landing/Home2.png"
import home3 from "./../../assets/Landing/Home3.jpg"
import { BiRightArrowAlt } from 'react-icons/bi'
const Header = () => {
    return (
        <header>
            <div className="header ">
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={home1} className="d-block w-100" alt="home1" />
                            <div className="carousel-caption d-md-block text-black">
                                <h1 className='text-uppercase mb-2'>best book shop</h1>
                                <p className="ms-1 m-0 p-0 d-md-block">Get Newest And All Books.</p>
                                <Link to="/register" className="btn ms-1 mt-2 rounded-pill" >Start <BiRightArrowAlt className="fw-bold fs-4" /></Link>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src={home2} className="d-block w-100" alt="home2" />
                            <div className="carousel-caption  text-end d-md-block text-black ">
                                <div className="center d-flex align-items-end flex-column">
                                    <h1 className='text-uppercase mb-2 '>best book shop</h1>
                                    <p className=" m-0 p-0 d-md-block">Get Newest And All Books.</p>
                                    <Link to="/register" className="btn mt-2 rounded-pill" >Start <BiRightArrowAlt className="fw-bold fs-4" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={home3} className="d-block w-100" alt="home3" />
                            <div className="carousel-caption text-start d-md-block text-black">
                                <h1 className='text-uppercase mb-md-2'>best book shop</h1>
                                <p className="ms-1 m-0 p-0 d-md-block">Get Newest And All Books.</p>
                                <Link to="/register" className="btn ms-1 mt-2 rounded-pill">Start <BiRightArrowAlt className="fw-bold fs-4" /></Link>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <div className="text-black p-3">
                            <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </div>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <div className="text-black p-3">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </div>
                    </button>
                </div>
            </div>
        </header>

    )
}

export default Header
