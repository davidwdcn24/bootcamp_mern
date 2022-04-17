import React, { useReducer } from 'react';

const initialState = {
    color: {
        value: "",
        error: null
    },
    length: {
        value: "",
        error: null
    }
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: {
            value: action.value,
            error: action.error
        }
    };
}

const Form = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        // Setea el listado de colores.
        props.onSetColors(state.color.value);
        
        // Setea el color
        props.onSetLen(parseInt(state.length.value));

        // Inicializa los valores.
        dispatch({
            name: "color",
            value: "",
            error: null
        });
        dispatch({
            name: "length",
            value: "",
            error: null
        });
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        dispatch({
            name: (name === "txtColor" ? "color" : "length"),
            value: value,
            error: null
        });
    }

    return (
        <form>
            <div className='row align-items-center'>
                <div className='col-md-10'>
                    <div className='row mb-3'>
                        <label htmlFor='txtColor' className='form-label'>Color:</label>
                        <input type='text'
                            className='form-control'
                            name='txtColor'
                            id='txtColor'
                            placeholder='Please enter the hexadecimal color (#000000).'
                            value={state.color.value}
                            onChange={handleChange}></input>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='txtLength' className='form-label'>Length:</label>
                        <input type='text'
                            className='form-control'
                            name='txtLength'
                            id='txtLength'
                            placeholder='Please enter the length.'
                            value={state.length.value}
                            onChange={handleChange}></input>
                    </div>
                </div>
                <div className='col-md-2'>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Add</button>
                </div>
            </div>
        </form>
    );
}

export default Form;