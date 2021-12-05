import React, { useState } from 'react'
import '../../fonts.css'
import logo from '../../assets/navbarFooter/svg (1).svg'
import profile from '../../assets/UserProfile/464-4641403_png-file-user-icon-circle-svg.png'
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
                        <nav className="grad navbar navbar-expand-lg navbar-light navbar">
                            <div className="container-fluid  ">
                                <img src={logo} className="logo ms-5 me-5 " alt="" />
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon "></span>
                                </button>
                                <div className=" ms-5 ps-5 collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="formargin navbar-nav me-auto ms-5 ps-5 mb-2 mb-lg-0">
                                        <li className="nav-item ms-5 ps-5">
                                            <Link to="/newsfeed" className="textt btn active pt-3 me-3 ms-5 ps-5" >Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/getbooks" className="textt btn active pt-3 me-3" >Books</Link>


                                        
                                        </li>


             
                                        <li className="nav-item">
                                            <Link to='/contactus' className="textt btn active pt-3  me-3 " >Contact Us </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to='/settings' className="textt btn active pt-3  me-3 " > Settings </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/' className="textt btn active pt-3 me-5" >Logout</Link>
                                        </li>
                                        <li className="nav-item w-25">
                                            <Link to='/userprofile' className=" w-25 btn m-0 p-0 " >
                                                <img src={profile} className="profilephoto" />
                                            </Link>
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
                                </div>
                            </div>
                        </nav>
                    </div>
                    :
                    <nav className="navbar grad navbar-expand-lg navbar-light navbar">
                        <div className="container-fluid">
                            <img src={logo} className="logo ms-5" alt="" />
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className=" collapse navbar-collapse ms-5 ps-5" id="navbarSupportedContent">
                                <ul className=" ms-5 ps-5 navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className=" nav-item">
                                        <Link to="/login" className="ms-5  btn textt" type="submit">Log In </Link>
                                    </li>
                                    <li className=" nav-item">
                                        <Link to="/register" className="ms-3 btn textt" type="submit">Register</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>

            }

        </>
    )
}

export default NavBar
