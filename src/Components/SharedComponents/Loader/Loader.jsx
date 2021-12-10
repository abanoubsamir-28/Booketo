import React from 'react'
import './loader.css'
const Loader = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <h1 className="loader-title">Loading</h1>
            <div className="rainbow-marker-loader"></div>
        </div>
    )
}

export default Loader
