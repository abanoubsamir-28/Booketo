import React from 'react'
import '../../fonts.css'
import { FaTwitter, FaFacebookSquare } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <footer className=" bg-dark">
                <div className="container">
                    <div className="row justify-content-center align-items-center py-2">
                        <div className="col-md-12 text-center py-2 ">
                            <h2 ><a className="ms-4 text-light text-decoration-none" href="google.com/">Booketo.com</a></h2>
                            <p className="menu my-3">
                                <Link className="mx-3  text-light text-decoration-none" to="/">Home</Link>
                                <Link className="mx-3  text-light text-decoration-none" to="/contactUs">Contact</Link>
                                <Link className="mx-3  text-light text-decoration-none" to="/getbooks">Books</Link>
                                <Link className="mx-3  text-light text-decoration-none" to="/register">Resister</Link>

                            </p>
                            <ul className="d-flex justify-content-center text-light fs-4">
                                <li className="list-unstyled"><a href="https://twitter.com" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
                                    <span className="text-light border mx-3 p-2 fs-6 rounded-circle"><FaTwitter /></span>
                                </a></li>
                                <li className="list-unstyled"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
                                    <span className="text-light border mx-3 p-2 fs-6 rounded-circle"><FaFacebookSquare /></span>
                                </a></li>
                                <li className="list-unstyled"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
                                    <span className="text-light border mx-3 p-2 fs-6 rounded-circle"><AiOutlineInstagram /></span>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <p className="text-light">
                                Copyright © 2021 All rights reserved | This template is made with <BsFillSuitHeartFill /> by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Booketo.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
