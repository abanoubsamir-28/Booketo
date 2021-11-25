import React from 'react'
import Input from './Input';
import Textarea from './Textarea';

function FormikControl(props) {
    const { control, label, name, ...rest } = props
    switch (control) {
        case 'input':
            return <Input label={label} name={name} {...rest} />
        case 'password':
            return <Input label={label} name={name} {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
        case 'radio':
        case 'date':
        case 'number':
        default:
            return null;
    }
}

export default FormikControl
