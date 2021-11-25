import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-9 text-center py-5">
                    <p>
                        Your cart is empty  start
                    </p>
                    <Link to='/getbooks' className="btn btn-danger">shopping now <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
