import React, { useReducer } from 'react';
import './Form.css';

const initialState = {
    firstName: {
        value: "",
        error: null
    },
    lastName: {
        value: "",
        error: null
    },
    email: {
        value: "",
        error: null
    }
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.field]: {
            value: action.text,
            error: action.error
        }
    };
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = evt => {
        const { name, value } = evt.target;

        dispatch({
            field: name,
            text: value,
            error: null
        });
    }

    // Valida si un campo tiene datos.
    const camposObligatorios = (id, textName) => {
        let msg = "";
        if (state[id].value.trim().length === 0)
            msg = `El campo '${textName}' es obligatorio.`;

        if (msg.length > 0)
            dispatch({
                field: id,
                text: state[id].value,
                error: msg
            });

        return msg.length > 0;
    }

    // Valida que al menos tengan 2 caracteres.
    const longitudCampos = (id, textName) => {
        let msg = "";
        if (state[id].value.trim().length < 2)
            msg = `El campo '${textName}' debe tener al menos 2 caracteres.`;

        if (msg.length > 0)
            dispatch({
                field: id,
                text: state[id].value,
                error: msg
            });
    }

    // Valida formato de mail.
    const validaEmail = () => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //var mailformat = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        
        let msg = "";
        // if (!state.email.value.trim().match(mailformat))
        //     msg = `El campo 'Email' no tiene un formato correcto.`;
        if (!mailformat.test(state.email.value.trim()))
            msg = `El campo 'Email' no tiene un formato correcto.`;
        
        if(msg.length > 0)
            dispatch({
                field: "email",
                text: state.email.value,
                error: msg.length > 0 ? msg : null
            });
    }

    const createRegister = evt => {
        evt.preventDefault();

        // Validaciones para el campo firstName
        let validacion = camposObligatorios("firstName", "First name");
        if (!validacion)
            longitudCampos("firstName", "First name");

        // Validaciones para el campo lastName
        validacion = camposObligatorios("lastName", "Last name");
        if (!validacion)
            longitudCampos("lastName", "Last name");

        // Validaciones para el campo email.
        validacion = camposObligatorios("email", "Email");
        if (!validacion)
            validaEmail();
    }

    return (
        <form onSubmit={createRegister} className="mt-3">
            <div className='row mb-4'>
                <label htmlFor='firstName' className='form-label'>First name:</label>
                <input type='text'
                    className='form-control'
                    name='firstName'
                    id='firstName'
                    placeholder='Please enter the first name.'
                    value={state.firstName.value}
                    onChange={handleChange}></input>
                {state.firstName.error !== null && (
                    <div className='errorReactValidate'>{state.firstName.error}</div>
                )}
            </div>
            <div className='row mb-4'>
                <label htmlFor='lastName' className='form-label'>Last name:</label>
                <input type='text'
                    className='form-control'
                    name='lastName'
                    id='lastName'
                    placeholder='Please enter the last name.'
                    value={state.lastName.value}
                    onChange={handleChange}></input>
                {state.lastName.error !== null && (
                    <div className='errorReactValidate'>{state.lastName.error}</div>
                )}
            </div>
            <div className='row mb-4'>
                <label htmlFor='email' className='form-label'>Email:</label>
                <input type='email'
                    className='form-control'
                    name='email'
                    id='email'
                    placeholder='Please enter the email.'
                    value={state.email.value}
                    onChange={handleChange}></input>
                {state.email.error !== null && (
                    <div className='errorReactValidate'>{state.email.error}</div>
                )}
            </div>

            <div className='row'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    );
}

export default Form;