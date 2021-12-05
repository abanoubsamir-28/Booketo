import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from "react-slick";
import './slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SliderBook() {
    const key = "AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E"
    const [result, setResult] = useState(null)
    useEffect(() => {
        getBooks()

    }, [])

    const getBooks = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=stories&orderBy=newest&key=${key}`)
            .then(data => {
                setResult(data?.data?.items);

            }).catch((error) => {
                return error
            })
    }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    }
    return (
        <div >
            {result ?
                <div className="slider container px-5 ">
                    <h2 className='text-center my-4 '> Newest Book </h2>
                    <Slider {...settings}>
                        {result.map((book, index) => (
                            <div key={index}>
                                <img
                                    className="d-block  mx-auto my-5"
                                    src={book?.volumeInfo?.imageLinks !== undefined ? book?.volumeInfo?.imageLinks.thumbnail : "https://via.placeholder.com/150"}
                                    alt="First slide"
                                />
                            </div>
                        
                        ))}
                    </Slider>
                </div>
                : ''
            }
        </div>
    );
}





export default SliderBook