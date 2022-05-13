import axios from 'axios';

const urlBase = "http://localhost:8000/api/authors/";

const getAllAuthors = () => {
    return axios.get(urlBase);
}

const getAuthor = (params) => {
    let url = urlBase;
    if (params) {
        url += params.id;
    }
    return axios.get(url);
}

const addAuthor = (body) => {
    return axios.post(urlBase, body);
}

const editAuthor = (body) => {
    let url = urlBase;
    if (body) {
        url += body._id;
    }

    return axios.put(url, body);
}

const removeAuthor = (id) => {
    let url = urlBase + id;

    return axios.delete(url);
}

const AuthorMethods = { getAllAuthors, getAuthor, addAuthor, editAuthor, removeAuthor };

export default AuthorMethods;