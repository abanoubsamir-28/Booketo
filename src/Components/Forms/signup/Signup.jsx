import React ,{ useState }from 'react'
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import FormikControl from '../../SharedComponents/FormsFields/FormikControl';
import '../../../main-style.css'
import './signup.css'
import { Link } from 'react-router-dom';
import LogInNavbar from '../../SharedComponents/navbarHome/logInNavbar';
function Signup() {
    const initialValues = {
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
        polices: false
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is a required field')
            .min(5, "Minimum is 5 Characters")
            .max(20, "you exceeded Maximum "),
        lastName: Yup.string().required('Last Name is a required field')
            .min(5, "Minimum is 5 Characters")
            .max(20, "you exceeded Maximum "),
        age: Yup
            .number()
            .positive()
            .label('Age')
            .required('Age is a Required Field')
            .min(10, "Minimum 10 years old"),
        gender: Yup.string().required("Gender is Required Field"),
        email: Yup.string().required('E-mail is required field').email("Email is not Valid"),
        password: Yup
            .string()
            .required("Password is Required")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        confirmPassword: Yup
            .string()
            .oneOf([Yup.ref("password"), null], "Password Must Match")
            .required("Confirm your password !"),
        polices: Yup.string().required("You Must Accept our Polices").matches(true, "Must Accept our Polices")
    })
    const onSubmit = (values, submitProps) => {
        submitProps.resetForm()
        
    }

    const [typeofuser, settype] = useState(true)
    function normaluser() {
        settype(true)
        
    }
    function bookstoreuser() {
        settype(false)
    }
    return (

       <>
       <LogInNavbar/>
       <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <div className="sign_up form position-relative vh-100 ">
                    <div className="overlay w-100 position-absolute w-100 h-100 d-flex justify-content-center align-items-center ">
                        <div className="row py-2 justify-content-center w-100">
                            <div className="col-11">
                                <h2 className="mx-3 fw-bold text-center">Register</h2>
                                <Form className="w-100">
                                    <div className="form__content d-flex">
                                        <div className="row w-100 mx-3">
                                            <div className="col-12">
                                                <FormikControl control='input' type='text' label='First Name ' name='firstName' />
                                                <FormikControl control='input' type='email' label='Email' name='email' />
                                                <FormikControl control='password' type='password' label='Password' name='password' />

                                                <FormikControl
                                                    control='select'
                                                    name="gender"
                                                    as="select"
                                                    multiple={false}
                                                    className="form-control text-muted"
                                                >
                                                    <option value="" className="text-dark">Gender</option>
                                                    <option value="male" className="text-dark">Male</option>
                                                    <option value="female" className="text-dark">Female</option>
                                                </FormikControl>

                                                <div className="my-2 ">
                                                        <input
                                                            className="form-check-input "
                                                            type="radio"
                                                            name="payment"
                                                            id="cash"
                                                            onChange={normaluser}
                                                            defaultChecked={true}
                                                        />
                                                        <label htmlFor="rememberme" className=" me-5 form-check-label mx-2 text-white">
                                                            Sign up as user 
                                                        </label>
                                                        <input
                                                            className="ms-5 form-check-input "
                                                            type="radio"
                                                            name="payment"
                                                            id="credit"
                                                            onChange={bookstoreuser}

                                                        />
                                                        <label htmlFor="credit" className="form-check-label mx-2 text-white">
                                                         Sign up as bookstore
                                                        </label>
                                                    </div>
                                                    <div>
                                                       
                                                    </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row w-100">
                                            <div className="col-12">
                                                <FormikControl control='input' type='text' label='Last Name ' name='lastName' />
                                                <FormikControl control='password' type='password' label='Confirm Password ' name='confirmPassword' />
                                               
                                                <div className="my-2 mx-3">
                                                    <input
                                                        className="form-check-input "
                                                        type="checkbox"
                                                        name="polices"
                                                        id="polices"
                                                        onChange={formik.handleChange}
                                                        defaultChecked={formik.values.polices}
                                                    />
                                                    <label htmlFor="polices" className=" polices form-check-label mx-2 text-white">
                                                        Accept <span type="button" className="text-primary">Our Polices</span>
                                                    </label>
                                                    <div className="my-2">
                                                        {formik.touched.polices && formik.errors.polices && (
                                                            <div className="bg-danger p-2 text-white rounded-1 w-100">{formik.errors.polices}</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        typeofuser===true
                                        ?
                                        <Link to="/login" className="btn btn-trans rounded-pill ms-4 mt-3">Submit</Link>
                                        :
                                        <Link to="/bookstore" className="btn btn-trans rounded-pill ms-4 mt-3">Submit</Link>
                                    }
                                  
                                   
                                  
                                </Form>
                            </div>
                        </div>
                    </div>
                </div >
            )
            }
        </Formik >

       </>

    )
}
export default Signup
