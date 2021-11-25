import React from 'react'
import Reviews from '../bookProfile/Reviews'
import Orders from './Orders'
import StoreBooks from './StoreBooks'
function BookStore() {
    return (
        <div>
            <StoreBooks/>
            <Reviews/>
            <Orders />
        </div>
    )
}

export default BookStore
