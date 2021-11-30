import React from 'react'
import { FaArrowRight, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { cartActionDec, cartActionInc, cartStoreActionRemove } from '../../Store/CartStore/cartStoreAction'
import { MdAddCircleOutline } from 'react-icons/md';
import { MdRemoveCircleOutline } from 'react-icons/md';

const Cart = () => {
    // we are using the cart array that used from the store directly.
    const cart = useSelector(state => state.cartStore.cartItem)
    const dispatch = useDispatch()
    function handleRemovetoCart(res) {
        dispatch(cartStoreActionRemove(res))
    }
    function handelIncrease(id) {
        dispatch(cartActionInc(id))
        // console.log(res.cartItem);
    }
    function handelDecrease(itemId) {
        dispatch(cartActionDec(itemId))
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
                        {cart.map((book, index) => (
                            <tr>
                                {/* <td>{console.log(book[index])}</td> */}
                                <td>{index + 1}</td>
                                <td><img src={book.volumeInfo?.imageLinks !== undefined ? book.volumeInfo?.imageLinks?.thumbnail : "holder.js/100px160"} alt={book.title} /></td>
                                <td>{book.volumeInfo?.title.length > 20 ? book.volumeInfo?.title.substring(0, 20) + "..." : book.volumeInfo?.title}</td>
                                <td><button className="btn mx-2 text-success" onClick={() => handelIncrease(book.id)}>
                                    <MdAddCircleOutline />
                                </button>
                                    {book.quantity} book
                                    <button className="btn mx-2 text-danger" onClick={() => handelDecrease(book.id)}>
                                        <MdRemoveCircleOutline />
                                    </button>
                                </td>
                                <td>{book.saleInfo.listPrice?.amount ?
                                    book.quantity * book.saleInfo?.listPrice?.amount :
                                    book.quantity * 30}
                                </td>
                                <td>
                                    <button type="button" onClick={() => handleRemovetoCart(book.id)} className="btn btn-danger">
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
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
