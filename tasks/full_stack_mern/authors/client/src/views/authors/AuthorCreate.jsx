import React, { useState } from 'react';
import AuthorForm from '../../components/authors/AuthorForm';
import Header from '../Header';
import authorsApi from '../../apis/authors.api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthorCreate = () => {
  const { addAuthor } = authorsApi;
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const createAuthor = (author) => {
    console.log(author);
    addAuthor(author)
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
        <Header type="create" />
      </div>
      <div className="row">
        <AuthorForm author={{}} errors={errors} save={createAuthor} />
      </div>
    </div>
  )
}

export default AuthorCreate;