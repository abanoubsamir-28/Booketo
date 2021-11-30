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
                        {result.map((book, index) => (
                            <tr>
                                {/* <td>{console.log(book[index])}</td> */}
                                <td>{index + 1}</td>
                                <td><img src={book[index]?.data?.volumeInfo?.imageLinks !== undefined ? book[index]?.data?.volumeInfo?.imageLinks?.thumbnail : "holder.js/100px160"} alt={book[index]?.data?.title} /></td>
                                <td>{book[index]?.data?.volumeInfo?.title.length > 20 ? book[index]?.data?.volumeInfo?.title.substring(0, 20) + "..." : book[index]?.data?.volumeInfo?.title}</td>
                                <td><button className="btn mx-2 text-success" onClick={() => handelIncrease(book[index]?.data?.id)}>
                                    <MdAddCircleOutline />
                                </button>book
                                    {book[index]?.quant}
                                    <button className="btn mx-2 text-danger" onClick={() => handelDecrease(index)}>
                                        <MdRemoveCircleOutline />
                                    </button>
                                </td>
                                <td>{book[index]?.data?.saleInfo.listPrice?.amount ?
                                    res.itemQuantity * book[index]?.data?.saleInfo?.listPrice?.amount :
                                    res.itemQuantity * 30}
                                </td>
                                <td>
                                    <button type="button" onClick={() => handleRemovetoCart(book[index]?.data?.id)} className="btn btn-danger">
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
