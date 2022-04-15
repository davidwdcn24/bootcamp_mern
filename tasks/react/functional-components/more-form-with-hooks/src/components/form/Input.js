import React, { useState } from 'react'
import styles from './Input.module.css'

const Input = ({ id, inputType, text, setInput, valPass }) => {
    // Setea la variable del error.
    const [errorMsg, setErrorMsg] = useState("");

    const name = text.substring(0, text.length - 1);
    const placeHolder = 'Please enter the ' + name.toLowerCase() + '.';

    const validateField = evt => {
        const data = evt.target.value;

        // Envía el valor a la variable principal.
        setInput(evt.target.value);

        switch (id) {
            case "firsName":
            case "lastName":
                // Si el campo es el nombre debe validar que tenga al menos 2 caracteres.
                setErrorMsg(data.length < 2 ? "El campo '" + name + "' debe tener al menos 2 caracteres" : "");
                break;
            case "email":
                // Si el campo es el email debe validar que tenga al menos 5 caracteres.
                setErrorMsg(data.length < 5 ? "El campo '" + name + "' debe tener al menos 5 caracteres" : "");
                break;
            case "password":
            case "confirmPassword":
                // Si el campo es password o confirmPassword deben tener al menos 8 caracteres.
                setErrorMsg(data.length < 8 ? "El campo '" + name + "' debe tener al menos 8 caracteres" : "");

                // Si es confimPassword y no es igual que el campo password
                if (id === "confirmPassword" && data.length >= 8) {
                    setErrorMsg(data === valPass ? "" : "El campo '" + name + "' no es igual al de 'Password'.");
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className='row mb-3'>
            <div className='input-group'>
                <span className='input-group-text'>{text}</span>
                <input type={inputType} className='form-control' name={id} id={id}
                    placeholder={placeHolder} onChange={validateField} />
            </div>
            <div className={styles.errorReactValidate}>{errorMsg}</div>
        </div>
    )
}

export default Input;