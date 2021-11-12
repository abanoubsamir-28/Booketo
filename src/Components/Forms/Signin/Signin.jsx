import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import FormikControl from '../../Shared Components/FormsFields/FormikControl';
function Signin() {
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('E-mail is required field').email("Email is not Valid") , 
        password: Yup.string().required('Password is required field')
    })
    const onSubmit = values => {
        console.log('form data ', values);
    }
    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <div className="container">
                    <div className="row py-5 justify-content-center">
                        <div className="col-6 py-1 shadow rounded">
                            <Form>
                                <FormikControl control='input' type='email' label='Email' name='email' />
                                <FormikControl control='password' type='password' label='Password' name='password' />
                                <button type="submit" className="btn btn-primary my-3">Submit</button>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
        </Formik >
    )
}
export default Signin
