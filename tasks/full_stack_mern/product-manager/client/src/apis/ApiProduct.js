import axios from 'axios';

const getAllProducts = () => {
    return axios.get("http://localhost:8000/api/products/");
}

const getProduct = (params) => {
    let url = "http://localhost:8000/api/products/";
    if (params) {
        url += params.id;
    }
    return axios.get(url);
}

const addProduct = (body) => {
    return axios.post("http://localhost:8000/api/products/", body);
}

const editProduct = (body) => {
    let url = "http://localhost:8000/api/products/";
    if (body) {
        url += body._id;
    }

    return axios.put(url, body);
}

const removeProduct = (id) => {
    let url = "http://localhost:8000/api/products/" + id;

    return axios.delete(url);
}

const productMethods = { getAllProducts, getProduct, addProduct, editProduct, removeProduct };

export default productMethods;