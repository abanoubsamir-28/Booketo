import React from 'react'
import { Link } from 'react-router-dom'
import thanks from '../../assets/Thanks/41cC17LvI4L._SL500_.jpg'
function Thanks() {
    return (
        <div>
            <div className="text-center pt-5">
                <h2>Thanks For Visiting Us</h2>
            <img src={thanks} className="mx-5 "/>
            <h6><Link to="/getbooks" className=" nav-link p-0">Continue Shopping  </Link></h6>
            </div>
        </div>
    )
}

export default Thanks
