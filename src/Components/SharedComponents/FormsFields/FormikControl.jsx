import React from 'react'
import Input from './Input';

function FormikControl(props) {
    const { control, label, name, ...rest } = props
    switch (control) {
        case 'input':
        case 'password':
        case 'textarea':
        case 'select':
        case 'radio':
        case 'date':
        case 'number':
            return <Input label={label} name={name} {...rest} />
        default:
            return null;
    }
}

export default FormikControl
