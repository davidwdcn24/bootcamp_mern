import React, { useState } from 'react';
import './Form.css'

const Form = (props) => {
    const [task, setTask] = useState("");
    const [msg, setMsg] = useState("");

    const handleChange = (evt) => {
        // Actualiza el estado de la tarea.
        const value = evt.target.value;
        setTask(value);

        // Si tiene un valor mayor a 0 elimina el texto del mensaje de error.
        if(value.trim().length > 0)
            setMsg("");
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // Verifica si el campo tarea tiene datos.
        if (task.trim().length === 0)
            setMsg("El campo es obligatorio");
        else {
            props.addTask(task);
            setTask("");
        }
    }

    return (
        <form className='container-fluid mt-3'>
            <div className='row mb-3'>
                <input type='text'
                    className='form-control'
                    name='task'
                    id='task'
                    placeholder='Por favor ingrese un valor en la tarea.'
                    value={task}
                    onChange={handleChange}></input>
                {msg.length > 0 && (
                    <div className='errorReactValidate'>{msg}</div>
                )}
            </div>
            <div className='row'>
            <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Add</button>
            </div>
        </form>
    );
}

export default Form;