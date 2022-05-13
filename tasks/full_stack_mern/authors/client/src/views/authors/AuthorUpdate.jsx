import React, { useEffect, useState } from 'react';
import AuthorForm from '../../components/authors/AuthorForm';
import Header from '../Header';
import authorsApi from '../../apis/authors.api';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthorUpdate = () => {
    const [author, setAuthor] = useState(null);
    const [errors, setErrors] = useState([]);
    const [msgError, setMsgError] = useState("");
    const { getAuthor, editAuthor } = authorsApi;
    let params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getAuthor({ id: params.id })
            .then(response => setAuthor(response.data))
            .catch(error => {
                console.log("Error: ", error);
                setMsgError(error.response.data.message);
            });
    }, []);

    const updateAuthor = (data) => {
        editAuthor(data)
            .then(response => {
                console.log("Response: ", response);
                setErrors([]);
                Swal.fire({
                    title: "Datos grabados exitosamente.",
                    confirmButtonText: "Aceptar"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/", {});
                    }
                });
            })
            .catch(error => {
                console.log("Error: ", error);

                const errorResponse = error.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Header type="edit" />
            </div>
            {author ? (
                <div className="row">
                    <AuthorForm author={author} errors={errors} save={updateAuthor} />
                </div>
            ) : (
                <div className="container-fluid">
                    <div className="row m-3 fw-bold font-monospace">{msgError}</div>
                    <div className="row mt-3">
                        <button type="button"
                            className="btn btn-primary m-auto"
                            style={{ width: "150px" }}
                            onClick={() => navigate("/new", {})}>Create</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default AuthorUpdate