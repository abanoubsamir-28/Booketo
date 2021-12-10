import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import emptyCart from './../../assets/cart/empty_cart.png'
function EmptyCart() {
    return (
        <div>
            <div className=" text-center mt-2">
                {/* <img className="w-50 d-block m-auto " src={emptyCart} alt="empty basket" /> */}
                <Link to='/getbooks' className="btn btn-trans rounded-pill">shopping now <FaArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default EmptyCart
