import React from 'react';
import authorsApi from '../../apis/authors.api';
import Swal from 'sweetalert2'

const AuthorDelete = (props) => {
    const { removeAuthor } = authorsApi;
    const { authorId, successCallBack } = props;

    const deleteAuthor = () => {
        Swal.fire({
            title: "¿Está seguro de eliminar el autor?",
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                removeAuthor(authorId);
                successCallBack(authorId);
            }
        })
    }

    return (
        <button type='button'
            className='btn btn-danger'
            style={{ width: "150px" }}
            onClick={() => deleteAuthor()}>Delete</button>
    )
}

export default AuthorDelete;