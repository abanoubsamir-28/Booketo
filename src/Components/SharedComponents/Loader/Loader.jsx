import React from 'react'
import './loader.css'
const Loader = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <h1 class="loader-title">Loading</h1>
            <div class="rainbow-marker-loader"></div>
        </div>
    )
}

export default Loader
