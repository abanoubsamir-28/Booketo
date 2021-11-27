import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import FormikControl from '../SharedComponents/FormsFields/FormikControl';
import { Link } from 'react-router-dom';

function PaymentMethods() {
    const initialValues = {
        payment: false,
        cardnumber: '',
        name: '',
        expire: '',
        svc:'',
    }
    const validationSchema = Yup.object({
        payment: Yup.string(),
        cardnumber: Yup.string().required('Card Number is a required field')
            .min(16, "Minimum is 16 Number")
            .max(16, "you exceeded Maximum "),
        name: Yup.string().required(' Name is a required field')
            .min(5, "Minimum is 5 Characters")
            .max(25, "you exceeded Maximum "),
        expire: Yup.string().required('expiration date is required'),
        cvc: Yup.string().required('CVC is a required field')
        .min(3, "Minimum is 3 Numbers")
        .max(3, "you exceeded Maximum "),
    })
    const onSubmit = values => {
        console.log('form data ', values);
    }

    const [credit, setcredit] = useState()
    function paywithcredit() {
        setcredit(true)
    }
    function paywithcash() {
        setcredit(false)
    }
    return (
        <div>
            <div className="sign_up form position-relative vh-100 ">
                <div className="overlay w-100 position-absolute w-100 h-100 d-flex justify-content-center align-items-center ">
                    <div className="row py-2 justify-content-center w-100">
                        <div className="col-11">
                            <h2 className="mx-3 fw-bold text-center">Payment Methods</h2>
                            <Formik initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {formik => (
                                    <div className="form__content container">
                                        <div className="row form__content__row">
                                            <div className="col-6">
                                                <Form>
                                                    <div className="my-2 ">
                                                        <input
                                                            className="form-check-input "
                                                            type="radio"
                                                            name="payment"
                                                            id="cash"
                                                            onChange={paywithcash}
                                                            defaultChecked={formik.values.payment}
                                                        />
                                                        <label htmlFor="rememberme" className="form-check-label mx-2 text-white">
                                                            Cash On Delivery
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input
                                                            className="form-check-input "
                                                            type="radio"
                                                            name="payment"
                                                            id="credit"
                                                            onChange={paywithcredit}
                                                            defaultChecked={formik.values.payment}
                                                        />
                                                        <label htmlFor="credit" className="form-check-label mx-2 text-white">
                                                            Credit Card
                                                        </label>
                                                    </div>
                                                    {
                                                        credit === true
                                                            ?
                                                            <div className="row w-100">
                                                                <div className="col-12">

                                                                    <FormikControl control='number' type='text' label='Credit Card Number' name='cardnumber' />
                                                                    <label htmlFor="credit" className="form-check-label mx-2 text-white">
                                                                        Expires At:
                                                                    </label>
                                                                    <FormikControl control='date' type='date' label='Expires at ' name='expire' />
                                                                    <FormikControl control='input' type='text' label=' Name On Credit Card ' name='name' />
                                                                    <FormikControl control='number' type='text' label='CVC ' name='cvc' />
                                                                    <button type="submit" className="btn btn-primary ms-4">
                                                                        <Link to="/rate"  className="text-light nav-link">Completet Payment</Link>
                                                                        </button>
                                                                </div>
                                                            </div>
                                                            
                                                            :
                                                            <button type="submit" className="btn btn-primary ms-4">
                                                                        <Link to="/rate"  className="text-light nav-link">Completet Payment</Link>
                                                                        </button>
                                                    }

                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Formik >

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods
