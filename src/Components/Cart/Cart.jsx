import React, { useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { cartActionDec, cartActionInc, cartStoreActionRemove } from '../../Store/CartStore/cartStoreAction'
import { MdAddCircleOutline, MdAddShoppingCart } from 'react-icons/md';
import { MdRemoveCircleOutline } from 'react-icons/md';
import EmptyCart from './EmptyCart'

const Cart = () => {
    const cart = useSelector(state => state.cartStore.cartItem)
    const dispatch = useDispatch()

    useEffect(() => {
        totalPrice()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const totalPrice = () => {
        if (cart.length) {
            const yy = cart.map((ele) => {
                if (ele?.saleInfo?.listPrice?.amount !== undefined) {
                    return Math.floor(ele.quantity * ele.saleInfo?.listPrice?.amount)
                }
                else {
                    return Math.floor(ele?.quantity * 30)
                }
            })
            const total = yy.reduce((total, amount) => total + amount)
            return total
        }
    }
    function handleRemovetoCart(res) {
        dispatch(cartStoreActionRemove(res))
    }
    function handelIncrease(id) {
        dispatch(cartActionInc(id))
    }
    function handelDecrease(itemId) {
        dispatch(cartActionDec(itemId))
    }
    return (
        <>
            {cart.length ?
                <div className="container table-responsive">
                    <Table striped bordered hover className="text-center fw-bold">
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
                                    <td>{index + 1}</td>
                                    <td><img src={book.volumeInfo?.imageLinks !== undefined ? book.volumeInfo?.imageLinks?.thumbnail : "https://via.placeholder.com/150"} alt={book.title} /></td>
                                    <td>{book.volumeInfo?.title.length > 30 ? book.volumeInfo?.title.substring(0, 30) + "..." : book.volumeInfo?.title}</td>
                                    <td><button className="btn mx-2 text-success" onClick={() => handelIncrease(book.id)}>
                                        <MdAddCircleOutline className="fs-4" />
                                    </button>
                                        {book.quantity}
                                        <button className="btn mx-2 text-danger" onClick={() => handelDecrease(book.id)}>
                                            <MdRemoveCircleOutline className="fs-4" />
                                        </button>
                                    </td>
                                    <td on>{book.saleInfo.listPrice?.amount ?
                                        Math.floor(book.quantity * book.saleInfo?.listPrice?.amount) :
                                        Math.floor(book.quantity * 30)}
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => handleRemovetoCart(book)} className="btn btn-trans">
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className=" fw-bold p-1 mb-3  d-inline-block  border"
                        style={{ "color": "var(--dark-brown" }}>Total Price : {totalPrice()} EGP </div>
                    <Link to='/getbooks' className="btn btn-outline-info d-inline-block ms-3"> Countinue shopping
                        <MdAddShoppingCart className="fs-4" />
                    </Link>
                </div>
                :
                <EmptyCart />
            }
        </>
    )
}

export default Cart
