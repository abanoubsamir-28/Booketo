
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


















