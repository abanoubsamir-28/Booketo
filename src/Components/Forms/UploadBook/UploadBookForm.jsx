import React from 'react'
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import FormikControl from '../../SharedComponents/FormsFields/FormikControl';
import '../../../main-style.css'
// import './signup.css'
function Signup() {
    const initialValues = {
        bookImage: '',
        bookTitle: '',
        bookDescription: '',
        bookAuthor: '',
        bookPages: '',
        bookCategory: '',
        bookPrice: '',
    }
    const validationSchema = Yup.object({
        bookImage: Yup.mixed().required("image field is required"),
        bookTitle: Yup.string().required("title field is required").min(2, "can't be less than 2 charachters"),
        bookDescription: Yup.string().required("description field is required"),
        bookAuthor: Yup.string().required("author field is required"),
        bookPages: Yup.number().required("pages field is required").positive(),
        bookCategory: Yup.string().required("category field is required"),
        bookPrice: Yup.number().required("price field is required").min(5, "please add accurate price"),
    })
    const onSubmit = (values, onSubmitProps) => {
        console.log('form data ', values);
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
    }
    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <div className="sign_up form position-relative vh-100 ">
                    <div className="overlay w-100 position-absolute w-100 h-100 d-flex justify-content-center align-items-center ">
                        <div className="row py-2 justify-content-center w-100">
                            <div className="col-11">
                                <h2 className="mx-3 fw-bold text-center">Upload Book</h2>
                                <Form className="w-100">
                                    <div className="form__content d-flex">
                                        <div className="row w-100 mx-3">
                                            <div className="col-12">
                                                <FormikControl control='input' type='file' label='Book Image' name='bookImage' />
                                                <FormikControl control='input' type='text' label='Book Author' name='bookAuthor' />
                                                <FormikControl control='input' type='text' label='Book Category' name='bookCategory' />
                                                <FormikControl control='input' type='number' label='Book Price' name='bookPrice' />
                                            </div>
                                        </div>
                                        <div className="row w-100">
                                            <div className="col-12">
                                                <FormikControl control='input' type='text' label='Book Title' name='bookTitle' />
                                                <FormikControl control='input' type='number' label='Book Pages' name='bookPages' />
                                                <FormikControl control='input' as="textarea" label='Book Description' name='bookDescription' />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary ms-4">Submit</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div >
            )
            }
        </Formik >
    )
}
export default Signup
