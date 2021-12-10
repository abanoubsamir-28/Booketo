import React from 'react'

function ErrorText(props) {
    return (
        <div className=" p-2 text-danger rounded-1">
            {props.children}
        </div>
    )
}

export default ErrorText
