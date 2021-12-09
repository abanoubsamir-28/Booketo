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
    function makefalse() {
        setlogged(false)
    }
    return (
        <>
            {

                <div>
                    <nav className="grad navbar navbar-expand-lg navbar-light navbar">
                        <div className="container-fluid  ">
                            <img src={logo} className="logo ms-5 me-5 " alt="" />
                            <button className="me-5 pe-5 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon "></span>
                            </button>
                            <div className="collapse navbar-collapse ps-5 " id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="ms-auto nav-item ">
                                        <Link to="/newsfeed" className="textt btn active pt-3 me-3 " >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/getbooks" className="textt btn active pt-3 me-3" >Books</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/contactus' className="textt btn active pt-3  me-3 " > Contact Us </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to='/settings' className="textt btn active pt-3  me-3 " > Settings </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/wishlist" className="textt btn active pt-3 me-3" >Wish List</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={makefalse} to='/' className="textt btn active pt-3 me-3" >Logout</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/cart' className="textt btn active pt-3 me-3" ><span >
                                            <BsCart4 /> <Badge pill bg="danger">{res ? res : 0}</Badge>
                                            <span className="visually-hidden">unread messages</span>
                                        </span></Link>
                                    </li>
                                    <li className="nav-item w-25">
                                        <Link to='/userprofile' className=" w-25 btn m-0 p-0 " >
                                            <img src={profile} className="profilephoto " />
                                        </Link>
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
