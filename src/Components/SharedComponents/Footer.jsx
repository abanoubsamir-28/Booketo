import React from 'react'
import '../../fonts.css'
import facebook from '../../assets/navbarFooter/facebook.svg'
import twitter from '../../assets/navbarFooter/twitter.svg'
import books from '../../assets/navbarFooter/books.svg'
function Footer() {
    return (
        <>
            <div className=" container-fluid bg-dark mt-5  ">
                <div className="container-fluid row pt-5">
                    <div className="col-sm-12 col-md-2">
                        <h6 className="Footerroboto">Get started</h6>
                        <p className="footerelements pt-2">Register</p>
                        <p className="footerelements">Download App</p>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <h6 className="Footerroboto">Get help</h6>
                        <p className="footerelements pt-2"> How it works</p>
                        <p className="footerelements">FAQ</p>
                        <p className="footerelements pt-2">Help desk</p>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <h6 className="Footerroboto">About us</h6>
                        <p className="footerelements pt-2"> Company</p>
                        <p className="footerelements">Careers</p>
                        <p className="footerelements pt-2">Press</p>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <h6 className="Footerroboto">Partnership</h6>
                        <p className="footerelements pt-2"> Brands</p>
                        <p className="footerelements">Retail</p>
                        <p className="footerelements pt-2">Contact sales</p>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <img src={facebook} alt="" />
                        <img src={twitter} className="ms-5" alt="" />
                        <small className="footerelements pt-5">©Designed by"Bishoy Gadalla"</small>
                        <small className="footerelements pt-2">©Implemented by"Booketo Team"</small>
                    </div>
                    <div className="col-sm-12 col-md-2 booksimg container-fluid ">
                        <img src={books} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
