import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function EmptyCart() {
    return (
        <div>
            <div className=" text-center py-5">
                <img className="w-25 d-block m-auto mt-4" src="https://travelescapemaldives.biz/jpaywebsite/img/empty_cart.png" alt="empty basket" />
                <Link to='/getbooks' className="btn btn-danger mt-5 m-auto">shopping now <FaArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default EmptyCart
