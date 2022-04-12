import React from 'react'

const Input = ({id, inputType, text, setInput}) => {
    const placeHolder = 'Please enter the ' + text.toLowerCase().substring(0, text.length - 1) + '.';
    return (
        <div className='row mb-3'>
            <label htmlFor={id} className='form-label'>{text}</label>
            <input type={inputType} className='form-control' name={id} id={id}
                placeholder={placeHolder} onChange={e => { setInput(e.target.value) }} />
        </div>
    )
}

export default Input;