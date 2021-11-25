import React from 'react'
import { useState } from 'react'
import { BsFileEarmarkArrowDownFill, BsFileEarmarkArrowUpFill } from 'react-icons/bs'
// import { Link } from 'react-router-dom'
import './readingchallenge.css'
const Readingchallenge = () => {
    const [noReads, setnoReads] = useState(true)
    const [books, setbooks] = useState(0)
    const increaseReads = () => {
        setbooks(books + 1)
        setnoReads(false)
    }
    const decreaseReads = () => {
        if (books == 0) {
            setnoReads(false);
        } else {
            setbooks(books - 1);
        }
    }
    return (
        <div className="card reading-challenge text-white bg-primary mb-3 w-100 my-5">
            <div className="card-header text-center">Reading Challenge
                {noReads && <p className="text-center text-danger fw-bold py-1">Time to Read More Books !
                    {/* <Link to="/login">Search Now</Link> */}
                </p>}</div>
            <div className="card-body row justify-content-center">
                <button className="text-white increase btn fs-1 col-md-2 p-1" onClick={increaseReads}><BsFileEarmarkArrowUpFill /></button>
                <div className="card__body__content col-md-6 mx-2">
                    <h2 className="text-center">{books}</h2>
                    <p className="card-text text-center">Books</p>
                </div>
                <button className="text-white decrease btn fs-1 col-md-2 p-0" disabled={noReads} onClick={decreaseReads}><BsFileEarmarkArrowDownFill /></button>
            </div>
        </div >
    )
}

export default Readingchallenge
