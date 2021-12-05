import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorText from './ErrorText'

function Textarea(props) {
    const { label, name, ...rest } = props
    return (
        <div className="form-control text-left my-3">
            <label htmlFor={name}>{label}</label>
            <Field
                as="textarea"
                id={name}
                name={name}
                {...rest}
            />
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default Textarea
