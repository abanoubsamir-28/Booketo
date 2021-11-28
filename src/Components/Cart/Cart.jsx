import React from 'react'
import { FaArrowRight, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { cartActionDec, cartActionInc, cartStoreActionRemove } from '../../Store/CartStore/cartStoreAction'
const Cart = (props) => {
    const ss = new Set(useSelector(state => state.cartStore.cartItem))
    const result = Array.from(ss)
    const res = useSelector(state => state.cartStore)
    const dispatch = useDispatch()
    // const amountOfItems = (id) => {result.filter((item) => item.id === id).length);
    function amountOfItems(id) {
        var kalb;
        console.log(kalb)
        kalb = result.filter((item) => item.data.id === id).length
        console.log(kalb)
    }
    function handleRemovetoCart(res) {
        dispatch(cartStoreActionRemove(res))
        console.log(res)
    }
    function handelIncrease(id) {
        dispatch(cartActionInc(id))
    }
    function handelDecrease(id) {
        dispatch(cartActionDec(id))
    }
    return (
        <>
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>clear</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((book, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td><img src={book.data?.volumeInfo?.imageLinks !== undefined ? book.data?.volumeInfo?.imageLinks?.thumbnail : "holder.js/100px160"} alt={book.data?.title} /></td>
                                <td>{book.data?.volumeInfo?.title.length > 20 ? book.data?.volumeInfo?.title.substring(0, 20) + "..." : book.data?.volumeInfo?.title}</td>
                                <td>
                                    {res.itemQuantity}
                                </td>
                                <td>{book.data?.saleInfo.listPrice?.amount ?
                                    res.itemQuantity * book.data?.saleInfo?.listPrice?.amount :
                                    res.itemQuantity * 30}
                                </td>
                                <td>
                                    <button type="button" onClick={() => handleRemovetoCart(book?.data?.id)} className="btn btn-danger">
                                        <FaTrashAlt />
                                    </button>
                                    {/* <button onClick={() => amountOfItems(book?.data?.id)}>
                                        decrease
                                    </button> */}

                                    <button onClick={() => handelIncrease(book?.data?.id)}>+</button>
                                    <button onClick={() => handelDecrease(book?.data?.id)}>-</button>
                                </td>
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
