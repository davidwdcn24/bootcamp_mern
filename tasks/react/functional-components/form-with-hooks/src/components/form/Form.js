import React, { useState } from 'react'
import EnteredData from '../entered-data/EntetedData';
import Input from './Input';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className='container'>
            <form>
                <Input id={"firsName"} inputType={"text"} text={"First name:"} setInput={setFirstName}></Input>
                <Input id={"lastName"} inputType={"text"} text={"Last name:"} setInput={setLastName}></Input>
                <Input id={"email"} inputType={"email"} text={"Email:"} setInput={setEmail}></Input>
                <Input id={"password"} inputType={"password"} text={"Password:"} setInput={setPassword}></Input>
                <Input id={"confirmPassword"} inputType={"password"} text={"Confirm password:"} setInput={setConfirmPassword}></Input>
            </form>
            <div className='row my-2 text-center fw-bold'>
                <p>Your Form Data</p>
            </div>
            <EnteredData data={[firstName, lastName, email, password, confirmPassword]}></EnteredData>
        </div>
    );
}

export default Form;