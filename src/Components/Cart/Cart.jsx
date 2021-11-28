import React from 'react'
import { FaArrowRight, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { cartActionDec, cartActionInc, cartStoreActionRemove } from '../../Store/CartStore/cartStoreAction'
import { MdAddCircleOutline } from 'react-icons/md';
import { MdRemoveCircleOutline } from 'react-icons/md';

const Cart = () => {
    const ss = new Set(useSelector(state => state.cartStore.cartItem))
    const result = Array.from(ss)
    const res = useSelector(state => state.cartStore)
    const dispatch = useDispatch()
    function handleRemovetoCart(res) {
        dispatch(cartStoreActionRemove(res))
        console.log(res)
    }
    function handelIncrease(id) {
        dispatch(cartActionInc(id))
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
                        {result.map((book, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td><img src={book.data?.volumeInfo?.imageLinks !== undefined ? book.data?.volumeInfo?.imageLinks?.thumbnail : "holder.js/100px160"} alt={book.data?.title} /></td>
                                <td>{book.data?.volumeInfo?.title.length > 20 ? book.data?.volumeInfo?.title.substring(0, 20) + "..." : book.data?.volumeInfo?.title}</td>
                                <td><button className="btn mx-2 text-success" onClick={() => handelIncrease(book?.data?.id)}>
                                    <MdAddCircleOutline />
                                </button>
                                    {res.itemQuantity}
                                    <button className="btn mx-2 text-danger" onClick={() => handelDecrease(book?.data?.id)}>
                                        <MdRemoveCircleOutline />
                                    </button>
                                </td>
                                <td>{book.data?.saleInfo.listPrice?.amount ?
                                    res.itemQuantity * book.data?.saleInfo?.listPrice?.amount :
                                    res.itemQuantity * 30}
                                </td>
                                <td>
                                    <button type="button" onClick={() => handleRemovetoCart(book?.data?.id)} className="btn btn-danger">
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
