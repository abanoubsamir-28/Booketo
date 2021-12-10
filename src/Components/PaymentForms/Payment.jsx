import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import FormikControl from '../SharedComponents/FormsFields/FormikControl';
import { Link } from 'react-router-dom';
import NavBar from '../SharedComponents/NavBar';

function Payment() {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        PhoneNumber: '',
        address: '',
        city: ''
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is a required field')
            .min(3, "Minimum is 5 Characters")
            .max(20, "you exceeded Maximum "),
        lastName: Yup.string().required('Last Name is a required field')
            .min(3, "Minimum is 5 Characters")
            .max(20, "you exceeded Maximum "),
        PhoneNumber: Yup.string().required('Phone Number is a required field')
            .min(11, "Minimum is 11 Number")
            .max(11, "you exceeded Maximum "),
        email: Yup.string().required('E-mail is required field').email("Email is not Valid"),
        address: Yup.string().required('Address is a required field'),
        city: Yup.string().required('Address is a required field'),
    })
    const onSubmit = values => {
        validationSchema(values);
    }
    return (
       <>
       <NavBar/>
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            className="container-fluid"
        >
            {formik => (
                <div className="sign_up form position-relative vh-100 ">
                    <div className="overlay w-100 position-absolute w-100 h-100 d-flex justify-content-center align-items-center ">
                        <div className="row py-2 justify-content-center w-100">
                            <div className="col-11">
                                <h2 className="mx-3 fw-bold text-center">Checkout</h2>
                                <Form className="w-100">
                                    <div className="form__content d-flex">
                                        <div className="row w-100 mx-3">
                                            <div className="col-12">
                                                <FormikControl control='input' type='text' label='First Name ' name='firstName' />
                                                <FormikControl control='input' type='email' label='Email' name='email' />
                                                <FormikControl
                                                    control='select'
                                                    name="city"
                                                    as="select"
                                                    multiple={false}
                                                    className="form-control text-muted"
                                                >
                                                    <option value="" className="text-dark">City</option>
                                                    <option value="male" className="text-dark">Cairo</option>
                                                    <option value="female" className="text-dark">Alexandria</option>
                                                    <option value="male" className="text-dark">Aswan</option>
                                                    <option value="male" className="text-dark">Ismailia</option>
                                                </FormikControl>
                                            </div>
                                        </div>
                                        <div className="row w-100">
                                            <div className="col-12">
                                                <FormikControl control='input' type='text' label='Last Name ' name='lastName' />
                                                <FormikControl control='number' type='text' label='Phone Number' name='PhoneNumber' />
                                                <FormikControl control='input' type='text' label='Address' name='address' />
                                            </div>
                                        </div>
                                    </div>



                                    <button type="submit" value="submit" className="btn  ms-4"  >
                                        <Link disabled={true} to="/paymentMethod" className="btn rounded-pill btn-trans">Submit</Link>
                                    </button>
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

export default Payment
