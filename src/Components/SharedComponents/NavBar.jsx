import React, { useState } from 'react'
import '../../fonts.css'
import logo from '../../assets/navbarFooter/svg (1).svg'
import { Link } from 'react-router-dom';


function NavBar() {
    // eslint-disable-next-line
    const [logged, setlogged] = useState(true);
    return (
        <>
            {
                logged === true
                    ?
                    <div>
                        <nav className="grad navbar navbar-expand-lg navbar-light navbar">
                            <div className="container-fluid ">
                                <img src={logo} className="logo" alt="" />
                                <div className="ms-5 ps-5 collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto ms-5 ps-5 mb-2 mb-lg-0">
                                        <li className="nav-item ms-5 ps-5">
                                            <Link to="/newsfeed" className="textt btn active ms-5 ps-5  me-3" >Home</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/getbooks" className="textt btn active  me-3" >Books</Link>

                                        </li>


                                        <li className="nav-item">
                                            <Link to='/contactus' className="textt btn active  me-3" >Contact Us </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/' className="textt btn active  me-3" >Logout</Link>
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
