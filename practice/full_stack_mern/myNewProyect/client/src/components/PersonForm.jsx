import React, { useState } from 'react'
import axios from 'axios';

const PersonForm = (props) => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    // mantener el control de lo que se escribe a través del gancho useState
    const [firstName, setFirstName] = useState(initialFirstName); 
    const [lastName, setLastName] = useState(initialLastName);
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        // axios.post('http://localhost:8000/api/people', {
        //     firstName,
        //     lastName
        // })
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err));

        onSubmitProp({firstName, lastName});
    }
    //onChange para actualizar firstName y lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input 
                    type="text" 
                    name="firstName" value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
            </p>
            <p>
                <label>Last Name</label><br/>
                <input 
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
            </p>
            <input type="submit"/>
        </form>
    )
}

export default PersonForm;