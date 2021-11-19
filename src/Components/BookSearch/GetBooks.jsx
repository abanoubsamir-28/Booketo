
import React, { useState } from "react";
import axios from 'axios';
import 'boxicons';
import BookCard from "./BookCard";
import BookPlaceHolder from "./BookPlaceHolder";
function GetBooks() {
    const [book, setBook] = useState('');
    const [search, setsearch] = useState('')
    const [cat, setcat] = useState('')
    const [result, setResult] = useState([]);
    // eslint-disable-next-line
    const [apiKey, setApiKey] = useState("AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E")
    const change = () => {
        let select = document.getElementById('filter')
        let option = select.options[select.selectedIndex]
        setcat(option.value + ":")
        if (option.value === "choose") { return true }
        else { return false }
    }

    function searchItem(e) {
        var newInp = e.target.value
        if (cat === "") {
            setBook(newInp)
        } else {
            setBook(newInp + "+")
            setsearch(newInp)
        }
    }

    function handleChange(event) {
        if (event.target.value) {
            const book = event.target.value;
            setBook(book + "+");
        } else {
            alert('Write something in the search first.')
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + cat + search + "&key=" + apiKey + "&maxResults=40")
            .then(data => {
                setResult(data.data.items);
            }).catch((error) => {
                return error
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="card-header main-search">
                <div className="row justify-content-start align-items-center">
                    <div className="col-12 col-md-3 col-xl-3">
                        <input className="AutoFocus form-control" placeholder="Type something..." type="text" placeholder="write" onChange={searchItem} />

                    </div>
                    <div className="d-flex text-center my-1 col-12 col-md-3 col-xl-3">
                        <button type="submit" className="mx-2 d-flex align-items-center btn btn-outline-info search-btn" >
                            <box-icon name='search' color='#26A3A6' ></box-icon> Search
                        </button>
                        <select id="filter" onChange={change} className="mx-2 d-flex align-items-center btn btn-outline-info search-btn">
                            <option value="">choose</option>
                            <option value="intitle">Title</option>
                            <option value="inauthor">Author</option>
                            <option value="inpublisher">Publishing</option>
                            <option value="subject">Subject</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <BookCard result={result} />
                    <BookPlaceHolder />
                </div>
            </div>
        </form >
    )
}

export default GetBooks

