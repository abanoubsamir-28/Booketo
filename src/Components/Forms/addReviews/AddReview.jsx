
// import React from 'react'
// import { Formik, Form } from 'formik'
// import * as yup from 'yup'
// import FormikControl from '../../SharedComponents/FormsFields/FormikControl'
// import './addReview.css'

// const initialValues = {
//     title: '',
//     review: ''
// }
// const validationSchema = yup.object({})
// function AddReview({ values, post }) {
//     // const [newPost, setNewPost] = useState('')
//     return (
//         <div className="container">
//             <section className="addRevierw w-75 ms-2" >
//                 <Formik
//                     initialValues={initialValues}
//                     validationSchema={validationSchema}
//                     onSubmit={(values, submitProps) => {
//                         submitProps.resetForm()


//                         setNewPost([...post, values])

//                     }}                   >
//                     {formik => (
//                         <div className="row  ">
//                             <div className="col-6">
//                                 <Form>
//                                     <FormikControl
//                                         control='input'
//                                         type='text'
//                                         label='Write Title '
//                                         name='title'
//                                     />
//                                     <FormikControl control='input' as="textarea" label='Write Your Review Here ....' name='review' />
//                                     <button type="submit" className="btn">Add Review</button>
//                                 </Form>
//                             </div>
//                         </div>
//                     )}
//                 </Formik>
//             </section>
//         </div>
//     )
// }

// export default AddReview

