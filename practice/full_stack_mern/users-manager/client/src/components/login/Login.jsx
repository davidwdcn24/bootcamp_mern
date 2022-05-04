import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [msnError, setMsnError] = useState("");
    const navigate = useNavigate();

    const validateUser = () => {
        axios.post("http://localhost:8000/api/account/login", {email: userName, password: password})
            .then(response => console.log(response))
            .catch(error => {
                setMsnError(error.response.data.message);
                console.log(error);
            });
    }

    return (
        <div className="container">
            <h3>LOGIN</h3>
            {msnError !== null && msnError.length > 0 && (
                <div className='alert alert-warning mt-3'>{msnError}</div>
            )}
            <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text">Email:</span>
                <input type="text"
                    id="userName"
                    name="userName"
                    className="form-control"
                    placeholder="Email"
                    aria-label="userName"
                    onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text">Contraseña:</span>
                <input type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Contraseña"
                    aria-label="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="d-grid gap-2 mt-3">
                <button type="button" className="btn btn-primary btn-lg" onClick={validateUser}>Ingresar</button>
            </div>
            <br></br>
            <div className="d-grid gap-2 mt-3">
                <button type="button" className="btn btn-primary btn-lg" onClick={()=> navigate("/register", {}) }>Registro</button>
            </div>
        </div>
    )
}

export default Login
