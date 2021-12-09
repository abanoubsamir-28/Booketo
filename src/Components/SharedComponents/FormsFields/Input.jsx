import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ErrorText from './ErrorText'
function Input(props) {
    const { name, label, ...rest } = props
    return (
        <div className="form-group text-left my-3">
            <Field
                className="form-control mt-4"
                id={name}
                name={name}
                placeholder={label}
                {...rest}
            />
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}
export default Input
