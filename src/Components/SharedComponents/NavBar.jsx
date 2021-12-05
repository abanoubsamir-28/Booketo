import React, { useState } from 'react'
import '../../fonts.css'
import logo from '../../assets/navbarFooter/svg (1).svg'
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { BsCart4 } from 'react-icons/bs';
import { useSelector } from 'react-redux'


function NavBar() {
    // eslint-disable-next-line
    const res = useSelector(state => state.cartStore.CartQuantity)
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


                                        <li className="nav-item">
                                            <Link to='/getbooks' className=" me-3 text-light nav-link" >User Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/notfound' className=" me-3 text-light nav-link" >Page Not Found</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="/wishlist" className=" me-3 text-light nav-link" >Wish List</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/cart' className=" me-3 text-light nav-link" >
                                                <span >
                                                    <BsCart4 /> <Badge pill bg="danger">{res ? res : 0}</Badge>
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </Link>
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
