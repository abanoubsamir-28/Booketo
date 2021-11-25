import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import Loader from '../SharedComponents/Loader/Loader'
import ReactStars from "react-rating-stars-component";
function StoreBooks() {
    const [books, setbooks] = useState([])
    const [publisher, setPublisher] = useState('Bloomsbury Publishing')
    useEffect(() => {
        getBooks()
    }, [])
    const getBooks = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=+inpublisher:${publisher}&key=AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E&maxResults=40`)
            .then(res => { setbooks(res.data.items) })
            .catch(error => { console.log(error) })
        console.log(books)
    }
    return (
        <div>
            {books ? (
                <div className="container mt-3">
                    <div className="row">
                        {books.map((book, index) => (
                            <div className=" col-xl-2 col-md-3 col-sm-6 py-4" key={index}>
                                <Card className="h-100 book__card__bookSearch">
                                    <Card.Img variant="top" className="h-50"
                                        src={book.volumeInfo.imageLinks !== undefined ?
                                            book.volumeInfo.imageLinks.thumbnail
                                            : "https://via.placeholder.com/150"} alt={book.title} />
                                    <Card.Body className="book__card__bookSearch">
                                        <Card.Title>{book.volumeInfo.title.length > 10 ? book.volumeInfo.title.substring(0, 10) + "..." : book.volumeInfo.title}</Card.Title>
                                        <Card.Text>
                                            <div id="where-to-render">
                                                {book.volumeInfo.averageRating !== undefined ?
                                                    <div className='d-flex align-items-start flex-column'>
                                                        Rating:
                                                        <ReactStars
                                                            value={book.volumeInfo.averageRating}
                                                            count={5}
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
                                                            size={24}
                                                            isHalf={true}
                                                            activeColor="#ffd700"
                                                        />
                                                    </div>
                                                }
                                            </div>
                                            <Link to={`/${book.id}`} className="btn btn btn-danger mt-2">More Details</Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            )
                : <Loader />}
        </div >
    )
}

export default StoreBooks
