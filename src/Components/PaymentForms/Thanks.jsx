import React from 'react'
import { Link } from 'react-router-dom'
// import thanks from '../../assets/Thanks/41cC17LvI4L._SL500_.jpg'
import NavBar from '../SharedComponents/NavBar';
import { FaArrowRight } from 'react-icons/fa';
import thanks from "../../assets/thanks.jpeg"
function Thanks() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5 text-center py-5 mb-5">
                        <div>
                            <img className='w-100' src={thanks} alt="" />
                        </div>
                        <Link to='/getbooks' className="btn btn-trans  rounded-pill my-5">shopping now <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thanks
