
import React from 'react'

function Pagination({ booksPerPage, totalBooks, paginate }) {
    const pageNumbers = [];
    for (let i = 0; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
            <nav >
            <ul className="pagination  justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" aria-current="page">
                        {number > 0 ?
                            (<a className="page-link " onClick={() => { paginate(number) }} style={{ cursor: 'pointer' }}>
                                {number}
                            </a>)
                            : null}

                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagination




















// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';
// import axios from 'axios'


// function Pagination() {
//     const [books, setbooks] = useState([])
//     const [publisher, setPublisher] = useState('Bloomsbury Publishing')
//     const [limit, setLimit] = useState(0)
//     useEffect(() => {
//         getBooks()
//     }, [])
//     const handlePageClick = (data) => {
//         console.log(data.selected);
//         setLimit(limit+15)
//         console.log("limit",limit);
//     }
//     const getBooks = () => {
//         axios.get(`https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E&startIndex=${limit}&maxResults=15`)
//             .then(res => { setbooks(res.data.items) })
//             .catch(error => { console.log(error) })
//     }
//     // console.log(books)

//     return (
//         <div>
//             <ReactPaginate
//                 previousLabel={'previous'}
//                 nextLabel={'next'}
//                 breakLabel={'...'}
//                 pageCount={15}
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={3}
//                 onPageChange={handlePageClick}
//                 containerClassName={'pagination justify-content-center'}
//                 pageClassName={'page-item'}
//                 pageLinkClassName={'page-link'}
//                 previousClassName={'page-item'}
//                 previousLinkClassName={'page-link'}
//                 nextClassName={'page-item'}
//                 nextLinkClassName={'page-link'}
//                 breakClassName={'page-item'}
//                 breakLinkClassName={'page-link'}
//                 activeClassName={'active'}
//             />

//         </div>
//     )
// }













// // Example items, to simulate fetching from another resources.
// // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// // function Items({ currentItems }) {
// //   return (
// //     <>
// //       {currentItems &&
// //         currentItems.map((item) => (
// //           <div>
// //             <h3>Item #{item}</h3>
// //           </div>
// //         ))}
// //     </>
// //   );
// // }

// // function Pagination({ itemsPerPage }) {
// //   // We start with an empty list of items.
// //   const [currentItems, setCurrentItems] = useState(null);
// //   const [pageCount, setPageCount] = useState(0);
// //   // Here we use item offsets; we could also use page offsets
// //   // following the API or data you're working with.
// //   const [itemOffset, setItemOffset] = useState(0);

// //   useEffect(() => {
// //     // Fetch items from another resources.
// //     const endOffset = itemOffset + itemsPerPage;
// //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
// //     setCurrentItems(items.slice(itemOffset, endOffset));
// //     setPageCount(Math.ceil(items.length / itemsPerPage));
// //   }, [itemOffset, itemsPerPage]);

// //   // Invoke when user click to request another page.
// //   const handlePageClick = (event) => {
// //     const newOffset = (event.selected * itemsPerPage) % items.length;
// //     console.log(
// //       `User requested page number ${event.selected}, which is offset ${newOffset}`
// //     );
// //     setItemOffset(newOffset);
// //   };

// //   return (
// //     <>
// //       <Items currentItems={currentItems} />
// //       <ReactPaginate
// //         breakLabel="..."
// //         nextLabel="next >"
// //         onPageChange={handlePageClick}
// //         pageRangeDisplayed={5}
// //         pageCount={pageCount}
// //         previousLabel="< previous"
// //         renderOnZeroPageCount={null}
// //       />
// //     </>
// //   );
// // }

// // //Add a <div id="container"> to your HTML to see the componend rendered.
// // ReactDOM.render(
// //   <Pagination itemsPerPage={4} />,
// //   document.getElementById('root')
// // );
// export default Pagination
