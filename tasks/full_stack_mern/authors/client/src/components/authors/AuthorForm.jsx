import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    const { author, errors, save } = props;
    const [name, setName] = useState(author.name || "");
    const navigate = useNavigate();

    const submitHandler = evt => {
        evt.preventDefault();

        // Genera el objeto que va a enviar al componente.
        const newData = (author !== null && author !== undefined) ?
            { ...author, name: name } :
            { name: name };
        save(newData);
    }

    return (
        <div className="container-fluid mt-3">
            <form className="border border-secondary p-3"
                onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="name"
                        className="form-label">
                        Name:
                    </label>
                    <input type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={name}
                        placeholder="Ingrese un nombre."
                        onChange={(evt) => setName(evt.target.value)} />
                    {errors.map((err, index) => <p key={index}
                        className="fw-bold font-monospace">{err}</p>)}
                </div>
                <div className="mb-3 text-center">
                    <button type="button"
                        className="btn btn-secondary me-3"
                        onClick={() => navigate("/", {})}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AuthorForm