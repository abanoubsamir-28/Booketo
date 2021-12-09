import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../SharedComponents/Loader/Loader'
import Book from './Book';
import Pagination from './Pagination';

function StoreBooks() {
    const [books, setbooks] = useState([])
    const [publisher] = useState('Bloomsbury Publishing')
    const [currentPage, setcurrentPage] = useState(1)
    const [booksPerPage] = useState(10)
    useEffect(() => {
        getBooks()
    }, [])
    //Fetching data
    const getBooks = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=+inpublisher:${publisher}&key=AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E&maxResults=40`)
            .then(res => { setbooks(res.data.items) })
            .catch(error => { console.log(error) })
    }
    //Get cuurent books
    const indexOfLastBook = currentPage * booksPerPage
    const indexOfFirstBook = indexOfLastBook - booksPerPage
    const currentPost = books.slice(indexOfFirstBook, indexOfLastBook)
    //Change page
    const paginate = (pageNumber) => {
        setcurrentPage(pageNumber)
    }
    return (
        <div>
            {books ? (
                <div>
                    <Book books={currentPost} />
                    <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate} />
                </div>
            )
                : <Loader />}
        </div>
    )
}
export default StoreBooks


