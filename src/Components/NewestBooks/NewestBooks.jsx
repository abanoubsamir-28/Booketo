import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Badge, Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

function NewestBooks() {
    const ratingChanged = (newRating) => {
        return newRating;
    };
    const key = "AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E"
    const [result, setResult] = useState("")
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=clovers&orderBy=newest&key=${key}`)
            .then(data => {
                setResult(data?.data?.items);
                console.log(result)
            }).catch((error) => {
                return error
            })
    }, [])
    return (
        <>
            {result ?
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1 className="pink__header pt-2">
                                check what's <Badge bg="danger">New</Badge>
                            </h1>
                            <img className="w-75" src="https://static.vecteezy.com/system/resources/previews/004/550/486/large_2x/new-book-shop-grand-opening-background-illustration-free-vector.jpg" alt="" />
                        </div>
                        {result.map((book, index) => (
                            <div className=" col-xl-2 col-md-3 col-sm-6 py-4" key={index}>
                                <Card className="h-100 book__card__bookSearch">
                                    <Card.Img variant="top" className="h-50" src={book?.volumeInfo?.imageLinks !== undefined ? book?.volumeInfo?.imageLinks.thumbnail : "holder.js/100px160"} alt={book?.title} />
                                    <Card.Body className="book__card__bookSearch">
                                        <Card.Title>{book?.volumeInfo?.title.length > 10 ? book?.volumeInfo?.title.substring(0, 10) + "..." : book?.volumeInfo?.title}</Card.Title>
                                        <Card.Text>
                                            <div id="where-to-render">
                                                {book?.volumeInfo?.averageRating !== undefined ?
                                                    <div className='d-flex align-items-start flex-column'>
                                                        Rating:
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
                                                    <div className='d-flex align-items-start flex-column'>
                                                        Rating:
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
                                            <Link to={`/${book?.id}`} className="btn btn btn-danger mt-2">More Details</Link>
                                        </Card.Text>
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
