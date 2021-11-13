import React, { useState } from 'react'
import '../../fonts.css'
import logo from '../../assets/navbarFooter/svg (1).svg'


function NavBar() {

    const [logged, setlogged] = useState(true);
    return (
        <>
            {
                logged === true
                    ?
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light navbar">
                            <div className="container-fluid">
                                <img src={logo} className="logo" alt="" />
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active text-light me-3" aria-current="page" href="#">News Feed</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className=" me-3 text-light nav-link" href="#">All Books</a>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="  me-3 text-light nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                User Profile
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                {/* <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className=" me-3 text-light nav-link" href="#">Wish List</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className=" me-3 text-light nav-link" href="#">Cart</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-dark text-light" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                    :
                    <div className="container-fluid ">
                        <nav className="navbar navbar-expand-lg navbar-light navbar">
                            <div className="container-fluid">
                                <img src={logo} className="logo" alt="" />
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className=" ms-5 ps-5 navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className=" nav-item">
                                            <button className="ms-5 btn btn-outline-dark text-light" type="submit">Log In </button>
                                        </li>
                                        <li className=" nav-item">
                                            <button className="ms-5 btn btn-outline-dark text-light" type="submit">Register</button>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
            }

        </>
    )
}

export default NavBar
