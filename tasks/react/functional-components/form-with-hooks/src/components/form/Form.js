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
                {/* <div className='row'>
                    <label htmlFor='firstName' className='form-label'>First name</label>
                    <input type='text' className='form-control' name='firstName' id='firstName'
                        placeholder='Please enter the first name.' onChange={e => { setFirstName(e.target.value) }}></input>
                </div>
                <div className='row'>
                    <label htmlFor='lastName' className='form-label'>Last name</label>
                    <input type='text' className='form-control' name='lastName' id='lastName'
                        placeholder='Please enter the last name.' onChange={e => { setLastName(e.target.value) }}></input>
                </div>
                <div className='row'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input type='email' className='form-control' name='email' id='email'
                        placeholder='Please enter the email.' onChange={e => { setEmail(e.target.value) }}></input>
                </div>
                <div className='row'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' className='form-control' name='password' id='password'
                        placeholder='Please enter the password.' onChange={e => { setPassword(e.target.value) }}></input>
                </div>
                <div className='row'>
                    <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
                    <input type='text' className='form-control' name='confirmPassword' id='confirmPassword'
                        placeholder='Please enter the confirm password.' onChange={e => { setConfirmPassword(e.target.value) }}></input>
                </div> */}
            </form>
            <div className='row my-2 text-center fw-bold'>
                <p>Your Form Data</p>
            </div>
            <EnteredData data={[firstName, lastName, email, password, confirmPassword]}></EnteredData>
        </div>
    );
}

export default Form;