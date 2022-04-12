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
            {/* <div className='row'>
                <label htmlFor='iroFirsName' className='col-sm-3 col-form-label col-form-label-sm'>First name:</label>
                <div className='col-sm-9'>
                    <input type='text' className='form-control-plaintext' readOnly 
                        name='iroFirsName' id='iroFirsName' value={firstName}></input>
                </div>
            </div>
            <div className='row'>
                <label htmlFor='iroLastName' className='col-sm-3 col-form-label col-form-label-sm'>Last name:</label>
                <div className='col-sm-9'>
                    <input type='text' className='form-control-plaintext' readOnly 
                        name='iroLastName' id='iroLastName' value={lastName}></input>
                </div>
            </div>
            <div className='row'>
                <label htmlFor='iroEmail' className='col-sm-3 col-form-label col-form-label-sm'>Email:</label>
                <div className='col-sm-9'>
                    <input type='text' className='form-control-plaintext' readOnly 
                        name='iroEmail' id='iroEmail' value={email}></input>
                </div>
            </div>
            <div className='row'>
                <label htmlFor='iroPassword' className='col-sm-3 col-form-label col-form-label-sm'>Password:</label>
                <div className='col-sm-9'>
                    <input type='text' className='form-control-plaintext' readOnly 
                        name='iroPassword' id='iroPassword' value={password}></input>
                </div>
            </div>
            <div className='row'>
                <label htmlFor='iroConfirmPassword' className='col-sm-3 col-form-label col-form-label-sm'>Confirm Password:</label>
                <div className='col-sm-9'>
                    <input type='text' className='form-control-plaintext' readOnly 
                        name='iroConfirmPassword' id='iroConfirmPassword' value={confirmPassword}></input>
                </div>
            </div> */}
        </div>
    );
}

export default EnteredData;