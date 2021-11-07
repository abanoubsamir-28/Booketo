import logo from "./../../assets/Landing/svg (1).svg"
import bgImg from './../../assets/Landing/1733 [Converted].webp';
import searchIcon from "./../../assets/Landing/search (1).svg"
import "./header.css"
import "./home.css"
import {  Col } from "react-bootstrap"
const Header = () => {
    return (
        <header className="header ">
            {/* <div className="container ">
                <div class="row align-items-center ">
                    <div className="col-4 mt-5">
                        <figure>
                            <img src={logo} alt="logo" />
                        </figure>
                        <h1 className="text-uppercase"> search your favorite book</h1>
                        <div>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </div>
                    </div>
                    <div className="header__img col-6"> 
                        <figur>
                            <img src={bgImg} alt="" />
                        </figur>
                    </div>
                </div>
            </div> */}

            <div className=" row m-0  position-relative">
                <Col className="col-2" >
                    <div className="header__content ms-5 ps-5 position-absolute">
                        <div className="ms-5">
                            <img src={logo} alt="logo" className="w-25" />
                        </div>
                        <h1 className="text-uppercase w-50 ms-5 mt-3"> search your favorite book</h1>
                        <input type="email" placeholder="name@example.com" className=" ms-4 form-control w-75 rounded-pill d-inline position-relative" />
                        <img src={searchIcon} className="searchIco position-absolute" alt="" />
                    </div>
                </Col>
                <div className="header__img col-md-10 d-sm-none d-md-block pe-0">
                    <div>
                        <img src={bgImg} alt="background" className="w-100 fit" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
