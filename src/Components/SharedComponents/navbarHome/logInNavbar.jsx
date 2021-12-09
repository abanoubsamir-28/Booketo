import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../../assets/navbarFooter/svg (1).svg'

function logInNavbar() {
    return (
        <div>
            <nav className="navbar grad navbar-expand-lg navbar-light navbar">
                <div className="container-fluid">
                    <img src={logo} className="logo ms-5" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-5 ps-5" id="navbarSupportedContent">
                        <ul className=" ms-5 ps-5 navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className=" nav-item  ">
                                <Link to="/login" className="ms-5 rounded-pill btn-borde border-2 btn " type="submit">Log In </Link>
                            </li>
                            <li className="me-5 nav-item">
                                <Link to="/register" className="ms-3 rounded-pill btn-borde border-2 btn " type="submit">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default logInNavbar
