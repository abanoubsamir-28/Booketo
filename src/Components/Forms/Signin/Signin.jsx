import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import FormikControl from '../../SharedComponents/FormsFields/FormikControl';
import '../../../main-style.css'
import './signin.css'
import { GrFacebook, GrTwitter, GrGoogle } from 'react-icons/gr'
function Signin() {
    const initialValues = {
        email: '',
        password: '',
        rememberme: false
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('E-mail is required field').email("Email is not Valid"),
        password: Yup.string().required('Password is required field'),
        rememberme: Yup.string()
    })
    const onSubmit = values => {
        // console.log('form data ', values);
        sessionStorage.setItem("isLogged","true")
    }
    return (
        <div className="sign_in form overflow-hidden">
            <div className="overlay  w-100 py-5">
                <h2 className="text-white text-center">Login</h2>
                <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {formik => (
                        <div className="form__content container">
                            <div className="row form__content__row">
                                <div className="col-6">
                                    <Form className="p-2">
                                        <FormikControl control='input' type='email' label='Email' name='email' />
                                        <FormikControl control='password' type='password' label='Password' name='password' />
                                        <div className="my-2 ">
                                            <input
                                                className="form-check-input "
                                                type="checkbox"
                                                name="rememberme"
                                                id="rememberme"
                                                onChange={formik.handleChange}
                                                defaultChecked={formik.values.rememberme}
                                            />
                                            <label htmlFor="rememberme" className="form-check-label mx-2 text-white">
                                                Remember Me
                                            </label>
                                        </div>
                                        <button type="submit" className="btn me-3">Login</button>
                                        <span className="text-white mx-1">
                                            <a href="#google"> Register?</a>
                                        </span>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    )}
                </Formik >
                <h5 className="text-white text-center py-4">More Sign in Options</h5>
                <div className="sing_in_options d-flex justify-content-center align-items-center">
                    <GrFacebook className="icon text-white fs-3 mx-3" />
                    <GrTwitter className="icon text-white fs-3 mx-3" />
                    <GrGoogle className="icon text-white fs-3 mx-3" />
                </div>
            </div>
        </div>

    )
}
export default Signin
