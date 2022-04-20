import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

const Form = () => {
    const context = useContext(UserContext);

    const handleChange = evt => {
        context.setUserName(evt.target.value);
    }

    return (
        <form className='mt-3 form-coding-dojo'>
            <div className='row'>
                <div className='d-flex align-items-center'>
                    <label htmlFor='name' className='form-label me-1 fw-bold'>Nombre:</label>
                    <input type='text'
                        className='form-control'
                        name='name'
                        id='name'
                        style={{ width: '300px' }}
                        onChange={handleChange}
                        placeholder='Por favor ingresar su nombre.'></input>
                </div>
            </div>
        </form>
    )
}

export default Form;