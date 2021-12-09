import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import FormikControl from '../../SharedComponents/FormsFields/FormikControl'
import './contactUs.css'
import NavBar from '../../SharedComponents/NavBar'

const initialValues = {
    name: '',
    email: '',
    message: ''
}
const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required()
})
const onSubmit = (values, submitProps) => {
    submitProps.resetForm()
    console.log(values)
}
function ContactsUs() {
    return (
        <>
        <NavBar/>
            <section className="contactUs form" >
                <div className="overlay py-5 w-100">
                    <h2 className="text-center">Contact Us</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {formik => (
                            <div className="form__content container">
                                <div className="row form__content__row ">
                                    <div className="col-6">
                                        <Form>
                                            <FormikControl
                                                control='input'
                                                type='text'
                                                label='Your Name '
                                                name='name' />
                                            <FormikControl control='input' type='email' label='Your Email' name='email' />
                                            <FormikControl control='input' as="textarea" label='Your Message ....' name='message' />
                                            <button type="submit" className="btn">Send</button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    )
}

export default ContactsUs
