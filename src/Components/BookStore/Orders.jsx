import React from 'react'
import { Card } from 'react-bootstrap'
import orders from './../../orders.json'
import "./order.css"

function Orders() {
    console.log(orders);
    return (
        <div className="container">
            <div className="row">
                {
        orders.map((order, index) =>(
            (
                <Card key={index} className="col-md-7 m-auto p-3 mt-4 border shadow">
                    <Card.Header className="text-center fw-bold fs-3 order__title">
                        Order {index + 1}</Card.Header>
                    <Card.Body>
                        <Card.Text className="h5 mb-3">
                            <span className="hhh">Book Name : </span>
                            {order.title}
                        </Card.Text>
                        <Card.Text className="h5 mb-3">
                            <span className="hhh"> Price : </span>
                            {order.price}</Card.Text>
                        <Card.Text className="h5 mb-3">
                            <span className="hhh">Quantity : </span>
                            {order.quantity}</Card.Text>
                        <Card.Text className="h5 ">
                            <span className="hhh">Total: </span>
                            {order.total}</Card.Text>
                    </Card.Body>
                </Card>
                )
        ) )}
            </div>
        </div>
    )
}
// orders.map((order, index) => (
//     <div className="container" key={index}>
//         <div className="row">
//             <div className=" col-md-6 col-sm-6 ">
//                 <Card>
//                     <Card.Header className="fw-bold text-center">Order {order.id}</Card.Header>
//                     <Card.Body>
//                         {order.products.map((book, index) => (
//                             // <div></div>
//                             <>
//                                 <Card.Title>{book.title}</Card.Title>
//                                 <Card.Text>
//                                     With supporting text below as a natural lead-in to additional content.
//                                 </Card.Text></>
//                         ))}
//                     </Card.Body>
//                 </Card>
//             </div>
//         </div>
//     </div>
// ))
export default Orders
