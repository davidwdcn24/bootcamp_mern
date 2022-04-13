import React from 'react'

const InputReadOnly = ({id, text, value}) => {

    return (
        <div className='row'>
            <label htmlFor={id} className='col-sm-3 col-form-label col-form-label-sm'>{text}</label>
            <div className='col-sm-9'>
                <input type='text' className='form-control-plaintext' readOnly
                    name={id} id={id} value={value} />
            </div>
        </div>
    )
}

export default InputReadOnly;