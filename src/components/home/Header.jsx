import "./header.css"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="header ">
                <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Home-2-Slider-1.jpg?v=1569215594" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-md-block text-black">
                                <h1 className='text-uppercase mb-2'>best book shop</h1>
                                <p className="ms-1 m-0 p-0 d-md-block">Get Newest And All Books.</p>
                                <Link to="/register" className="btn border-danger ms-1 mt-2 rounded-pill" > GET STARTED ...</Link>
                            </div>
                        </div>
                        <div class="carousel-item " data-bs-interval="1000000">
                            <img src="https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Home-2-Slider-2.png?v=1569062675" class="d-block w-100" alt="..." />
                            <div class="carousel-caption center text-end d-md-block text-black ">
                                <div className="d-flex align-items-end flex-column">
                                    <h1 className='text-uppercase mb-2 '>best book shop</h1>
                                    <p className=" m-0 p-0 d-md-block">Get Newest And All Books.</p>
                                        <Link to="/register" className="btn border-danger mt-2 rounded-pill" >
                                            GET STARTED ...</Link>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Home-2-Slider-3.jpg?v=1569215841" class="d-block w-100" alt="..." />
                            <div class="carousel-caption text-start d-md-block text-black">
                                <h1 className='text-uppercase mb-md-2'>best book shop</h1>
                                <p className="ms-1 m-0 p-0 d-md-block">Get Newest And All Books.</p>
                                <Link to="/register" className="btn border-danger ms-1 mt-2 rounded-pill">GET STARTED ..</Link>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <div className="bg-md-info text-black p-3">
                            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </div>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <div  className="bg-md-info text-black p-3">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </div>
                    </button>
                </div>
            </div>
        </header>

    )
}

export default Header
