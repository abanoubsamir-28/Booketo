import axios from 'axios';
import { nodeName } from 'jquery';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
function NewestBooks() {
    const ratingChanged = (newRating) => {
        return newRating;
    };
    const key = "AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E"
    const [result, setResult] = useState("")
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=time&orderBy=newest&key=${key}`)
            .then(data => {
                setResult(data?.data?.items);

            }).catch((error) => {
                return error
            })
    }, [])
    return (
        <>
            {result ?
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <div className="d-none d-lg-block d-xl-block my-3 card bg-dark  text-white align-items-center">
                                <img src="https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2018/11/products-1.2.jpg" className="card-img" alt="..." />
                                <div className="px-5 card-img-overlay py-5 d-flex align-items-center">
                                    <div className="card-text text-left w-50">
                                        <h2 className="card-title fw-bold pink__header">Harvy Rickets Detective Collection</h2>
                                        <p className="py-2">
                                            Featuring the first three Novellas in the series this is perfect for lovers of Detectives.
                                        </p>
                                        <button className="btn px-4 call-to-action rounded-pill">find more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {result.map((book, index) => (
                            <div className=" col-xl-2 col-md-3 col-sm-6 py-4" key={index}>
                                <Card className="h-100 book__card__bookSearch text-center border-0">
                                    <Card.Img variant="top" className="h-75" src={book?.volumeInfo?.imageLinks !== undefined ? book?.volumeInfo?.imageLinks.thumbnail : "https://via.placeholder.com/150"} alt={book?.title} />
                                    <Card.Body className="book__card__bookSearch">
                                        <Card.Title>{book?.volumeInfo?.title.length > 10 ? book?.volumeInfo?.title.substring(0, 10) + "..." : book?.volumeInfo?.title}</Card.Title>
                                        <Card.Text className="text-center">
                                            <div id="where-to-render">
                                                {book?.volumeInfo?.averageRating !== undefined ?
                                                    <div className='d-flex align-items-center flex-column'>
                                                        <ReactStars
                                                            value={book?.volumeInfo?.averageRating}
                                                            count={5}
                                                            onChange={ratingChanged}
                                                            size={24}
                                                            isHalf={true}
                                                            activeColor="#ffd700"
                                                        />
                                                    </div>
                                                    :
                                                    <div className='d-flex align-items-center flex-column'>
                                                        <ReactStars
                                                            count={5}
                                                            onChange={ratingChanged}
                                                            size={24}
                                                            isHalf={true}
                                                            activeColor="#ffd700"
                                                        />
                                                    </div>
                                                }
                                            </div>
                                        </Card.Text>
                                        <Link to={`/${book?.id}`} className="btn btn-trans stretched-link p-2 mt-2">More Details <AiOutlineArrowRight /></Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                :
                ""}
        </>
    )
}

export default NewestBooks
