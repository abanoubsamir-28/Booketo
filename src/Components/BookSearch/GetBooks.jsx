import React, { useState } from "react";
import axios from 'axios';
import BookCard from "./BookCard";
import { BsSearch } from "react-icons/bs";
import NewestBooks from "../NewestBooks/NewestBooks";
import Pagination from "../BookStore/Pagination";
import NavBar from "../SharedComponents/NavBar";

function GetBooks() {
    const [book, setBook] = useState('');
    const [search, setsearch] = useState('')
    const [cat, setcat] = useState('')
    const [result, setResult] = useState([]);
    const [books, setbooks] = useState([])
    const [publisher] = useState('Bloomsbury Publishing')
    const [currentPage, setcurrentPage] = useState(1)
    const [booksPerPage] = useState(10)
    //Get cuurent books
    //Change page

    // eslint-disable-next-line
    const [apiKey] = useState("AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E")

    const change = () => {
        let select = document.getElementById('filter')
        let option = select.options[select.selectedIndex]
        setcat(option.value + ":")
        if (option.value === "choose") { return true }
        else { return false }
    }
    function searchItem(e) {
        // var newInp = 
        if (cat === "") {
            setBook(e.target.value)
        } else {
            setBook(e.target.value + "+")
            setsearch(e.target.value)
        }
    }
    const paginate = (pageNumber) => {
        setcurrentPage(pageNumber)
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}${cat}${search}&key=${apiKey}&maxResults=40`)
            .then(data => {
                setResult(data.data.items);
            }).catch((error) => {
                return error
            })
    }
    const indexOfLastBook = currentPage * booksPerPage
    const indexOfFirstBook = indexOfLastBook - booksPerPage
    const currentPost = result.slice(indexOfFirstBook, indexOfLastBook)
    return (

        <div>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <div className="card-header main-search bg-transparent border-secondary">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-3 col-xl-3">
                            <input className="AutoFocus form-control rounded-pill" placeholder="Type something..." type="text" onChange={searchItem} />
                        </div>
                        <div className="d-flex text-center my-1 col-12 col-md-3 col-xl-3">
                            <button type="submit" className="mx-4 btn px-4 btn-trans rounded-pill" >
                                <BsSearch /> Search
                            </button>
                            <select id="filter" onChange={change} className="btn px-4 btn-trans rounded-pill">
                                <option value=""> choose</option>
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
                        <BookCard books={currentPost} />
                        <Pagination booksPerPage={booksPerPage} totalBooks={result.length} paginate={paginate} />
                        {!book ? <NewestBooks /> : null}
                    </div>
                </div>
            </form >
        </div>

    )
}

export default GetBooks

