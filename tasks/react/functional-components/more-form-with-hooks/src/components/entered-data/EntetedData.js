import React from 'react'
import InputReadOnly from './InputReadOnly';

const EnteredData = props => {
    const [firstName, lastName, email, password, confirmPassword] = props.data;

    return (
        <div className='container'>
            <InputReadOnly id={"iroFirsName"} text={"First name:"} value={firstName}></InputReadOnly>
            <InputReadOnly id={"iroLastName"} text={"Last name:"} value={lastName}></InputReadOnly>
            <InputReadOnly id={"iroEmail"} text={"Email:"} value={email}></InputReadOnly>
            <InputReadOnly id={"iroPassword"} text={"Password:"} value={password}></InputReadOnly>
            <InputReadOnly id={"iroConfirmPassword"} text={"Confirm password:"} value={confirmPassword}></InputReadOnly>
        </div>
    );
}

export default EnteredData;