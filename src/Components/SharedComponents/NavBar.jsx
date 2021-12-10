import React, { useState } from 'react'
import '../../fonts.css'
import logo from '../../assets/navbarFooter/svg (1).png'
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { BsCart4 } from 'react-icons/bs';
import { useSelector } from 'react-redux'
import userIco from '../../assets/userNav.png'

function NavBar() {
    const res = useSelector(state => state.cartStore.CartQuantity)
    const [logged, setlogged] = useState(true);
    function makefalse() {
        setlogged(false)
    }
    return (
        <>
            {
                <div>
                    <nav className="grad navbar navbar-expand-lg navbar-dark bg-light navbar">
                        <div className="container-fluid">
                            <li className="nav-item w-25 list-unstyled">
                                <Link to='/newsfeed' className="ms-auto w-25 btn m-0 p-0 " >
                                    <img src={logo} className="w-75 ms-5" alt="" />
                                </Link>
                            </li>
                            <button className="me-5 pe-5 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon "></span>
                            </button>
                            <div className="ms-5 ps-4 collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className=" ms-5 navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item ">
                                        <Link to="/newsfeed" className="textt btn active pt-3 me-3 ms-5 ps-5" >News feed</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/getbooks" className="textt btn active pt-3 me-3" >All Books</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/contactus' className="textt btn active pt-3  me-3 " > Contact Us </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/publishers" className="textt btn active pt-3 me-3" >Book Stores</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/cart' className=" btn active pt-3 me-3" ><span >
                                            <BsCart4 /> <Badge pill className="bg-brown">{res ? res : 0}</Badge>
                                            <span className="visually-hidden">unread messages</span>
                                        </span></Link>
                                    </li>

                                    <li className="nav-item w-25">
                                        <Link to='/userprofile' className="ms-auto w-25 btn m-0 p-0 " >
                                            <img src={userIco} className=" profilephoto" alt="" />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={makefalse} to='/' className="textt btn active  me-3 btn-borde rounded-pill" >Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav>
                </div >
            }
        </>
    )
}

export default NavBar
