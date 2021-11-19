import React from 'react'
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

function BookCard(props) {
    const result = props.result
    const ratingChanged = (newRating) => {
        return newRating;
    };
    return (
        result.map((book, index) => (
            <div className="col-xl-2 col-md-3 col-sm-6" key={index}>
                <Card style={{ 'marginTop': '10px' }}>
                    <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />
                    <Card.Body>
                        <h5 className="card-title">{book.volumeInfo.title.length > 10 ? book.volumeInfo.title.substring(0, 10) + "..." : book.volumeInfo.title}</h5>
                        <div id="where-to-render">
                            {book.volumeInfo.averageRating !== undefined ?
                                <div className='d-flex align-items-start flex-column'>
                                    Rating:
                                    <ReactStars
                                        value={book.volumeInfo.averageRating}
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
                            <button className="btn btn btn-danger mx-3">More Details</button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        ))
    )
}

export default BookCard
