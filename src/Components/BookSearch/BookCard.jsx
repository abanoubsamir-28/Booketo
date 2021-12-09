import React from 'react'
import { Card } from 'react-bootstrap';
import '../bookProfile/bookprofile.css'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
function BookCard(props) {
    const result = props.result
    const ratingChanged = (newRating) => {
        return newRating;
    };
    return (
        result.map((book, index) => (
            <div className=" col-xl-2 col-md-3 col-sm-6 py-4" key={index}>
                <Card className="h-100 book__card__bookSearch text-center position-relative">
                    <Card.Img variant="top" className="h-100" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : "holder.js/100px160"} alt={book.title} />
                    <div className="card-button-hov position-absolute">
                        <Link to={`/${book?.id}`} className="btn btn-danger stretched-link mt-2 ">More Details <AiOutlineArrowRight /></Link>
                    </div>

                {/* <Card className="h-100 book__card__bookSearch">
                    <Card.Img variant="top" className="h-50" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : "holder.js/100px160"} alt={book.title} /> */}

                {/* <Card className="h-100 book__card__bookSearch">
                    <Card.Img variant="top" className="h-50" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : 
                        "https://via.placeholder.com/150"} alt={book.title} /> */}

                    <Card.Body className="book__card__bookSearch">
                        <Card.Title>{book.volumeInfo.title.length > 10 ? book.volumeInfo.title.substring(0, 10) + "..." : book.volumeInfo.title}</Card.Title>
                        <Card.Text>
                            <div id="where-to-render">
                                {book.volumeInfo.averageRating !== undefined ?
                                    <div className='d-flex align-items-center flex-column'>
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
                    </Card.Body>
                </Card>
            </div>
        ))
    )
}

export default BookCard
