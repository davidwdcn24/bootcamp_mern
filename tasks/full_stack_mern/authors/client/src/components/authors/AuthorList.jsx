import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authorsApi from '../../apis/authors.api';
import AuthorDelete from './AuthorDelete';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    const { getAllAuthors } = authorsApi;
    const navigate = useNavigate();

    useEffect(() => {
        getAllAuthors()
            .then(response => {
                setAuthors(response.data.sort((a, b) => { return a.name.localeCompare(b.name) }));
            })
            .catch(error => {
                console.log("Error get all products: ", error);
                setAuthors([]);
            });
    }, []);

    const deleteAuthor = (id) => {
        setAuthors(authors.filter(author => author._id !== id));
    }

    return (
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map((author, index) => {
                        return (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td className="text-center">
                                    <button type='button'
                                        className='btn btn-secondary ms-3 me-3'
                                        style={{ width: "150px" }}
                                        onClick={() => navigate(`/edit/${author._id}`, {})}>Edit</button>
                                    <AuthorDelete authorId={author._id} successCallBack={deleteAuthor} />
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    )
}

export default AuthorList