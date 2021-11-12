import logo from "./../../assets/Landing/svg (1).svg"
import bgImg from './../../assets/Landing/1733 [Converted].webp';
import searchIcon from "./../../assets/Landing/search (1).svg"
import "./header.css"
import "./home.css"
const Header = () => {
    return (
        <header className="header">
            <div class="card mb-3" >
                <div class="row g-0 align-items-center justify-content-between">
                    <div class="header__content col-sm-3 ">
                        <div class="card-body  position-relative">
                            <img src={logo} alt="logo" className="header__logo img-fluid" />
                            <h1 className="card-text text-uppercase my-3"> Find your favorite books</h1>
                            <div className=" search_input row align-items-baseline justify-content-center ">
                                <input type="text" placeholder="Search your book" className="col-10 form-control rounded-pill d-inline" />
                                <div className="col-2">
                                    <img src={searchIcon} alt="search icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header__img col-sm-9">
                        <img src={bgImg} class="img-fluid rounded-start" alt="background" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
