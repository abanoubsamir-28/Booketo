import React from 'react'

function ErrorText(props) {
    return (
        <div className="bg-danger p-2 text-white rounded-1">
            {props.children}
        </div>
    )
}

export default ErrorText
