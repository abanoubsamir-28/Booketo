import React from 'react'
import error from '../../../assets/PageNotFound/255-2550644_404-not-found-arc-beaver-image-cartoon-hd.png'
import '../../UserProfile/userprofile.css'
function NotFound() {
    return (
        <div className="text-center pt-5 pb-5">
            <img src={error} className="pt-5" />
            <h1 className="pt-3 username">Page Not Found</h1>
            <h5 className="text-secondary pt-2 pb-5">We are sorry , the page you requested could not be found.please go back to home page </h5>
            <button type="button" className="btn btn-secondary"><a>Go To Home Page</a></button>
        </div>
    )
}

export default NotFound
