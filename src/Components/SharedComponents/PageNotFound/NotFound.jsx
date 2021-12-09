import React from 'react'
import error from '../../../assets/PageNotFound/2676386.jpg'
import '../../UserProfile/userprofile.css'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
function NotFound() {
    return (
       <>
       <NavBar/>
        <div className="text-center  pb-5">
            <img src={error} className=" w-50" alt="page not fuound" />
            <h1 className="pt-3 username">Page Not Found</h1>
            <h5 className="text-secondary pt-2 pb-5">We are sorry , the page you requested could not be found.please go back to home page. </h5>
            <Link to="/newsfeed"  className="btn btn-border rounded-pill  ms-4 ">GO Home</Link>
        </div>
       </>
    )
}

export default NotFound
