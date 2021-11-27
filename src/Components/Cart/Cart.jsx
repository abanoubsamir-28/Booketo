import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card, Table } from 'react-bootstrap'
const Cart = (props) => {
    const result = useSelector(state => state.cartStore.cartItem)
    const res = useSelector(state => state.cartStore)
    return (
        <>
            <div className="container">
                {/* {res.cartItem.map((ele) => {
                    ele.data.id !== book.data.id ? ( */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((book, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td><img src={book.data?.volumeInfo?.imageLinks !== undefined ? book.data?.volumeInfo?.imageLinks?.thumbnail : "holder.js/100px160"} alt={book.data?.title} /></td>
                                <td>{book.data?.volumeInfo?.title.length > 20 ? book.data?.volumeInfo?.title.substring(0, 20) + "..." : book.data?.volumeInfo?.title}</td>
                                <td>
                                    <div className="btn btn-danger">
                                        +
                                    </div>
                                    {res.CartQuantity}
                                    <div className="btn btn-success">
                                        -
                                    </div>
                                </td>
                                <td>{book.data?.saleInfo.listPrice?.amount ?
                                    res.CartQuantity * book.data?.saleInfo?.listPrice?.amount :
                                    res.CartQuantity * 30}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            {/* ) : (console.log("not working")) */}

            {/* })} */}
            {/* <Card className="h-100 book__card__bookSearch">
                        <Card.Img variant="top" className="h-50" src={book.data.volumeInfo?.imageLinks !== undefined ? book.data.volumeInfo?.imageLinks.thumbnail : "holder.js/100px160"} alt={book.data.title} />
                        <Card.Body className="book__card__bookSearch">
                            <Card.Title>{book.data.volumeInfo?.title.length > 10 ? book.data.volumeInfo?.title.substring(0, 10) + "..." : book.data.volumeInfo?.title}</Card.Title>
                            <Card.Text>
                                {console.log(book.data)}
                                
                            </Card.Text>
                        </Card.Body>
                    </Card> */}
            <div className="col-9 text-center py-5">
                <p>
                    Your cart is empty  start
                </p>
                <Link to='/getbooks' className="btn btn-danger">shopping now <FaArrowRight />
                </Link>
            </div>
        </>
    )
}

export default Cart
