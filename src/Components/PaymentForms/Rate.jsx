import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';

function Rate() {
    const initialValues = {
        quality: false,
        date: false,
        dman: false,
        bookstore: false,
        comment: ''
    }
    const validationSchema = Yup.object({
        quality: Yup.string().required('this is a required field'),
        date: Yup.string().required('this is a required field'),
        dman: Yup.string().required('this is a required field'),
        bookstore: Yup.string().required('this is a required field'),
        comment: Yup.string(),
    })
    const onSubmit = values => {
        console.log('form data ', values);
    }
    return (
        <div className="sign_in form overflow-hidden">
            <div className="overlay w-100 py-5">
                <h2 className="text-center"> Tell Us Your Feedback </h2>
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
                                            <p className="text-light"> Is The Quality Of The Book Was Satisfing ?</p>
                                            <input
                                                className="form-check-input "
                                                type="radio"
                                                name="quality"
                                                id="question1"
                                                onChange={formik.handleChange}
                                                defaultChecked={formik.values.rememberme}
                                            />
                                            <label htmlFor="rememberme" className="form-check-label mx-2 text-white">
                                                Yes
                                            </label>
                                            <input
                                                className="form-check-input ms-5 "
                                                type="radio"
                                                name="quality"
                                                id="question2"
                                                onChange={formik.handleChange}
                                                defaultChecked={formik.values.rememberme}
                                            />
                                            <label htmlFor="credit" className="form-check-label mx-2 text-white">
                                                No
                                            </label>
                                        </div>
                                        <div className="my-2 ">
                                            <p className="text-light"> Is Book Arrived At the Determined Date ?</p>
                                            <input
                                                className="form-check-input "
                                                type="radio"
                                                name="date"
                                                id="question3"
                                                onChange={formik.handleChange}
                                                defaultChecked={formik.values.rememberme}
                                            />
                                            <label htmlFor="rememberme" className="form-check-label mx-2 text-white">
                                                Yes
                                            </label>
                                            <input
                                                className="form-check-input ms-5 "
                                                type="radio"
                                                name="date"
                                                id="question4"
                                                onChange={formik.handleChange}
                                                defaultChecked={formik.values.rememberme}
                                            />
                                            <label htmlFor="credit" className="form-check-label mx-2 text-white">
                                                No
                                            </label>
                                        </div>
                                        <div className="my-2 ">
                                            <p className="text-light"> Was There Any Problems With Delivery Man ? </p>
                                            <input
                                                className="form-check-input "
                                                type="radio"
                                                name="dman"
                                                id="question5"
                                                onChange={formik.handleChange}
                                                defaultChecked={formik.values.rememberme}
                                            />
                                            <label htmlFor="rememberme" className="form-check-label mx-2 text-white">
                                                Yes
                                            </label>
                                            <input
                                                className="form-check-input ms-5 "
                                                type="radio"
                                                name="dman"
                                                id="question6"
                                                onChange={formik.handleChange}
                                                defaultChecked={formik.values.rememberme}
                                            />
                                            <label htmlFor="credit" className="form-check-label mx-2 text-white">
                                                No
                                            </label>
                                        </div>
                                        <div className="my-2 ">
                                            <p className="text-light"> Did You Enjoyed Buying From This Bookstore </p>
                                            <input
                                                className="form-check-input "
                                                type="radio"
                                                name="bookstore"
                                                id="question7"
                                                onChange={formik.handleChange}
                                                defaultChecked={formik.values.rememberme}
                                            />
                                            <label htmlFor="rememberme" className="form-check-label mx-2 text-white">
                                                Yes
                                            </label>
                                            <input
                                                className="form-check-input ms-5 "
                                                type="radio"
                                                name="bookstore"
                                                id="question8"
                                                onChange={formik.handleChange}
                                                defaultChecked={formik.values.rememberme}
                                            />
                                            <label htmlFor="credit" className="form-check-label mx-2 text-white">
                                                No
                                            </label>
                                        </div>
                                        <div className="my-2 ">
                                            <p className="text-light"> Would You Like To Add Any Comment</p>
                                            <input
                                                className="form-check-input w-75 p-3 rounded-pill"
                                                as="textarea"
                                                name="comment"
                                                id="comment"
                                                onChange={formik.handleChange}
                                                defaultChecked={formik.values.rememberme}
                                                placeholder="Write Your Comment Here..."
                                            />
                                        </div>
                                        <div type="submit" className=" mt-3">
                                            <Link to="/thanks" className="btn btn-borde rounded-pill">Submit</Link>
                                        </div>

                                    </Form>
                                </div>
                            </div>
                        </div>
                    )}
                </Formik >
            </div>
        </div>
    )
}

export default Rate
