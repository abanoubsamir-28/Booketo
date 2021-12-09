import React from 'react'
import { Link } from 'react-router-dom'
import thanks from '../../assets/Thanks/41cC17LvI4L._SL500_.jpg'
import EmptyCart from './../Cart/EmptyCart';
function Thanks() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 text-center py-5">
                    <h1>Thank You!</h1>
                    <EmptyCart />
                </div>
            </div>
        </div>
    )
}

export default Thanks
