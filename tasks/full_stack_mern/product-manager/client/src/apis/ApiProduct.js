import axios from 'axios';

const urlBase = "http://54.175.241.107:8000/api/products/";

const getAllProducts = () => {
    return axios.get(urlBase);
}

const getProduct = (params) => {
    let url = urlBase;
    if (params) {
        url += params.id;
    }
    return axios.get(url);
}

const addProduct = (body) => {
    return axios.post(urlBase, body);
}

const editProduct = (body) => {
    let url = urlBase;
    if (body) {
        url += body._id;
    }

    return axios.put(url, body);
}

const removeProduct = (id) => {
    let url = urlBase + id;

    return axios.delete(url);
}

const productMethods = { getAllProducts, getProduct, addProduct, editProduct, removeProduct };

export default productMethods;