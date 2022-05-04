import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!mailformat.test(email.trim())) {
            setMsg(`El campo 'Email' no tiene un formato correcto.`);
            return;
        }

        const passFormat = /[A-Za-z0-9$@\.]{10}/;
        if (!passFormat.test(password.trim())) {
            setMsg("La contraseña no cumple con el estándar.");
            return;
        }

        // Si el password es incorrecto
        if (password !== confirmPassword) {
            setMsg("Las contraseñas no son iguales.");
            return;
        }

        const user = {
            firstName,
            lastName,
            email,
            password
        };

        axios.post("http://localhost:8000/api/users/", user)
            .then(response => {
                setMsg(`Usuario creado: ${response.data.id}.`)
                console.log(response);
                navigate("/", {});
            })
            .catch(error => {
                setMsg(`Se presentó un error: ${error.message}.`)
                console.log(error);
            });
    }

    return (
        <form onSubmit={handleSubmit} className="w-50">
            <h3>Registrar nuevo usuario</h3>
            {msg.length > 0 && (
                <div className='alert alert-warning mt-3'>{msg}</div>
            )}
            <div className="row mt-3 bg-light py-3">
                <label className="col-sm-2 col-form-label">Nombre:</label>
                <div className='col-sm-10'>
                    <input type="text" className="form-control" onChange={(evt) => setFirstName(evt.target.value)} />
                </div>
            </div>
            <div className="row mt-3 bg-light py-3">
                <label className="col-sm-2 col-form-label">Apellido:</label>
                <div className='col-sm-10'>
                <input type="text" className="form-control" onChange={(evt) => setLastName(evt.target.value)} />
                </div>
                
            </div>
            <div className="row mt-3 bg-light py-3">
                <label className="col-sm-2 col-form-label">Email:</label>
                <div className='col-sm-10'>
                <input type="email" className="form-control" onChange={(evt) => setEmail(evt.target.value)} />
                </div>
                
            </div>
            <div className="row mt-3 bg-light py-3">
                <label className="col-sm-2 col-form-label">Contraseña:</label>
                <div className='col-sm-10'>
                <input type="password" className="form-control" onChange={(evt) => setPassword(evt.target.value)} />
                </div>
            </div>
            <div className="row mt-3 bg-light py-3">
                <label className="col-sm-2 col-form-label">Confirmación contraseña:</label>
                <div className='col-sm-10'>
                <input type="password" className="form-control" onChange={(evt) => setConfirmPassword(evt.target.value)} />
                </div>
                
            </div>
            <div className="row mt-3">
                <button type="submit" className="btn btn-primary">Crear</button>
            </div>
        </form>
    )
}

export default Register;