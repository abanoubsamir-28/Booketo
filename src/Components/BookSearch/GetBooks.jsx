
import React, { useState } from "react";
import axios from 'axios';
import 'boxicons';
import ReactStars from "react-rating-stars-component";
import { Card } from 'react-bootstrap';

function GetBooks() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    // eslint-disable-next-line
    const [apiKey, setApiKey] = useState("AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E")
    const ratingChanged = (newRating) => {
        return newRating;
    };
    function handleChange(event) {
        const book = event.target.value;
        setBook(book);
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
            .then(data => {
                console.log(data.data.items);
                setResult(data.data.items);
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="card-header main-search">
                <div className="row justify-content-start align-items-center">
                    <div className="col-12 col-md-3 col-xl-3">
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />
                    </div>
                    <div className="text-center my-1 col-12 col-md-3 col-xl-3">
                        <button type="submit" className="d-flex align-items-center justify-content-center btn btn-outline-info search-btn" >
                            <box-icon name='search' color='#26A3A6' ></box-icon> Search
                        </button>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    {result.map(book => (
                        <div className="col-xl-2 col-md-3 col-sm-6">
                            <Card style={{ 'marginTop': '10px' }}>

                                <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />
                                <Card.Body>
                                    <h5 className="card-title">{book.volumeInfo.title.length > 10 ? book.volumeInfo.title.substring(0, 10) + "..." : book.volumeInfo.title}</h5>
                                    <p id="where-to-render">
                                        {book.volumeInfo.averageRating !== undefined ?
                                            <p className='d-flex align-items-center'>
                                                Rating:
                                                <ReactStars
                                                    value={book.volumeInfo.averageRating}
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    isHalf={true}
                                                    activeColor="#ffd700"
                                                />
                                            </p>
                                            :
                                            <p className='d-flex align-items-center'>
                                                Rating:
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    isHalf={true}
                                                    activeColor="#ffd700"
                                                />
                                            </p>

                                        }

                                        <button className="btn btn btn-danger mx-3">More Details</button>
                                    </p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </form>

    )
}

export default GetBooks

