import React from 'react'
import Readingchallenge from '../../SharedComponents/Readingchallenge/Readingchallenge'
import Wishlist from '../../SharedComponents/wishlist/Wishlist'
import './newsfeedaside.css'
const Newfeedaside = () => {
    return (
        <div className="col-md-3 newsfeed-aside shadow my-2 mx-5">
            <Readingchallenge />
            <Wishlist/>
        </div >
    )
}

export default Newfeedaside
